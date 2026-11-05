import type { Metadata } from 'next';
import { Lora, Raleway } from 'next/font/google';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './globals.css';
import { LanguageProvider } from '@/i18n/LanguageContext';
import { Header } from '@/components/Header';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { SitePreloader } from '@/components/SitePreloader';
import { ScrollRevealManager } from '@/components/ScrollRevealManager';

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
});

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Saucedo Legal — Consultoría Jurídica y Mediación',
  description: 'Firma legal líder con más de 20 años de experiencia en asesoría jurídica integral, corporativa, laboral y mediación estratégica en México.',
  icons: {
    icon: [
      { url: '/images/nuevo favicon.png' },
      { url: '/favicon.ico' },
    ],
    shortcut: '/images/nuevo favicon.png',
    apple: '/images/nuevo favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${lora.variable} ${raleway.variable}`}>
      <body className="bg-[#0d0e10] text-white selection:bg-[#959597] selection:text-white antialiased font-serif">
        <LanguageProvider>
          <SitePreloader />
          <ScrollRevealManager />
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <WhatsAppButton />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
