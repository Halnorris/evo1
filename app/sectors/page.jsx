import PageHero from '@/components/PageHero';
import SectorTiles from '@/components/SectorTiles';
import ClosingCta from '@/components/ClosingCta';

export const metadata = {
  title: 'Who we help | EVO',
  description:
    'EVO works with housing associations, local authority housing companies and Build to Rent, typically 300 to 5,000 homes, as well as private landlords and letting agents.',
  alternates: { canonical: '/sectors' },
};

export default function SectorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Who we help"
        title="Repairs for housing associations, local authorities and Build to Rent."
        lead="We work with local authority housing companies, housing associations, charities and institutional landlords. Private landlords and letting agents use EVO too."
        crumbs={[{ label: 'Who we help' }]}
      />
      <section className="section">
        <div className="container">
          <SectorTiles />
        </div>
      </section>
      <ClosingCta />
    </>
  );
}
