
/** @type {import('next').NextConfig} */
const nextConfig = {

    redirects: async () => {
        return [
            {
                source: '/study',
                destination: '/login',
                permanent: false
            },
            // {
            //     source: '/users/:userId',
            //     destination: '/login',
            //     permanent: false
            // },



        ]
    },

    images: {
        domains: [
            "en.wikipedia.org"
        ]
    }
}

module.exports = nextConfig
