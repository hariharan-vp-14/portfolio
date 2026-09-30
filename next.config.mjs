import path from 'node:path'
import { fileURLToPath } from 'node:url'

const projectRoot = path.dirname(fileURLToPath(import.meta.url))

const nextConfig = {
  outputFileTracingRoot: projectRoot,
  // Allow dev origin(s) for HMR and asset requests when accessing the dev server
  // from another device on your LAN (adjust the port if necessary).
  allowedDevOrigins: ['http://192.168.0.138:3000'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**'
      }
    ]
  }
}

export default nextConfig
