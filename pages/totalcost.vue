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
      <h3>Cost Trends Over Time</h3>
      <apexchart type="line" :options="chartOptions" :series="chartSeries" />
    </div>
  </div>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";

export default {
  name: "TotalCostDashboard",
  components: {
    apexchart: VueApexCharts,
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

      // Data for Cost Trends Chart (ApexCharts)
      chartSeries: [
        {
          name: "Total Costs (USD)",
          data: [8000, 10000, 12000, 15000, 17000],
        },
      ],
      chartOptions: {
        chart: {
          id: "cost-trends",
          type: "line",
        },
        xaxis: {
          categories: ["2019", "2020", "2021", "2022", "2023"],
          title: {
            text: "Year",
          },
        },
        yaxis: {
          title: {
            text: "Costs (USD)",
          },
        },
        title: {
          text: "Cost Trends Over Time",
          align: "center",
        },
        stroke: {
          curve: "smooth",
        },
      },
    };
  },
};
</script>

<style scoped>
/* General Styling */
.container {
  font-family: Arial, sans-serif;
  color: #333;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

/* Headings */
h1 {
  font-size: 28px;
  font-weight: bold;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 20px;
}

h3 {
  font-size: 20px;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 15px;
}

/* Paragraphs */
p {
  font-size: 16px;
  color: #555;
  margin-bottom: 20px;
  text-align: center;
}

/* Cost Overview Section */
.cost-overview {
  margin-top: 20px;
}

.cost-overview .overview-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
}

.cost-overview .card {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  flex: 1;
  min-width: 280px;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
}

.cost-overview .card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.cost-overview .card h4 {
  font-size: 18px;
  font-weight: bold;
  color: #34495e;
  margin-bottom: 10px;
}

.cost-overview .card p {
  font-size: 24px;
  font-weight: bold;
  color: #27ae60;
}

/* Cost Breakdown Table */
.cost-breakdown {
  margin-top: 30px;
  overflow-x: auto;
}

.cost-breakdown table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

.cost-breakdown th,
.cost-breakdown td {
  padding: 15px;
  text-align: left;
  border: 1px solid #ddd;
}

.cost-breakdown th {
  background-color: #f4f4f4;
  font-weight: bold;
  color: #34495e;
}

.cost-breakdown tr:nth-child(even) {
  background-color: #f9f9f9;
}

.cost-breakdown tr:hover {
  background-color: #e9f7ef;
}

.cost-breakdown td {
  font-size: 16px;
  color: #555;
}

/* Cost Trends Chart */
.cost-trends {
  margin-top: 40px;
  text-align: center;
}

.cost-trends h3 {
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 20px;
}

.cost-trends canvas {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  display: block;
}

@media (max-width: 768px) {
  .cost-overview .overview-cards {
    flex-direction: column;
    gap: 15px;
  }

  .cost-trends canvas {
    max-width: 100%;
  }
}
</style>
