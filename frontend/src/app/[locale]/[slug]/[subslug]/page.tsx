import { notFound } from 'next/navigation';
import TeamMemberDetailPage from '@/app/equipo/[slug]/page';
import PracticeAreaDetailPage from '@/app/areas-de-practica/[slug]/page';
import { getPageKeyFromPathname } from '@/i18n/navigation';
import { fallbackTeam, fallbackPracticeAreas } from '@/services/api';

export const dynamicParams = true;

export function generateStaticParams() {
  const locales = ['en', 'zh', 'ko'];
  const teamSlugs = ['team', 'equipo', 'tuandui'];
  const areaSlugs = ['practice-areas', 'areas-de-practica', 'services', 'fuwu'];

  const memberSubslugs = fallbackTeam.map((m) => m.slug).filter(Boolean);
  const areaSubslugs = fallbackPracticeAreas.map((a) => a.slug).filter(Boolean);

  const params: { locale: string; slug: string; subslug: string }[] = [];

  for (const locale of locales) {
    for (const slug of teamSlugs) {
      for (const subslug of memberSubslugs) {
        params.push({ locale, slug, subslug });
      }
    }
    for (const slug of areaSlugs) {
      for (const subslug of areaSubslugs) {
        params.push({ locale, slug, subslug });
      }
    }
  }

  return params;
}

interface LocalizedDetailProps {
  params: Promise<{
    locale: string;
    slug: string;
    subslug: string;
  }>;
}

export default async function LocalizedDetailSubPage({ params }: LocalizedDetailProps) {
  const { slug, subslug } = await params;
  const pageKey = getPageKeyFromPathname(slug);

  switch (pageKey) {
    case 'team':
      return <TeamMemberDetailPage />;
    case 'practiceAreas':
      return <PracticeAreaDetailPage />;
    default:
      if (['team', 'equipo', 'tuandui'].includes(slug.toLowerCase())) {
        return <TeamMemberDetailPage />;
      }
      if (['practice-areas', 'areas-de-practica', 'services', 'fuwu'].includes(slug.toLowerCase())) {
        return <PracticeAreaDetailPage />;
      }
      notFound();
  }
}
