import SocialSectorPage from '@/components/SocialSectorPage';

export const metadata = {
  title: 'Repairs for local authorities and council housing companies | EVO',
  description:
    'A fully managed, fixed-price repairs service for local authorities and local authority housing companies. B&D Reside went from a 380-home pilot to more than 4,500 homes.',
  alternates: { canonical: '/sectors/local-authorities' },
};

export default function LocalAuthoritiesPage() {
  return (
    <SocialSectorPage
      eyebrow="Local authorities"
      title="A fully managed, fixed-price repairs service for local authorities and council housing companies."
      lead="We combine purpose-built technology, repairs expertise and a fully managed service to give you greater control and your residents a better repairs experience."
      crumbLabel="Local authorities"
      leadCase="bd-reside"
    />
  );
}
