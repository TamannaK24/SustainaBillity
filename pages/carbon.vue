<template>
  <div class="dashboard-container">
    <!-- Main Content with Sidebar Inside -->
    <div class="main-content">
      <div class="content-wrapper">
        <!-- Sidebar -->
        <div class="sidebar">
          <h3>Menu</h3>
          <ul>
            <li><nuxt-link to="/notifications">Notifications</nuxt-link></li>
            <li><nuxt-link to="/emissions">Emission Trends</nuxt-link></li>
            <li><nuxt-link to="/efficiency">Efficiency Insights</nuxt-link></li>
            <li><nuxt-link to="/suggestions">Reduction Strategies</nuxt-link></li>
          </ul>
        </div>

        <!-- Main Dashboard Content -->
        <div class="content-area">
          <div class="container mt-5">
            <h1>Carbon Emissions Dashboard</h1>
            <p>
              Welcome to your carbon emissions management solution! Gain actionable insights into 
              your building's carbon footprint and discover opportunities to reduce environmental impact 
              while improving operational sustainability.
            </p>
            <div class="stats-section mt-4">
              <h3>Key Features:</h3>
              <ul>
                <li>Real-time tracking of carbon emissions by source or department</li>
                <li>Trends and patterns in carbon footprint over time</li>
                <li>Customized recommendations to reduce emissions effectively</li>
                <li>Monthly reports to track progress and demonstrate sustainability efforts</li>
              </ul>
            </div>
            <div class="cta-section mt-5">
              <h3>Start Reducing Your Carbon Footprint</h3>
              <p>
                With detailed analytics at your fingertips, you can make informed decisions 
                to lower emissions, achieve sustainability goals, and contribute to a healthier planet.
              </p>
              <!-- Report an Issue Button -->
              <nuxt-link to="/report" class="btn btn-success">Report an Issue</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CarbonEmissions",
};
</script>

<style>
/* Main Content Styling */
.main-content {
  padding: 20px;
}

/* Content Wrapper: Contains Sidebar and Main Content */
.content-wrapper {
  display: flex;
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
  flex: 1; /* Allow the content area to take the remaining space */
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.container {
  font-family: Arial, sans-serif;
  color: #333;
}

.stats-section ul {
  list-style: none;
  padding: 0;
}

.stats-section ul li {
  margin: 10px 0;
}

.cta-section .btn {
  padding: 10px 20px;
  font-size: 16px;
}
</style>
