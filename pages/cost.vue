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
            <li><nuxt-link to="/time">Time</nuxt-link></li>
            <li><nuxt-link to="/cost">Cost</nuxt-link></li>
            <li><nuxt-link to="/suggestions">Suggestions</nuxt-link></li>
          </ul>
        </div>

        <!-- Main Dashboard Content -->
        <div class="content-area">
          <div class="container mt-5">
            <h1>Energy Costs Dashboard</h1>
            <p>
              Review your monthly energy costs and identify opportunities to reduce expenses.
            </p>
            <div class="energy-costs-table mt-4">
              <h3>Monthly Energy Costs</h3>
              <table>
                <thead>
                  <tr>
                    <th>Month</th>
                    <th>Energy Usage (kWh)</th>
                    <th>Cost (USD)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>January</td>
                    <td>2,500</td>
                    <td>$300</td>
                  </tr>
                  <tr>
                    <td>February</td>
                    <td>2,800</td>
                    <td>$340</td>
                  </tr>
                  <tr>
                    <td>March</td>
                    <td>3,000</td>
                    <td>$360</td>
                  </tr>
                  <tr>
                    <td>April</td>
                    <td>2,700</td>
                    <td>$330</td>
                  </tr>
                  <tr>
                    <td>May</td>
                    <td>3,100</td>
                    <td>$370</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style>
/* General Styling */
.sidebar {
  width: 200px;
  background-color: #003F2D;
  color: white;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  margin-right: 20px; /* Spacing between sidebar and content area */
}

.container {
  font-family: Arial, sans-serif;
  color: #333;
}

/* Energy Costs Table Styling */
.energy-costs-table {
  margin-top: 20px;
}

.energy-costs-table table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

.energy-costs-table th,
.energy-costs-table td {
  padding: 10px;
  text-align: left;
  border: 1px solid #ddd;
}

.energy-costs-table th {
  background-color: #f4f4f4;
  font-weight: bold;
}

.energy-costs-table tr:nth-child(even) {
  background-color: #f9f9f9;
}

.energy-costs-table tr:hover {
  background-color: #f1f1f1;
}
</style>


