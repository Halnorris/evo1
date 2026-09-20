import SocialSectorPage from '@/components/SocialSectorPage';

export const metadata = {
  title: 'Repairs for housing associations | EVO',
  description:
    "A fully managed, fixed-price repairs service for housing associations, with the evidence for the consumer standards and Awaab's Law recorded as the work happens.",
  alternates: { canonical: '/sectors/housing-associations' },
};

export default function HousingAssociationsPage() {
  return (
    <SocialSectorPage
      eyebrow="Housing associations"
      title="A fully managed, fixed-price repairs service for housing associations."
      lead="We combine purpose-built technology, repairs expertise and a fully managed service to give you greater control and your residents a better repairs experience."
      crumbLabel="Housing associations"
      leadCase="ids"
    />
  );
}
