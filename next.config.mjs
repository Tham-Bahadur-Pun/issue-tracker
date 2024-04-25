/** @type {import('next').NextConfig} */
const nextConfig = {
    // If there come an issue on viewing google provided user picture
    async headers() {
        return [
            {
                source: '/:path*',
                headers: [
                    { key: 'referrer-policy', value: 'no-referrer' }
                ]
            }
        ]
    }
};

export default nextConfig;
