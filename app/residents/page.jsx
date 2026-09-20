import Link from 'next/link';
import PageHero from '@/components/PageHero';
import AppBadges from '@/components/AppBadges';
import Tbc from '@/components/Tbc';
import { contact } from '@/data/site';

export const metadata = {
  title: 'Residents: report a repair | EVO',
  description:
    'Report a repair or an emergency in the EVO Living App, find step-by-step guides and answers to common questions.',
  alternates: { canonical: '/residents' },
};

export default function ResidentsPage() {
  return (
    <>
      <PageHero
        eyebrow="Residents"
        title="Need a repair? We are here to help."
        lead="Report a repair in the EVO Living App in under 30 seconds, day or night. You can also phone, use WhatsApp or email us."
        crumbs={[{ label: 'Residents' }]}
      >
        <div className="card card--shadow mt-2" style={{ maxWidth: 620 }}>
          <p className="eyebrow">Call us</p>
          <p className="mb-0" style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--navy-deep)' }}>
            {contact.residentPhone ? <a href={`tel:${contact.residentPhone.replace(/\s/g, '')}`}>{contact.residentPhone}</a> : <Tbc>resident phone number</Tbc>}
          </p>
          <p className="mt-1 mb-0">
            Email: <a href={`mailto:${contact.residentEmail}`}>{contact.residentEmail}</a>{' '}
            {!contact.residentEmailConfirmed && <Tbc>helpdesk@ or living@evo-pm.com</Tbc>}
          </p>
          <p className="mt-1 mb-0">
            <strong>The contact form on this site is not for reporting repairs.</strong>
          </p>
        </div>
      </PageHero>

      <section className="section" aria-label="Resident help">
        <div className="container">
          <div className="grid-2">
            <div className="card card--grey">
              <h2 style={{ fontSize: '1.4rem' }}>Report a repair</h2>
              <p>
                Download the EVO Living App, tap &quot;Report a Problem&quot;, describe the issue and add a photo. You get a reference
                number straight away.
              </p>
              <AppBadges app="living" />
            </div>
            <div className="card card--grey">
              <h2 style={{ fontSize: '1.4rem' }}>Report an emergency</h2>
              <p>
                For a burst pipe, flooding, total loss of power or heating, or a home you cannot secure, tap &quot;Emergency&quot; in the
                app or call us. We respond 24 hours a day.
              </p>
              <Link href="/how-to-guides/reporting-an-emergency" className="text-link">
                How to report an emergency
              </Link>
            </div>
            <Link href="/how-to-guides" className="card card--grey card-link">
              <h2 style={{ fontSize: '1.4rem' }}>How-to guides</h2>
              <p>Step-by-step guides to using the EVO Living App, with screenshots.</p>
              <span className="text-link">See the guides</span>
            </Link>
            <Link href="/faqs/residents" className="card card--grey card-link">
              <h2 style={{ fontSize: '1.4rem' }}>Frequently asked questions</h2>
              <p>Registering, appointments, who is coming and what counts as an emergency.</p>
              <span className="text-link">Read the FAQs</span>
            </Link>
          </div>
          <div className="card mt-3">
            <h2 style={{ fontSize: '1.2rem' }}>Seeing damp or mould at home?</h2>
            <p className="mb-0">
              Report it in the EVO Living App. Choose the category, describe what you can see and add a photo. You will get a reference
              number straight away. If you cannot use the app, call us on <Tbc>resident phone number</Tbc>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
