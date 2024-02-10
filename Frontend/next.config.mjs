/** @type {import('next').NextConfig} */
// Prevents rendering components twice on a dev environment 
// https://stackoverflow.com/questions/71847778/why-my-nextjs-component-is-rendering-twice
const nextConfig = { reactStrictMode: false };

export default nextConfig;