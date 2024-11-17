<template>
  <div class="container mt-5">
    <h1 class="text-primary mb-4">Welcome Back!</h1>

    <!-- Tile Grid -->
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div class="col position-relative" v-for="(tile, index) in tiles" :key="index">
        <!-- NuxtLink for navigation -->
        <NuxtLink :to="tile.link" class="text-decoration-none">
          <div
            class="tile-container p-3 position-relative rounded text-center"
            :style="{ backgroundColor: tile.bgColor }"
          >
            <!-- Image Icon -->
            <img :src="tile.icon" class="tile-icon mb-3" alt="Tile Icon" />
            <!-- Title -->
            <h5 class="tile-title mb-2">{{ tile.title }}</h5>
            <!-- Description -->
            <p class="tile-description">{{ tile.description }}</p>
            <!-- Notification Badge -->
            <span
              v-if="tile.notifications > 0"
              class="badge bg-danger position-absolute corner-badge"
            >
              {{ tile.notifications }}
            </span>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      tiles: [
        {
          title: "Energy Consumption",
          description: "Track and monitor your building's energy usage to identify savings opportunities.",
          icon: "/icons/thunderbolt.png", // Add your image path
          notifications: 3,
          bgColor: "#FFD700", // Gold background
          link: "/energy", // Route for this tile
        },
        {
          title: "Water Management",
          description: "Analyze water usage, detect leaks, and promote conservation efforts.",
          icon: "/icons/waterdrop.png", // Add your image path
          notifications: 1,
          bgColor: "#87CEEB", // Sky Blue background
          link: "/water", // Route for this tile
        },
        {
          title: "Waste Management",
          description: "Manage waste production and improve recycling and composting rates.",
          icon: "/icons/recycle-bin.png", // Add your image path
          notifications: 0,
          bgColor: "#32CD32", // Lime Green background
          link: "/waste", // Route for this tile
        },
        {
          title: "HVAC Performance",
          description: "Optimize heating and cooling efficiency while monitoring indoor air quality.",
          icon: "/icons/air-conditioner.png", // Add your image path
          notifications: 5,
          bgColor: "#e33f02", // Orange Red background
          link: "/hvac", // Route for this tile
        },
        {
          title: "Carbon Footprint",
          description: "Evaluate and reduce your building's environmental impact with actionable insights.",
          icon: "/icons/co2.png", // Add your image path
          notifications: 2,
          bgColor: "#A9A9A9", // Dark Gray background
          link: "/carbon", // Route for this tile
        },
        {
          title: "Occupancy & Space Utilization",
          description: "Monitor real-time occupancy data and optimize space usage for efficiency.",
          icon: "/icons/floor.png", // Add your image path
          notifications: 4,
          bgColor: "#6A5ACD", // Slate Blue background
          link: "/space", // Route for this tile
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Styling for h1 */
h1.text-primary {
  font-weight: bold; /* Make text bold */
  color: #003F2D !important; /* Apply the green color */
}

/* Tile Container */
.tile-container {
  height: 250px; /* Adjust tile height */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  transition: transform 0.2s ease-in-out;
  cursor: pointer;
  color: #fff; /* Ensure text is visible on colored backgrounds */
}

.tile-container:hover {
  transform: translateY(-5px); /* Elevates tile on hover */
}

.tile-icon {
  width: 50px;
  height: 50px;
}

.corner-badge {
  font-size: 1.5rem;
  padding: 0.75em 1em;
  border-radius: 50%;
  z-index: 10;
  top: -10px;
  right: -10px;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.tile-title {
  font-size: 1.2rem;
  font-weight: bold;
}

.tile-description {
  font-size: 0.9rem;
}
</style>
