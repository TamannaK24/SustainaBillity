<template>
  <div class="dashboard-container">
    <!-- Main Content with Sidebar Inside -->
    <div class="main-content">
      <div class="content-wrapper">
        <!-- Sidebar -->
        <div class="sidebar">
          <h3>Menu</h3>
          <ul>
            <li><a href="#notifications">Notifications</a></li>
            <li><a href="#time">Time</a></li>
            <li><a href="#cost">Cost</a></li>
            <li><a href="#suggestions">Suggestions</a></li>
          </ul>
        </div>

        <!-- Main Dashboard Content -->
        <div class="content-area">
          <div class="container mt-5">
            <h1>Energy Consumption Dashboard</h1>
            <p>
              Welcome to your energy management solution! Gain actionable insights into 
              your office building's energy usage and uncover opportunities to enhance sustainability 
              while reducing costs.
            </p>
            <div class="stats-section mt-4">
              <h3>Key Features:</h3>
              <ul>
                <li>Real-time energy consumption data by floor or department</li>
                <li>Carbon footprint tracking to measure your environmental impact</li>
                <li>Customized sustainability recommendations</li>
                <li>Monthly reports to track progress and savings</li>
              </ul>
            </div>
            <div class="cta-section mt-5">
              <h3>Start Building a Greener Future</h3>
              <p>
                With detailed analytics at your fingertips, you can make informed decisions 
                to optimize energy use and create a more sustainable workspace.
              </p>
              <button class="btn btn-success">Report an Issue</button>
            </div>
          </div>
        </div>

        <!-- Tile for This Month's Energy Stats -->
        <div class="energy-stats-tile">
          <h3>This Month's Energy Usage</h3>
          <canvas id="energyChart"></canvas>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Chart } from "chart.js";

export default {
  name: "EnergyConsumption",
  mounted() {
    this.createEnergyChart();
  },
  methods: {
    createEnergyChart() {
      const ctx = document.getElementById("energyChart").getContext("2d");
      new Chart(ctx, {
        type: "line",
        data: {
          labels: [
            "Week 1",
            "Week 2",
            "Week 3",
            "Week 4",
            "Week 5",
          ], // Weekly labels
          datasets: [
            {
              label: "Energy Usage (kWh)",
              data: [300, 450, 400, 500, 550], // Example data
              borderColor: "#03ff3e",
              backgroundColor: "rgba(3, 255, 62, 0.2)",
              tension: 0.3,
              fill: true,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: true,
              position: "top",
            },
          },
          scales: {
            x: {
              title: {
                display: true,
                text: "Weeks of the Month",
              },
            },
            y: {
              title: {
                display: true,
                text: "Energy Usage (kWh)",
              },
              beginAtZero: true,
            },
          },
        },
      });
    },
  },
};
</script>

<style>
/* Main Content Styling */
.main-content {
  padding: 20px;
}

/* Content Wrapper: Contains Sidebar, Content Area, and Stats Tile */
.content-wrapper {
  display: flex;
  justify-content: space-between;
}

/* Sidebar Styling */
.sidebar {
  width: 200px;
  background-color: #2c3e50;
  color: white;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  margin-right: 20px; /* Spacing between sidebar and content area */
}

.sidebar h3 {
  font-size: 20px;
  margin-bottom: 20px;
}

.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar ul li {
  margin: 15px 0;
}

.sidebar ul li a {
  text-decoration: none;
  color: white;
  font-size: 16px;
  display: block;
  transition: color 0.3s;
}

.sidebar ul li a:hover {
  color: #03ff3e;
}

/* Main Content Area */
.content-area {
  flex: 2; /* Main content takes more space */
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.container {
  font-family: Arial, sans-serif;
  color: #333;
}

/* Energy Stats Tile Styling */
/* Energy Stats Tile Styling */
.energy-stats-tile {
  flex: 1; /* Tile takes less space */
  padding: 20px;
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-left: 20px; /* Space between main content and tile */

  /* Flexbox for Centering */
  display: flex;
  flex-direction: column; /* Stack title and canvas vertically */
  justify-content: center; /* Center content vertically */
  align-items: center; /* Center content horizontally */
  text-align: center; /* Center text content, like the title */
}

.energy-stats-tile h3 {
  font-size: 18px;
  margin-bottom: 15px;
  text-align: center;
}

.energy-stats-tile canvas {
  max-width: 100%; /* Ensure the chart doesn't overflow */
  height: 250px; /* Adjust height for better visibility */
}


/* Button Styling */
.cta-section button {
  padding: 10px 20px;
  font-size: 16px;
}
</style>
