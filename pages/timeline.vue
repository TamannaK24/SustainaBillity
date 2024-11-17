<template>
    <div class="container mt-5">
      <h1>Energy Consumption Timeline</h1>
      <p>Track your building's energy consumption over time and identify trends to optimize usage.</p>
  
      <!-- Filters Section -->
      <div class="filters mt-4">
        <h3>Filter Energy Usage</h3>
        <label for="timeframe">Select Timeframe:</label>
        <select v-model="selectedTimeframe" id="timeframe" @change="filterConsumption">
          <option value="daily">Daily</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
          <option value="all">All Time</option>
        </select>
      </div>
  
      <!-- Overview Section -->
      <div class="overview mt-4">
        <h3>Energy Usage Overview</h3>
        <ul>
          <li><strong>Total Consumption (All Time):</strong> {{ totalConsumption.allTime }} kWh</li>
          <li><strong>Total Consumption (This Year):</strong> {{ totalConsumption.thisYear }} kWh</li>
          <li><strong>Total Consumption (This Month):</strong> {{ totalConsumption.thisMonth }} kWh</li>
          <li><strong>Average Daily Consumption:</strong> {{ totalConsumption.averageDaily }} kWh</li>
        </ul>
      </div>
  
      <!-- Consumption Breakdown Table -->
      <div class="consumption-breakdown mt-4">
        <h3>Energy Consumption Breakdown</h3>
        <table>
          <thead>
            <tr>
              <th>Time Period</th>
              <th>Energy Usage (kWh)</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="entry in filteredConsumption" :key="entry.timePeriod">
              <td>{{ entry.timePeriod }}</td>
              <td>{{ entry.usage }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>


<script>
export default {
  name: "EnergyConsumptionTimeline",
  data() {
    return {
      // Total Consumption Summary
      totalConsumption: {
        allTime: 85000,
        thisYear: 12000,
        thisMonth: 1500,
        averageDaily: 50,
      },
      // Simulated Energy Consumption Data
      consumptionData: [
        { timePeriod: "2023", usage: 12000 },
        { timePeriod: "2022", usage: 15000 },
        { timePeriod: "2021", usage: 13000 },
        { timePeriod: "December 2023", usage: 1500 },
        { timePeriod: "November 2023", usage: 1450 },
        { timePeriod: "October 2023", usage: 1600 },
        { timePeriod: "November 15, 2023", usage: 50 },
        { timePeriod: "November 14, 2023", usage: 52 },
        { timePeriod: "November 13, 2023", usage: 48 },
      ],
      // Filter Options
      selectedTimeframe: "daily",
      filteredConsumption: [],
    };
  },
  methods: {
    filterConsumption() {
      if (this.selectedTimeframe === "daily") {
        this.filteredConsumption = this.consumptionData.filter((entry) =>
          entry.timePeriod.includes("November")
        );
      } else if (this.selectedTimeframe === "monthly") {
        this.filteredConsumption = this.consumptionData.filter((entry) =>
          entry.timePeriod.includes("2023") && entry.timePeriod.includes(" ")
        );
      } else if (this.selectedTimeframe === "yearly") {
        this.filteredConsumption = this.consumptionData.filter((entry) =>
          entry.timePeriod.match(/^\d{4}$/)
        );
      } else {
        this.filteredConsumption = this.consumptionData;
      }
    },
  },
  mounted() {
    this.filterConsumption(); // Filter consumption when the component is mounted
  },
};
</script>


<style>
.container {
  font-family: Arial, sans-serif;
  color: #333;
  max-width: 1200px;
  margin: 0 auto;
}

/* Filters Section */
.filters {
  margin-bottom: 20px;
}

.filters label {
  margin-right: 10px;
  font-weight: bold;
}

.filters select {
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

/* Overview Section */
.overview ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.overview li {
  margin: 10px 0;
  font-size: 16px;
}

/* Consumption Breakdown Table */
.consumption-breakdown table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.consumption-breakdown th,
.consumption-breakdown td {
  padding: 10px;
  border: 1px solid #ddd;
  text-align: left;
}

.consumption-breakdown th {
  background-color: #f4f4f4;
  font-weight: bold;
}

.consumption-breakdown tr:nth-child(even) {
  background-color: #f9f9f9;
}

.consumption-breakdown tr:hover {
  background-color: #f1f1f1;
}
</style>
