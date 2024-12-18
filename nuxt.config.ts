export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  ssr: false, // Ensure client-side rendering only
  devtools: { enabled: true }, // Enable devtools during development

  // Global CSS files
  css: [
    'bootstrap/dist/css/bootstrap.min.css', // Include Bootstrap CSS
    'flatpickr/dist/flatpickr.css', // Include Flatpickr styles for the calendar
    '@/assets/css/custom.css', // Custom CSS for your project
  ],

  // Plugins to include
  plugins: [
    '~/plugins/apexcharts.js', // Plugin for ApexCharts
    '~/plugins/chartjs.js', // Plugin for Chart.js
  ],

  // Application-level settings
  app: {
    head: {
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js', // Include Bootstrap JS from a CDN
          type: 'text/javascript',
          defer: true, // Load the script after the HTML is parsed
        },
      ],
    },
  },

  // Build configuration (optional but good for optimization)
  build: {
    transpile: ['vue-flatpickr-component'], // Ensure Flatpickr works properly
  },
  runtimeConfig: {
    public: {
      AUTH0_CLIENT_ID: process.env.NUXT_AUTH0_CLIENT_ID || '',
      AUTH0_DOMAIN: process.env.NUXT_AUTH0_DOMAIN || '',
      AUTH0_CALLBACK_URL: process.env.NUXT_AUTH0_CALLBACK_URL || 'http://localhost:3000/api/callback',
      },
    private: {
      AUTH0_SECRET: process.env.NUXT_AUTH0_CLIENT_SECRET || ''
    },
    ISSUER: process.env.NUXT_AUTH0_ISSUER || '',
    BASEURL: process.env.BASEURL || 'http://localhost:3000/'
    },
});
