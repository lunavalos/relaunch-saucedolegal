import HomePage from '../page';

export function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'zh' },
    { locale: 'ko' },
  ];
}

export default function LocalizedHomePage() {
  return <HomePage />;
}
