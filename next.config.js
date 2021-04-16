module.exports = {
  images: {
    domains: ['localhost'],
  },
async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=60, must-revalidate',
          }
        ],
      },
    ]
  }
}