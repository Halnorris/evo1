import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Quote from '@/components/Quote';
import ClosingCta from '@/components/ClosingCta';
import { landlordTestimonials } from '@/data/testimonials';
import { getOrgType, formatPrice, combinedPrice } from '@/data/plans';
import { cta } from '@/data/site';

export const metadata = {
  title: 'Repairs and maintenance for private landlords | EVO',
  description:
    'A fixed-fee, end-to-end repairs service for private landlords: vetted trades, 24/7 emergency cover, a 12-month warranty on every job and full visibility in the EVO Dashboard.',
  alternates: { canonical: '/sectors/landlords' },
};

export default function LandlordsPage() {
  const prs = getOrgType('prs');
  return (
    <>
      <PageHero
        eyebrow="Private landlords"
        title="Repairs and compliance, taken off your hands."
        lead="A fixed-fee, end-to-end repairs service, run through one secure platform, so you can focus on your day job and not worry about repairs and compliance."
        crumbs={[{ href: '/sectors', label: 'Who we help' }, { label: 'Private landlords' }]}
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

      <section className="section" aria-label="What you get">
        <div className="container">
          <div className="grid-3 swipe-mobile">
            <div className="card card--grey">
              <h2 style={{ fontSize: '1.3rem' }}>Complete visibility</h2>
              <p>
                See every issue raised and every job carried out. Be as involved as you like: compliance is managed for you, and the EVO
                Dashboard holds the full property history.
              </p>
            </div>
            <div className="card card--grey">
              <h2 style={{ fontSize: '1.3rem' }}>No more hunting for a tradesperson</h2>
              <p>
                Our vetted, DBS-checked trades are matched to each job by skill. No panicked phone calls and no scrambling around. Every
                job comes with a 12-month warranty.
              </p>
            </div>
            <div className="card card--grey">
              <h2 style={{ fontSize: '1.3rem' }}>One fixed monthly price</h2>
              <p>
                Managed Technology and a repair plan from {formatPrice(combinedPrice('prs', 'home500'))} per home per month, plus VAT.
                No per-job pricing and no limit on the number of repairs within your plan.
              </p>
              <Link href="/pricing?type=prs" className="text-link">
                Plans and pricing
              </Link>
            </div>
          </div>
          <p className="muted mt-2">
            Private Rental Sector prices: Managed Technology {formatPrice(prs.managedTechnology)}, Home 500 {formatPrice(prs.plans.home500)},
            Home 1000 {formatPrice(prs.plans.home1000)}, per home per month, plus VAT.
          </p>
        </div>
      </section>

      <section className="section section--grey" aria-labelledby="landlord-quotes">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">What landlords say</p>
            <h2 id="landlord-quotes">From landlords and property managers who use EVO.</h2>
          </div>
          <div className="grid-3 swipe-mobile">
            {landlordTestimonials.map((t) => (
              <Quote key={t.name} t={t} card />
            ))}
          </div>
        </div>
      </section>

      {/* Moved from the site-wide banner (brief 6.5 / 6.12) */}
      <section className="section" aria-labelledby="rra-title">
        <div className="container">
          <div className="card card--shadow split">
            <div>
              <p className="eyebrow">Free guide</p>
              <h2 id="rra-title">The Landlords Guide to the Renters Rights Act.</h2>
              <p>Sign up to our mailing list for industry news and legislative changes, and get a free copy of our guide.</p>
            </div>
            <div>
              <Link href="/renters-rights-guide" className="btn btn-primary">
                Get the free guide
              </Link>
              <p className="mt-2">
                <Link href="/insights/the-renters-rights-act-what-uk-landlords-need-to-know-and-how-to-prepare" className="text-link">
                  Read: The Renters Rights Act, what UK landlords need to know
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
