import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h1>Willkommen zum Webservice</h1>
      <Link href="/app/dashboard" style={{
        padding: '10px 20px', fontSize: '16px', textDecoration: 'none', color: 'white',
        backgroundColor: '#0070f3', borderRadius: '5px'
      }}>
        Gehe zum Dashboard
      </Link>
    </div>
  );
}
