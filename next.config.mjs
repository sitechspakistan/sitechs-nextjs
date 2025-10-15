/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        // Redirect old shopdetail query URLs to home
        {
          source: '/:path((?!_next).*)',
          has: [
            {
              type: 'query',
              key: 'shopdetail',
            },
          ],
          destination: '/',
          permanent: true,
        },
      ];
    },
  };
  
  export default nextConfig;