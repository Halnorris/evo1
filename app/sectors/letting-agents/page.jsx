import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Audiences from '@/components/Audiences';
import ClosingCta from '@/components/ClosingCta';
import { formatPrice, combinedPrice } from '@/data/plans';
import { cta } from '@/data/site';

export const metadata = {
  title: 'Repairs and maintenance for letting agents | EVO',
  description:
    'Take repairs off your property team: EVO logs every request, dispatches vetted trades, keeps tenants updated and gives you full visibility, for one fixed monthly price per home.',
  alternates: { canonical: '/sectors/letting-agents' },
};

export default function LettingAgentsPage() {
  return (
    <>
      <PageHero
        eyebrow="Letting agents"
        title="Is your property team weighed down by repairs?"
        lead="Managing repairs, chasing tradespeople and handling payments takes time your team does not have. EVO runs the whole repairs process for you, with full visibility for everyone involved."
        crumbs={[{ href: '/sectors', label: 'Who we help' }, { label: 'Letting agents' }]}
      >
        <div className="btn-row">
          <Link href="/pricing?type=prs" className="btn btn-primary">
            See Private Rental Sector prices
          </Link>
          <Link href={cta.demo.href} className="btn btn-secondary">
            {cta.demo.label}
          </Link>
        </div>
      </PageHero>

      <section className="section" aria-label="How EVO helps letting agents">
        <div className="container">
          <div className="grid-3">
            <div className="card card--grey">
              <h2 style={{ fontSize: '1.3rem' }}>Every request logged</h2>
              <p>
                Tenants report repairs in the EVO Living App, and urgent jobs go straight to vetted trades matched to the job by skill.
              </p>
            </div>
            <div className="card card--grey">
              <h2 style={{ fontSize: '1.3rem' }}>One dashboard</h2>
              <p>Track progress, manage compliance and see the service history of every property, all in one place.</p>
            </div>
            <div className="card card--grey">
              <h2 style={{ fontSize: '1.3rem' }}>Tenants kept informed</h2>
              <p>
                Tenants see real-time updates in the app, from booking to completion, so fewer calls come back to your office.
              </p>
            </div>
          </div>
          <p className="mt-2">
            One fixed monthly price per home, from {formatPrice(combinedPrice('prs', 'home500'))} plus VAT for Managed Technology and
            Home 500.{' '}
            <Link href="/pricing?type=prs" className="text-link">
              Plans and pricing
            </Link>
          </p>
        </div>
      </section>

      <section className="section section--grey" aria-labelledby="la-platform">
        <div className="container">
          <div className="section-head">
            <h2 id="la-platform">One platform, built for the three people a repair involves.</h2>
          </div>
          <Audiences />
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
