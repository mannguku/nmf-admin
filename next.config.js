/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
	sentry: {
    disableServerWebpackPlugin: true,
    disableClientWebpackPlugin: true,
  },
}

module.exports = nextConfig
