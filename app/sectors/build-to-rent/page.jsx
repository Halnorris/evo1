import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Audiences from '@/components/Audiences';
import PhoneStepStrip from '@/components/PhoneStepStrip';
import PilotSection from '@/components/PilotSection';
import ClosingCta from '@/components/ClosingCta';
import { getOrgType, plans, formatPrice, combinedPrice } from '@/data/plans';
import { cta } from '@/data/site';

export const metadata = {
  title: 'Repairs for Build to Rent | EVO',
  description:
    'Home Trust is designed for new-build and Build to Rent: repairs up to £2,500 plus VAT each, covering up to 99% of reactive repairs, with a resident app to match.',
  alternates: { canonical: '/sectors/build-to-rent' },
};

export default function BuildToRentPage() {
  const btr = getOrgType('btr');
  const trust = plans.find((p) => p.id === 'homeTrust');
  return (
    <>
      <PageHero
        eyebrow="Build to Rent"
        title="Repairs that keep residents at the centre."
        lead="In Build to Rent, the resident experience is the product. EVO runs repairs end to end, for one fixed monthly price per home, with an app that keeps residents told what is happening until the job is done."
        crumbs={[{ href: '/sectors', label: 'Who we help' }, { label: 'Build to Rent' }]}
      >
        <div className="btn-row">
          <Link href="/pricing?type=btr" className="btn btn-primary">
            See Build to Rent prices
          </Link>
          <Link href={cta.review.href} className="btn btn-secondary">
            {cta.review.label}
          </Link>
        </div>
      </PageHero>

      <section className="section" aria-labelledby="trust-title">
        <div className="container">
          <div className="split split--top">
            <div>
              <p className="eyebrow">Home Trust</p>
              <h2 id="trust-title">Designed for new-build and Build to Rent.</h2>
              <p className="lead">{trust.description}</p>
              <p>
                <strong>{trust.thresholdLabel}.</strong> {trust.coverage}. The fewest exceptions.
              </p>
              <Link href="/pricing?type=btr" className="text-link">
                Explore Home Trust and the Build to Rent prices
              </Link>
            </div>
            <div className="card card--grey">
              <h3>Build to Rent prices</h3>
              <p className="muted">Per home per month, plus VAT.</p>
              <div className="table-wrap">
                <table className="data" style={{ minWidth: 0 }}>
                  <tbody>
                    <tr>
                      <th scope="row">Managed Technology (included with every plan)</th>
                      <td>{formatPrice(btr.managedTechnology)}</td>
                    </tr>
                    {plans.map((p) => {
                      const c = combinedPrice('btr', p.id);
                      return (
                        <tr key={p.id}>
                          <th scope="row">Managed Technology + {p.name}</th>
                          <td>{c == null ? 'Price on application' : formatPrice(c)}</td>
                        </tr>
                      );
                    })}
                    <tr>
                      <th scope="row">Electrical Compliance Cover (optional)</th>
                      <td>{formatPrice(btr.addons.electrical)}</td>
                    </tr>
                    <tr>
                      <th scope="row">Gas Boiler Cover (optional)</th>
                      <td>{formatPrice(btr.addons.gasBoiler)}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--grey" aria-labelledby="resident-title">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">The resident experience</p>
            <h2 id="resident-title">A repair reported in half a minute.</h2>
            <p className="lead">
              The EVO Living App is more than a way to report a repair. Residents can open documents, user guides and FAQs about their
              home, and track every job until it is done.
            </p>
          </div>
          <PhoneStepStrip />
        </div>
      </section>

      <section className="section" aria-labelledby="platform-title">
        <div className="container">
          <div className="section-head">
            <h2 id="platform-title">One platform, built for the three people a repair involves.</h2>
          </div>
          <Audiences />
        </div>
      </section>

      <PilotSection grey />
      <ClosingCta />
    </>
  );
}
