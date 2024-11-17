<template>
    <div class="card h-100 text-center" :class="[bgColor, textColor]">
      <div class="card-body">
        <i v-if="icon" :class="`${icon} display-4`"></i>
        <h5 class="card-title mt-3">{{ title }}</h5>
        <p class="card-text">{{ description }}</p>
      </div>
      <a :href="link" class="stretched-link"></a>
    </div>
  </template>
  
  <script>
  export default {
    name: "Tile",
    props: {
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      icon: {
        type: String,
        default: null, // Optional icon class
      },
      bgColor: {
        type: String,
        default: "bg-light", // Default background color
      },
      textColor: {
        type: String,
        default: "text-dark", // Default text color
      },
      link: {
        type: String,
        default: "#", // Default link
      },
    },
  };
  </script>
  
  <style scoped>
  .card {
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
  }
  
  .card:hover {
    transform: scale(1.05); /* Slightly enlarge the tile on hover */
  }
  </style>
  