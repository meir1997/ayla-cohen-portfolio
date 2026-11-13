/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Images are read only at build time (generateStaticParams); keep them out of serverless bundles.
    outputFileTracingExcludes: { '*': ['portfolio_images/**'] },
  },
  async redirects() {
    return [
      {
        source: '/api/images/:projectId/:imageName',
        destination: '/project-images/:projectId/:imageName',
        permanent: true,
      },
      // Old Linktree link to the free guide
      { source: '/gift', destination: '/guide', permanent: true },
    ];
  },
  async headers() {
    return [{
      source: '/design-guide.pdf',
      headers: [{
        key: 'Content-Disposition',
        value: "attachment; filename=\"design-guide.pdf\"; filename*=UTF-8''%D7%9E%D7%93%D7%A8%D7%99%D7%9A%20%D7%9C%D7%A2%D7%99%D7%A6%D7%95%D7%91%20%D7%94%D7%91%D7%99%D7%AA.pdf",
      }],
    }];
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
