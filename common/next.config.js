const { NextFederationPlugin } = require('@module-federation/nextjs-mf')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.plugins.push(
        new NextFederationPlugin({
          name: 'common',
          filename: 'static/chunks/remoteEntry.js',
          exposes: {
            './card': './src/components/card/index.tsx'
          },
          shared: {}
        })
    )

    return config
  }
}

module.exports = nextConfig
