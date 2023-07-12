/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverActions: true,
  },
  images: {
    domains: ["cdn.sanity.io"],
  },
  // contentSecurityPolicy: { 
  //   default: "script-src 'self' 'unsafe-inline'",
  // },
  // headers: {
  //   "Content-Security-Policy": "script-src 'self' nonce-[",
  // },
  // async headers() {
  //   return [
  //     {
  //       source: '/api/webhook', // Replace with the actual route of your Next.js API
  //       headers: [
  //         {
  //           key: 'Content-Security-Policy',
  //           value: `default-src 'self'; script-src 'self' 'nonce-o432u8oijakldnalsdn438473198uakdnlans'`,
  //         },
  //       ],
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
