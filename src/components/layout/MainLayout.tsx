import type { ReactNode } from 'react';
import Navbar from '../../common-submodule/src/components/Navbar/Navbar';

const hostLinks = [
  { label: 'Experiencia', href: '#experiencia' },
  { label: 'Educación', href: '#educacion' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Sobre Mí', href: '#sobre-mi' },
  { label: 'Contacto', href: '#contacto' },
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
