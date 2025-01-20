// /** @type {import('next').NextConfig} */
// const withBundleAnalyzer = require("@next/bundle-analyzer")({
//   enabled: process.env.ANALYZE === "true",
// });
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
//   typescript: {
//     ignoreBuildErrors: true,
//   },
//   images: {
//     domains: ['img.freepik.com','winsfolio.net', 'production-eu-dodo-files.s3.eu-west-1.amazonaws.com',
//        '6ammart-admin.6amtech.com', 'webstrot.com','media.istockphoto.com'],
//     remotePatterns: [
//       {
//         protocol: process.env.NEXT_PUBLIC_PROTOCOL,
//         hostname: process.env.NEXT_PUBLIC_API_HOSTNAME,
//       },
//       {
//         protocol: process.env.NEXT_PUBLIC_PROTOCOL,
//         hostname: process.env.NEXT_PUBLIC_STORAGE_HOSTNAME,
//       },
//       {
//         protocol: process.env.NEXT_PUBLIC_PROTOCOL,
//         hostname: "demo-api.foodyman.org",
//       },
//       {
//         protocol: "http",
//         hostname: process.env.NEXT_PUBLIC_API_HOSTNAME,
//       },
//     ],
//     // remotePatterns: [
//     //   {
//     //     protocol: 'https', 
//     //     hostname: 'demo-api.foodyman.org', 
//     //     port: '', 
//     //     pathname: '/**', 
//     //   },
//     // ],
//     minimumCacheTTL: 3600,
//     dangerouslyAllowSVG: true,
//     contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
//   },
// };

// module.exports = withBundleAnalyzer(nextConfig);


/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['img.freepik.com','winsfolio.net', 'production-eu-dodo-files.s3.eu-west-1.amazonaws.com',
       '6ammart-admin.6amtech.com', '6ammart-react.6amtech.com',
       'webstrot.com','media.istockphoto.com', 'web.foodyman.org', 'web1.foodyman.org','jungleworks.com', 
       'www.shutterstock.com','i.pinimg.com','stackfood.app','www.foodchow.com', 'qr-web-saas.netlify.app', 'askbootstrap.com','foodyman.s3.amazonaws.com'],
       remotePatterns: [
              {
                protocol: process.env.NEXT_PUBLIC_PROTOCOL,
                hostname: process.env.NEXT_PUBLIC_API_HOSTNAME,
              },
              {
                protocol: process.env.NEXT_PUBLIC_PROTOCOL,
                hostname: process.env.NEXT_PUBLIC_STORAGE_HOSTNAME,
              },
              {
                protocol: process.env.NEXT_PUBLIC_PROTOCOL,
                hostname: "demo-api.foodyman.org",
              },
              {
                protocol: "http",
                hostname: process.env.NEXT_PUBLIC_API_HOSTNAME,
              },
            ],
    minimumCacheTTL: 3600,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

module.exports = withBundleAnalyzer(nextConfig);