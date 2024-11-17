<template>
  <div class="dashboard-container">
    <div class="main-content">
      <div class="content-wrapper">
        <!-- Sidebar -->
        <div class="sidebar">
          <h3>Menu</h3>
          <ul>
            <li><nuxt-link to="/notifications">Notifications</nuxt-link></li>
            <li><nuxt-link to="/time">Time</nuxt-link></li>
            <li><nuxt-link to="/cost">Cost</nuxt-link></li>
            <li><nuxt-link to="/suggestions">Suggestions</nuxt-link></li>
          </ul>
        </div>

        <!-- Main Dashboard Content -->
        <div class="content-area">
          <div class="container mt-5">
            <h1>Lighting Dashboard</h1>
            <p>
              Gain insights into your building's lighting energy usage, solar contributions, and opportunities for savings.
            </p>

            <div class="chart-grid">
              <!-- Lighting Usage by Time -->
              <div class="chart-card">
                <h3>Lighting Usage by Time</h3>
                <apexchart type="line" :options="lightingTimeOptions" :series="lightingTimeData" />
              </div>

              <!-- Solar Contribution -->
              <div class="chart-card">
                <h3>Solar Contribution vs Lighting Usage</h3>
                <apexchart type="bar" :options="solarOptions" :series="solarData" />
              </div>

              <!-- Lighting Allocation -->
              <div class="chart-card">
                <h3>Lighting Allocation by Floor</h3>
                <apexchart type="pie" :options="allocationOptions" :series="allocationData" />
              </div>

              <!-- Lighting Savings -->
              <div class="chart-card">
                <h3>Lighting Savings with Solar Panels</h3>
                <apexchart type="area" :options="savingsOptions" :series="savingsData" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";

export default {
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      // Lighting Usage by Time
      lightingTimeData: [
        { name: "Lighting Energy (kWh)", data: [5, 10, 15, 20, 18, 14, 8, 4] },
      ],
      lightingTimeOptions: {
        chart: { type: "line" },
        xaxis: {
          categories: ["6 AM", "9 AM", "12 PM", "3 PM", "6 PM", "9 PM", "12 AM", "3 AM"],
          title: { text: "Time of Day" },
        },
        yaxis: { title: { text: "Energy (kWh)" } },
        title: { text: "Lighting Usage by Time", align: "center" },
        stroke: { curve: "smooth" },
      },

      // Solar Contribution to Lighting
      solarData: [
        { name: "Solar Power (kWh)", data: [2, 4, 5, 7, 6, 3, 1, 0] },
        { name: "Total Lighting Usage (kWh)", data: [5, 10, 15, 20, 18, 14, 8, 4] },
      ],
      solarOptions: {
        chart: { type: "bar", stacked: true },
        xaxis: {
          categories: ["6 AM", "9 AM", "12 PM", "3 PM", "6 PM", "9 PM", "12 AM", "3 AM"],
          title: { text: "Time of Day" },
        },
        yaxis: { title: { text: "Energy (kWh)" } },
        title: { text: "Solar Contribution vs Lighting Usage", align: "center" },
      },

      // Lighting Allocation by Floor
      allocationData: [40, 25, 20, 15],
      allocationOptions: {
        chart: { type: "pie" },
        labels: ["Floor 1", "Floor 2", "Floor 3", "Floor 4"],
        title: { text: "Lighting Allocation by Floor", align: "center" },
      },

      // Lighting Savings with Solar Panels
      savingsData: [
        { name: "Energy Savings (kWh)", data: [12, 15, 14, 18, 20, 22, 25] },
      ],
      savingsOptions: {
        chart: { type: "area" },
        xaxis: {
          categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          title: { text: "Day of the Week" },
        },
        yaxis: { title: { text: "Energy Savings (kWh)" } },
        title: { text: "Lighting Savings with Solar Panels", align: "center" },
        stroke: { curve: "smooth" },
      },
    };
  },
};
</script>


<style scoped>
.dashboard-container {
  font-family: Arial, sans-serif;
  color: #333;
}

h1 {
  font-size: 28px;
  text-align: center;
  color: #003F2D;
  margin-bottom: 20px;
}

h3 {
  font-size: 16px;
  text-align: center;
  margin-bottom: 10px;
}

/* Sidebar */
.sidebar {
  width: 200px;
  background-color: #003F2D;
  color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);
}

.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar ul li {
  margin: 10px 0;
}

.sidebar ul li a {
  text-decoration: none;
  color: white;
}

/* Content Area */
.content-area {
  flex: 1;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

/* Chart Grid */
.chart-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.chart-card {
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  height: 400px;
}

.chart-card apexchart {
  height: 100%;
  width: 100%;
}
</style>
