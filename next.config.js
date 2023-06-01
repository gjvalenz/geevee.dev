/** @type {import('next').NextConfig} */
const nextConfig = {
    webpackDevMiddleware: config => {
        config.watchOptions = {
            poll: 1000,
            aggregateTimeout: 300,
        }
        return config
    },
    async rewrites() {
        return [
            {
                source: '/mario',
                destination: '/mario/index.html'
            },
            {
                source: '/mario/index.html',
                destination: '/mario'
            }
        ]
    }
}

module.exports = nextConfig
