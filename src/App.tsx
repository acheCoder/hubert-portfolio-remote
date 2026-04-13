import MainLayout from './components/layout/MainLayout';

export default function App() {
  return (
    <MainLayout>
      <div style={{ 
        fontFamily: 'var(--font-primary, system-ui, sans-serif)',
        color: 'var(--color-text-main)'
      }}>
        <header style={{ marginBottom: '2rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', margin: 0, color: 'var(--color-text-main)' }}>
            💻 Mi Porfolio de Desarrollador
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)' }}>Hubert Chim — Fullstack Developer & Fitness Coach</p>
        </header>

        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {/* Tarjeta de Proyecto 1 */}
          <div style={{ padding: '1.5rem', backgroundColor: 'var(--color-surface)', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', border: '1px solid var(--color-border)' }}>
            <h3 style={{ marginTop: 0 }}>🚀 Agencia Visual B2B</h3>
            <p style={{ color: 'var(--color-text-muted)' }}>Sistema de microfrontends escalable desarrollado con React y Vite.</p>
            <div style={{ display: 'flex', gap: '8px', fontSize: '0.8rem' }}>
              <span style={{ background: 'var(--color-accent)', color: '#ffffff', padding: '4px 8px', borderRadius: '4px', opacity: 0.9 }}>React</span>
              <span style={{ background: 'var(--color-accent)', color: '#ffffff', padding: '4px 8px', borderRadius: '4px', opacity: 0.9 }}>Module Federation</span>
            </div>
          </div>

          {/* Tarjeta de Proyecto 2 */}
          <div style={{ padding: '1.5rem', backgroundColor: 'var(--color-surface)', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', border: '1px solid var(--color-border)' }}>
            <h3 style={{ marginTop: 0 }}>💪 Fitness Tracker</h3>
            <p style={{ color: 'var(--color-text-muted)' }}>Aplicación de seguimiento de entrenamiento y nutrición personalizada.</p>
            <div style={{ display: 'flex', gap: '8px', fontSize: '0.8rem' }}>
              <span style={{ background: 'var(--color-accent)', color: '#ffffff', padding: '4px 8px', borderRadius: '4px', opacity: 0.9 }}>Redux</span>
              <span style={{ background: 'var(--color-accent)', color: '#ffffff', padding: '4px 8px', borderRadius: '4px', opacity: 0.9 }}>Node.js</span>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}