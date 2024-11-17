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
            <h1>Energy Consumption Dashboard</h1>
            <div class="notifications-section mt-4">
              <h3>Notifications</h3>
              <div class="notification-tile high-usage">
                <h4>High Energy Usage Detected</h4>
                <p>
                  Energy consumption has exceeded the usual threshold on Floor 3. Consider reducing HVAC usage.
                </p>
              </div>
              <div class="notification-tile sustainability-tips">
                <h4>Sustainability Tip</h4>
                <p>
                  Turn off office equipment when not in use to save energy and lower your carbon footprint.
                </p>
              </div>
              <div class="notification-tile monthly-report">
                <h4>Monthly Report Available</h4>
                <p>
                  Your energy consumption report for October is ready. Download to review progress and insights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style>
/* Notification Tiles Section */
.notifications-section {
  margin-top: 20px;
}

.notification-tile {
  background-color: #ffffff;
  padding: 15px 20px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 15px;
}

.notification-tile h4 {
  font-size: 18px;
  margin-bottom: 5px;
}

.notification-tile p {
  font-size: 14px;
  color: #555;
}

.notification-tile.high-usage {
  border-left: 5px solid #ff6b6b; /* Red for urgency */
}

.notification-tile.sustainability-tips {
  border-left: 5px solid #03ff3e; /* Green for sustainability */
}

.notification-tile.monthly-report {
  border-left: 5px solid #3498db; /* Blue for reports */
}
</style>
