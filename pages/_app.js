import '../styles/globals.css';

function ComingSoon() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0b0b0f', color: '#ffffff', textAlign: 'center', padding: '2rem' }}>
      <div>
        <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem' }}>V3 Coming Soon</h1>
        <p style={{ opacity: 0.8 }}>Site WIP</p>
      </div>
    </div>
  );
}

function MyApp({ Component, pageProps }) {
  return <ComingSoon />;
}

export default MyApp;