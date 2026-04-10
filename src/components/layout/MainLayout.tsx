import type { ReactNode } from 'react';
import Navbar from '../../common-submodule/src/components/Navbar/Navbar';

const hostLinks = [
  { label: 'Panel de Control', href: '/' },
  { label: 'Configuración', href: '/settings' },
];

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Navbar links={hostLinks} />
      <main style={{ paddingTop: '100px' }}>
        {children}
      </main>
    </>
  );
}
