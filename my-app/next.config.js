const { NextFederationPlugin } = require('@module-federation/nextjs-mf')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, {isServer}) => {
    config.plugins.push(
        new NextFederationPlugin({
          name: 'myApp',
          remotes: {
            common: `common@ http://localhost:3006/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`
          },
          filename: 'static/chunks/remoteEntry.js',
          shared: {}
        })
    )
    return config
  }
}

module.exports = nextConfig
