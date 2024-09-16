/** @type {import('next').NextConfig} */
const nextConfig = {
  // შემოვაიმპორტე Image-ს error-ისთვის
  //   https://nextjs.org/docs/messages/next-image-unconfigured-host ამ ლინკიდან
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "zydkwtvdvzpgnjpqjayc.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/cabin-images/**",
      },
    ],
  },
  // output: "export",
};

export default nextConfig;
