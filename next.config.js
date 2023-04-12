const production = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: "export",

    // This is for GitHub pages, so when I export this as a static website the
    // asset prefix is correct
    assetPrefix: production ? "/portfolio" : "",
};

module.exports = nextConfig;
