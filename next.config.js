/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'i.postimg.cc',
      'jumboargentina.vtexassets.com',
      'd2j6dbq0eux0bg.cloudfront.net',
      'thefoodtech.com',
      'carrefourar.vtexassets.com'
    ]
  }
}

module.exports = nextConfig
