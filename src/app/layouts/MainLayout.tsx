import { Outlet } from 'react-router-dom';
import Navbar from '@/common-submodule/src/components/Navbar/Navbar';
import { useLanguage } from '@/app/context/LanguageContext';
import './MainLayout.scss';

const NAV_KEYS = [
  { key: 'inicio',       href: '/' },
  { key: 'experiencia',  href: '/experiencia' },
  { key: 'sobre mí',     href: '/sobre-mi' },
  { key: 'contacto',     href: '/contacto' },
];

const MainLayout = () => {
  const { lang, t } = useLanguage();

  const links = NAV_KEYS.map((n) => ({
    label: t(`nav.${n.key}`),
    href: n.href,
  }));

  return (
    <>
      <Navbar links={links} lang={lang} />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
