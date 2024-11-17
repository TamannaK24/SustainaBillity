<template>
    <div class="container mt-5">
      <h1>Total Cost Dashboard</h1>
      <p>
        Track the total costs of managing your property in terms of sustainability.
      </p>
  
      <!-- Cost Overview -->
      <div class="cost-overview mt-4">
        <h3>Cost Overview</h3>
        <div class="overview-cards">
          <div class="card">
            <h4>Total Costs (Over Years)</h4>
            <p>${{ totalCosts.overYears }}</p>
          </div>
          <div class="card">
            <h4>Total Costs (This Year)</h4>
            <p>${{ totalCosts.thisYear }}</p>
          </div>
          <div class="card">
            <h4>Total Costs (This Month)</h4>
            <p>${{ totalCosts.thisMonth }}</p>
          </div>
        </div>
      </div>
  
      <!-- Cost Breakdown -->
      <div class="cost-breakdown mt-4">
        <h3>Cost Breakdown</h3>
        <table>
          <thead>
            <tr>
              <th>Category</th>
              <th>Amount (USD)</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(amount, category) in costBreakdown" :key="category">
              <td>{{ category }}</td>
              <td>${{ amount }}</td>
            </tr>
          </tbody>
        </table>
      </div>
  
      <!-- GRAPH -->
      <div class="cost-trends mt-4">
        <h3>Chart</h3>
        <line-chart :chart-data="chartData" :chart-options="chartOptions" />
      </div>
    </div>
  </template>

<script>
import VueApexCharts from "vue3-apexcharts";

export default {
  name: "TotalCostDashboard",
  components: {
    LineChart: VueApexCharts,
  },
  data() {
    return {
      // Total Costs Overview
      totalCosts: {
        overYears: 50000,
        thisYear: 12000,
        thisMonth: 1000,
      },

      // Cost Breakdown by Category
      costBreakdown: {
        Energy: 7000,
        Water: 3000,
        Recycling: 2000,
        Maintenance: 5000,
      },

      // Data for Cost Trends Chart
      chartData: {
        labels: ["2019", "2020", "2021", "2022", "2023"],
        datasets: [
          {
            label: "Total Costs (USD)",
            data: [8000, 10000, 12000, 15000, 17000],
            borderColor: "#42a5f5",
            backgroundColor: "rgba(66, 165, 245, 0.2)",
            tension: 0.4,
          },
        ],
      },

      // Chart Options
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "top",
          },
          title: {
            display: true,
            text: "Cost Trends Over Years",
          },
        },
        scales: {
          x: {
            title: {
              display: true,
              text: "Year",
            },
          },
          y: {
            title: {
              display: true,
              text: "Costs (USD)",
            },
          },
        },
      },
    };
  },
};
</script>

<style>
.container {
  font-family: Arial, sans-serif;
  color: #333;
}

/* Cost Overview Cards */
.cost-overview .overview-cards {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}

.cost-overview .card {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 30%;
}

.cost-overview .card h4 {
  margin-bottom: 10px;
  font-size: 18px;
}

.cost-overview .card p {
  font-size: 16px;
  font-weight: bold;
}

/* Cost Breakdown Table */
.cost-breakdown table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

.cost-breakdown th,
.cost-breakdown td {
  padding: 10px;
  text-align: left;
  border: 1px solid #ddd;
}

.cost-breakdown th {
  background-color: #f4f4f4;
  font-weight: bold;
}

.cost-breakdown tr:nth-child(even) {
  background-color: #f9f9f9;
}

.cost-breakdown tr:hover {
  background-color: #f1f1f1;
}

/* Cost Trends Chart */
.cost-trends {
  margin-top: 20px;
}

.cost-trends canvas {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  display: block;
}
</style>
