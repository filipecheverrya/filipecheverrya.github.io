module.exports = {
  experimental: {
    redirects() {
      return [
        {
          source: '/',
          permanent: true,
          destination: '/en',
        },
      ]
    },
  },
  exportPathMap: function () {
    return {
      "/": { page: "/" },
      "/en": { page: "/en" },
      "/pt": { page: "/pt" },
    }
  },
  assetPrefix: 'https://filipecheverrya.github.io/',
}
