<template>
    <div class="container mt-5">
      <h1 class="text-primary mb-4">Welcome Back</h1>
      
      <!-- Tile Grid -->
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <!-- Tile 1 -->
        <div class="col">
          <Tile
            title="Energy Consumption"
            description="Track and monitor your building's energy usage to identify savings opportunities."
            icon="bi bi-lightning-fill"
            bgColor="bg-primary"
            textColor="text-white"
            link="/energy"
          />
        </div>
  
        <!-- Tile 2 -->
        <div class="col">
          <Tile
            title="Water Management"
            description="Analyze water usage, detect leaks, and promote conservation efforts."
            icon="bi bi-droplet-fill"
            bgColor="bg-info"
            textColor="text-white"
            link="/water"
          />
        </div>
  
        <!-- Tile 3 -->
        <div class="col">
          <Tile
            title="Waste Management"
            description="Manage waste production and improve recycling and composting rates."
            icon="bi bi-recycle"
            bgColor="bg-success"
            textColor="text-white"
            link="/waste"
          />
        </div>
  
        <!-- Tile 4 -->
        <div class="col">
          <Tile
            title="HVAC Performance"
            description="Optimize heating and cooling efficiency while monitoring indoor air quality."
            icon="bi bi-thermometer-half"
            bgColor="bg-danger"
            textColor="text-white"
            link="/hvac"
          />
        </div>
  
        <!-- Tile 5 -->
        <div class="col">
          <Tile
            title="Carbon Footprint"
            description="Evaluate and reduce your building's environmental impact with actionable insights."
            icon="bi bi-cloud-fill"
            bgColor="bg-warning"
            textColor="text-dark"
            link="/carbon"
          />
        </div>
  
        <!-- Tile 6 -->
        <div class="col">
          <Tile
            title="Occupancy & Space Utilization"
            description="Monitor real-time occupancy data and optimize space usage for efficiency."
            icon="bi bi-people-fill"
            bgColor="bg-secondary"
            textColor="text-white"
            link="/occupancy"
          />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Tile from "@/components/Tile.vue"; // Import the Tile component
  
  export default {
    name: "HomePage",
    components: {
      Tile, // Register the Tile component
    },
  };
  </script>
  