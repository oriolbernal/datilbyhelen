const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
    loader: "default",
  },
  assetPrefix: isProd ? "/datilbyhelen/" : "",
  basePath: isProd ? "/datilbyhelen" : "",
  output: "export",
};

export default nextConfig;
