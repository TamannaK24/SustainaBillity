<template>
    <div>
      <AppNavbar />
      <NuxtPage /> 
      <AppFooter />
    </div>
  </template>
  
  <script>
  import AppFooter from '~/components/AppFooter.vue';
  import AppNavbar from '~/components/AppNavbar.vue';
  
  export default {
    name: 'DefaultLayout',
    components: {
      AppNavbar,
      AppFooter,
    },
  };
  </script>
  