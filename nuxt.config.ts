export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: [
    'bootstrap/dist/css/bootstrap.min.css', // Include Bootstrap CSS
  ],
  app: {
    head: {
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js', // Use Bootstrap JS from a CDN
          type: 'text/javascript',
          defer: true,
        },
      ],
    },
  },
});
