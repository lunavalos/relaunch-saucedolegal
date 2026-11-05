import { notFound } from 'next/navigation';
import NosotrosPage from '@/app/nosotros/page';
import EquipoPage from '@/app/equipo/page';
import AreasPage from '@/app/areas-de-practica/page';
import VideosPage from '@/app/videos/page';
import GaleriaPage from '@/app/galeria/page';
import ColaboracionesPage from '@/app/colaboraciones/page';
import ContactoPage from '@/app/contacto/page';
import { getPageKeyFromPathname } from '@/i18n/navigation';

export function generateStaticParams() {
  const locales = ['en', 'zh', 'ko'];
  const slugs = [
    'about', 'nosotros', 'guanyu',
    'team', 'equipo', 'tuandui',
    'practice-areas', 'areas-de-practica', 'services', 'fuwu',
    'videos',
    'gallery', 'galeria',
    'collaborations', 'colaboraciones',
    'contact', 'contacto',
  ];

  const params: { locale: string; slug: string }[] = [];
  for (const locale of locales) {
    for (const slug of slugs) {
      params.push({ locale, slug });
    }
  }
  return params;
}

interface PageProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export default async function LocalizedSubPage({ params }: PageProps) {
  const { slug } = await params;
  const pageKey = getPageKeyFromPathname(slug);

  switch (pageKey) {
    case 'about':
      return <NosotrosPage />;
    case 'team':
      return <EquipoPage />;
    case 'practiceAreas':
      return <AreasPage />;
    case 'videos':
      return <VideosPage />;
    case 'gallery':
      return <GaleriaPage />;
    case 'collaborations':
      return <ColaboracionesPage />;
    case 'contact':
      return <ContactoPage />;
    default:
      notFound();
  }
}
