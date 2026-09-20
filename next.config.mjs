/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      // Brief section 4: keep old URLs working with 301s
      { source: '/about/how-we-do-it', destination: '/how-it-works', statusCode: 301 },
      { source: '/newsletters', destination: '/insights/newsletters', statusCode: 301 },
      { source: '/faqs', destination: '/faqs/residents', statusCode: 301 },
      { source: '/faqs/landlords', destination: '/faqs/landlords-and-property-managers', statusCode: 301 },
      { source: '/faqs/property-managers', destination: '/faqs/landlords-and-property-managers', statusCode: 301 },
      { source: '/products/overview', destination: '/products', statusCode: 301 },
      { source: '/download-sign-up', destination: '/renters-rights-guide', statusCode: 301 },
      { source: '/sectors/private-landlords-and-agents', destination: '/sectors/landlords', statusCode: 301 },
    ];
  },
};

export default nextConfig;
