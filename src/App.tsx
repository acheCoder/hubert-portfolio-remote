export default function App() {
  return (
    <div style={{ 
      fontFamily: 'system-ui, sans-serif',
      color: '#1e293b'
    }}>
      <header style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '800', margin: 0, color: '#0f172a' }}>
          💻 Mi Porfolio de Desarrollador
        </h1>
        <p style={{ fontSize: '1.1rem', opacity: 0.7 }}>Hubert Chim — Fullstack Developer & Fitness Coach</p>
      </header>

      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
        {/* Tarjeta de Proyecto 1 */}
        <div style={{ padding: '1.5rem', backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0' }}>
          <h3 style={{ marginTop: 0 }}>🚀 Agencia Visual B2B</h3>
          <p>Sistema de microfrontends escalable desarrollado con React y Vite.</p>
          <div style={{ display: 'flex', gap: '8px', fontSize: '0.8rem' }}>
            <span style={{ background: '#eff6ff', color: '#1d4ed8', padding: '4px 8px', borderRadius: '4px' }}>React</span>
            <span style={{ background: '#eff6ff', color: '#1d4ed8', padding: '4px 8px', borderRadius: '4px' }}>Module Federation</span>
          </div>
        </div>

        {/* Tarjeta de Proyecto 2 */}
        <div style={{ padding: '1.5rem', backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0' }}>
          <h3 style={{ marginTop: 0 }}>💪 Fitness Tracker</h3>
          <p>Aplicación de seguimiento de entrenamiento y nutrición personalizada.</p>
          <div style={{ display: 'flex', gap: '8px', fontSize: '0.8rem' }}>
            <span style={{ background: '#fef2f2', color: '#991b1b', padding: '4px 8px', borderRadius: '4px' }}>Redux</span>
            <span style={{ background: '#fef2f2', color: '#991b1b', padding: '4px 8px', borderRadius: '4px' }}>Node.js</span>
          </div>
        </div>
      </section>
    </div>
  );
}