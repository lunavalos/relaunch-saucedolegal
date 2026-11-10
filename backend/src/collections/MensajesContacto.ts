import type { CollectionConfig } from 'payload'
import nodemailer from 'nodemailer'

export const MensajesContacto: CollectionConfig = {
  slug: 'mensajes-contacto',
  labels: {
    singular: 'Mensaje de Contacto',
    plural: 'Mensajes de Contacto',
  },
  admin: {
    useAsTitle: 'nombre',
    defaultColumns: ['nombre', 'correo', 'telefono', 'servicios', 'estado', 'emailEnviado', 'createdAt'],
    description: 'Mensajes recibidos desde el formulario de contacto del sitio web.',
  },
  access: {
    create: () => true,
    read: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
  },
  hooks: {
    beforeChange: [
      async ({ data, operation }) => {
        if (operation !== 'create' || !data) return data

        // 1. Verificar token de reCAPTCHA v3 (si está presente)
        const token = data.recaptchaToken
        const secret = process.env.RECAPTCHA_SECRET_KEY

        if (token && secret) {
          try {
            const params = new URLSearchParams({
              secret,
              response: token,
            })
            const verifyRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
              method: 'POST',
              headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
              body: params.toString(),
            })
            const verifyJson: any = await verifyRes.json()

            if (typeof verifyJson.score === 'number') {
              data.recaptchaScore = verifyJson.score
            }

            if (verifyJson.success && typeof verifyJson.score === 'number' && verifyJson.score < 0.2) {
              throw new Error('Actividad sospechosa detectada por reCAPTCHA.')
            }
          } catch (err: any) {
            if (err?.message?.includes('reCAPTCHA')) {
              throw err
            }
            console.warn('[reCAPTCHA] Error verificando token:', err)
          }
        }

        // 2. Enviar notificación por correo electrónico vía SMTP
        const cleanEnv = (val?: string) => val?.trim().replace(/^['"]|['"]$/g, '')
        const smtpHost = cleanEnv(process.env.SMTP_HOST) || 'mail.saucedolegal.com'
        const smtpPort = Number(cleanEnv(process.env.SMTP_PORT) || 465)
        const smtpUser = cleanEnv(process.env.SMTP_USER) || 'noreply@saucedolegal.com'
        let smtpPass = cleanEnv(process.env.SMTP_PASS)
        const receiverEmail = cleanEnv(process.env.CONTACT_RECEIVER_EMAIL) || 'contacto@saucedolegal.com'

        // Soportar contraseña en Base64 (prefijo base64:) o restaurar $ux si Docker/Coolify lo interpoló como variable vacía
        if (smtpPass?.startsWith('base64:')) {
          smtpPass = Buffer.from(smtpPass.slice(7), 'base64').toString('utf8')
        } else if (smtpPass?.startsWith('(z4*')) {
          smtpPass = smtpPass.replace('(z4*', '(z4$ux*')
        }

        const baseLang = (data.idioma || 'es').toUpperCase()

        if (!smtpPass) {
          console.warn('[Contacto SMTP] Falta la variable de entorno SMTP_PASS. El mensaje se guardó en Payload pero no se envió por correo.')
          data.emailEnviado = false
          data.idioma = `${baseLang} — Falta variable SMTP_PASS en Coolify`
          return data
        }

        const htmlBody = `
          <div style="font-family: Georgia, serif; max-width: 620px; margin: 0 auto; border: 1px solid #e5e7eb; background-color: #ffffff; color: #111214;">
            <div style="background-color: #111214; color: #ffffff; padding: 24px 32px;">
              <p style="margin: 0; font-family: Arial, sans-serif; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: #959597;">
                SAUCEDO CONSULTORÍA JURÍDICA Y MEDIACIÓN
              </p>
              <h2 style="margin: 8px 0 0 0; font-weight: normal; font-size: 22px;">
                Nuevo Mensaje de Contacto
              </h2>
            </div>
            <div style="padding: 32px;">
              <table style="width: 100%; border-collapse: collapse; font-family: Arial, sans-serif; font-size: 14px;">
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; width: 160px;"><strong>Nombre:</strong></td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111214;">${data.nombre || '-'}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280;"><strong>Correo electrónico:</strong></td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111214;">
                    <a href="mailto:${data.correo}" style="color: #111214;">${data.correo || '-'}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280;"><strong>Teléfono:</strong></td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111214;">${data.telefono || 'No proporcionado'}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280;"><strong>Servicios de interés:</strong></td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111214;">${data.servicios || 'No especificado'}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280;"><strong>Idioma:</strong></td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111214;">${baseLang}</td>
                </tr>
              </table>

              <div style="margin-top: 24px;">
                <p style="font-family: Arial, sans-serif; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: #6b7280; margin-bottom: 8px;">
                  <strong>Detalles del Asunto / Mensaje:</strong>
                </p>
                <div style="background-color: #f9fafb; border-left: 3px solid #111214; padding: 16px; font-family: Georgia, serif; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${data.mensaje || ''}</div>
              </div>
            </div>
            <div style="background-color: #f9fafb; padding: 16px 32px; border-top: 1px solid #e5e7eb; font-family: Arial, sans-serif; font-size: 12px; color: #6b7280;">
              Puedes responder directamente a este correo para contactar a <strong>${data.nombre}</strong> (${data.correo}).
            </div>
          </div>
        `

        const portsToTry = smtpPort === 465 ? [465, 587] : [smtpPort, 465]
        let lastError = ''

        for (const port of portsToTry) {
          try {
            const transporter = nodemailer.createTransport({
              host: smtpHost,
              port,
              secure: port === 465,
              auth: {
                user: smtpUser,
                pass: smtpPass,
              },
              tls: {
                rejectUnauthorized: false,
              },
              connectionTimeout: 10000,
              greetingTimeout: 10000,
              socketTimeout: 15000,
            })

            await transporter.sendMail({
              from: `"Saucedo Legal Web" <${smtpUser}>`,
              to: receiverEmail,
              replyTo: data.correo,
              subject: `Nuevo mensaje de contacto: ${data.nombre} — Saucedo Legal`,
              html: htmlBody,
            })

            data.emailEnviado = true
            data.idioma = `${baseLang} (Enviado a ${receiverEmail} vía ${smtpHost}:${port})`
            lastError = ''
            break
          } catch (err: any) {
            lastError = err?.message || String(err)
            console.error(`[Contacto SMTP] Error en ${smtpHost}:${port} (${smtpUser}):`, lastError)
            data.emailEnviado = false
          }
        }

        if (!data.emailEnviado && lastError) {
          data.idioma = `${baseLang} — Error SMTP (${smtpUser}@${smtpHost}): ${lastError}`
        }

        return data
      },
    ],
  },
  fields: [
    {
      name: 'nombre',
      type: 'text',
      required: true,
      label: 'Nombre Completo',
    },
    {
      type: 'row',
      fields: [
        {
          name: 'correo',
          type: 'email',
          required: true,
          label: 'Correo Electrónico',
          admin: { width: '50%' },
        },
        {
          name: 'telefono',
          type: 'text',
          label: 'Teléfono de Contacto',
          admin: { width: '50%' },
        },
      ],
    },
    {
      name: 'servicios',
      type: 'text',
      label: 'Servicios / Áreas de Interés',
    },
    {
      name: 'mensaje',
      type: 'textarea',
      required: true,
      label: 'Detalles del Asunto / Mensaje',
    },
    {
      type: 'row',
      fields: [
        {
          name: 'estado',
          type: 'select',
          defaultValue: 'nuevo',
          label: 'Estado de Atención',
          options: [
            { label: 'Nuevo', value: 'nuevo' },
            { label: 'En Revisión', value: 'en-revision' },
            { label: 'Atendido', value: 'atendido' },
          ],
          admin: { width: '33%' },
        },
        {
          name: 'idioma',
          type: 'text',
          defaultValue: 'es',
          label: 'Idioma',
          admin: { width: '33%', readOnly: true },
        },
        {
          name: 'emailEnviado',
          type: 'checkbox',
          defaultValue: false,
          label: 'Notificación enviada por correo',
          admin: { width: '34%', readOnly: true },
        },
      ],
    },
    {
      name: 'recaptchaScore',
      type: 'number',
      label: 'Puntaje reCAPTCHA v3',
      admin: {
        readOnly: true,
        position: 'sidebar',
      },
    },
    {
      name: 'recaptchaToken',
      type: 'text',
      admin: {
        hidden: true,
      },
    },
  ],
}
