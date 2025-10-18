import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: 24, fontFamily: 'system-ui, Arial' }}>
      <h1>ROI API Project — Deployed Live</h1>
      <p>Build check OK.</p>
      <p>
        <Link href="/roi-test" style={{ color: '#0366d6', textDecoration: 'underline' }}>
          Open ROI API Test
        </Link>
      </p>
    </main>
  );
}
