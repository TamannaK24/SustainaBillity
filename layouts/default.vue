<template>
    <div>
        <AppNavbar/> 
        <Nuxt />
        <AppFooter/>  
    </div>
</template>

<script>

import AppFooter from '~/components/AppFooter.vue';
import AppNavbar from '~/components/AppNavbar.vue'; 

export default {
    name: 'default',
    components: {
        AppNavbar,
        AppFooter,  
    }
}

</script>