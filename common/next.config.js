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
            shared: {
              'styled-components/': {
                singleton: true,
                requiredVersion: false
              }
            }
        })
    )

    return config
  }
}

module.exports = nextConfig
