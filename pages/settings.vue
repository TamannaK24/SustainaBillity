<template>
  <div class="container mt-5">
    <h1>Settings Dashboard</h1>
    <p>Manage your account, financial details, building bills, and app preferences.</p>

    <!-- Account Settings Section -->
    <div class="account-settings mt-4">
      <h3>Account Settings</h3>
      <form @submit.prevent="updateAccountSettings">
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="settings.email" class="form-control" required />
        </div>
        <div class="form-group mt-3">
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="settings.password" class="form-control" required />
        </div>
        <button type="submit" class="btn btn-success mt-3">Update Account</button>
      </form>
    </div>

    <!-- Financial Details Section -->
    <div class="financial-details mt-4">
      <h3>Financial Details</h3>
      <form @submit.prevent="updateFinancialDetails">
        <div class="form-group">
          <label for="bank">Bank Name:</label>
          <input type="text" id="bank" v-model="settings.bankName" class="form-control" required />
        </div>
        <div class="form-group mt-3">
          <label for="account">Account Number:</label>
          <input type="text" id="account" v-model="settings.accountNumber" class="form-control" required />
        </div>
        <button type="submit" class="btn btn-primary mt-3">Update Financial Details</button>
      </form>
    </div>

    <!-- Building Bills Section -->
    <div class="building-bills mt-4">
      <h3>Building Bills</h3>
      <ul>
        <li><strong>Electricity:</strong> $1,200 (Last Paid: November 1, 2024)</li>
        <li><strong>Water:</strong> $400 (Last Paid: November 3, 2024)</li>
        <li><strong>Internet:</strong> $300 (Last Paid: November 5, 2024)</li>
      </ul>
      <button class="btn btn-info mt-3" @click="viewBillingHistory">View Full Billing History</button>
    </div>

    <!-- App Preferences Section -->
    <div class="app-preferences mt-4">
      <h3>App Preferences</h3>
      <form @submit.prevent="updateUIPreferences">
        <div class="form-group">
          <label for="theme">App Theme:</label>
          <select id="theme" v-model="settings.theme" class="form-control">
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>
        <div class="form-group mt-3">
          <label for="notifications">Notifications:</label>
          <select id="notifications" v-model="settings.notifications" class="form-control">
            <option value="enabled">Enabled</option>
            <option value="disabled">Disabled</option>
          </select>
        </div>
        <button type="submit" class="btn btn-warning mt-3">Update Preferences</button>
      </form>
    </div>
  </div>
</template>


<script>
export default {
  name: "SettingsDashboard",
  data() {
    return {
      // Settings data
      settings: {
        email: "owner@example.com",
        password: "********",
        bankName: "Bank of Property",
        accountNumber: "123456789",
        theme: "light",
        notifications: "enabled",
      },
    };
  },
  methods: {
    // Update account settings
    updateAccountSettings() {
      alert(`Account updated successfully! Email: ${this.settings.email}`);
    },
    // Update financial details
    updateFinancialDetails() {
      alert(`Financial details updated for bank: ${this.settings.bankName}`);
    },
    // Update app preferences
    updateUIPreferences() {
      alert(`App preferences updated. Theme: ${this.settings.theme}`);
    },
    // Redirect to billing history page
    viewBillingHistory() {
      this.$router.push("/billing-history"); // Ensure you have a route defined for /billing-history
    },
  },
};
</script>


<style>
.container {
  font-family: Arial, sans-serif;
  color: #333;
  max-width: 800px;
  margin: 0 auto;
}

/* Form Styling */
form {
  margin-top: 10px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  font-weight: bold;
}

input,
select {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
}

button.btn-success {
  background-color: #28a745;
}

button.btn-success:hover {
  background-color: #218838;
}

button.btn-primary {
  background-color: #007bff;
}

button.btn-primary:hover {
  background-color: #0056b3;
}

button.btn-info {
  background-color: #17a2b8;
}

button.btn-info:hover {
  background-color: #117a8b;
}

button.btn-warning {
  background-color: #ffc107;
}

button.btn-warning:hover {
  background-color: #e0a800;
}

/* Sections */
h3 {
  margin-top: 30px;
}
</style>
