import Link from 'next/link';

// HOME-11: large tiles for the three housing sectors, then one smaller private tile.
export const sectors = [
  {
    href: '/sectors/housing-associations',
    title: 'Housing associations',
    body: 'Repairs run end to end, with the evidence you need for the consumer standards and Awaab’s Law.',
  },
  {
    href: '/sectors/local-authorities',
    title: 'Local authorities',
    body: 'For councils and local authority housing companies that want certainty over repairs, cost and evidence.',
  },
  {
    href: '/sectors/build-to-rent',
    title: 'Build to Rent',
    body: 'Home Trust, designed for new-build and Build to Rent, with a resident experience to match.',
  },
];

export default function SectorTiles() {
  return (
    <div className="sector-tiles swipe-mobile">
      {sectors.map((s) => (
        <Link key={s.href} href={s.href} className="sector-tile">
          <h3>{s.title}</h3>
          <p className="mb-0">{s.body}</p>
          <span className="go">Find out more</span>
        </Link>
      ))}
      <Link href="/sectors/landlords" className="sector-tile sector-tile--small">
        <h3>Private landlords and letting agents</h3>
        <span className="go">Find out more</span>
      </Link>
    </div>
  );
}
