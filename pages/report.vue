<template>
    <div class="container mt-5">
      <h1 class="text-success">Report Maintenance Issues</h1>
      <p>Use the form below to report issues with the lights in your office building. Our maintenance team will respond promptly.</p>
  
      <!-- Maintenance Report Form -->
      <form @submit.prevent="submitIssue" class="maintenance-form">
        <div class="form-group mb-3">
          <label for="location" class="form-label">Location of the Issue</label>
          <input
            type="text"
            id="location"
            v-model="issue.location"
            class="form-control"
            placeholder="e.g., Floor 3, Conference Room"
            required
          />
        </div>
  
        <div class="form-group mb-3">
          <label for="description" class="form-label">Issue Description</label>
          <textarea
            id="description"
            v-model="issue.description"
            class="form-control"
            rows="4"
            placeholder="Describe the issue with the lights..."
            required
          ></textarea>
        </div>
  
        <button type="submit" class="btn btn-success">Submit Report</button>
      </form>
  
      <!-- Maintenance Contact Information -->
      <div class="mt-5">
        <h2 class="text-primary">Maintenance Contact Info</h2>
        <p>If you have urgent issues, please contact our maintenance team directly:</p>
        <ul>
          <li><strong>Phone:</strong> (123) 456-7890</li>
          <li><strong>Email:</strong> maintenance@officebuilding.com</li>
          <li><strong>Hours:</strong> Monday - Friday, 9 AM - 5 PM</li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "MaintenanceReport",
    data() {
      return {
        issue: {
          location: "",
          description: "",
        },
      };
    },
    methods: {
      submitIssue() {
        alert(
          `Issue Submitted:\nLocation: ${this.issue.location}\nDescription: ${this.issue.description}`
        );
        // Reset the form fields
        this.issue.location = "";
        this.issue.description = "";
      },
    },
  };
  </script>
  
  <style scoped>

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
    max-width: 800px;
    margin: 0 auto;
  }
  
  h1,
  h2 {
    font-weight: bold;
  }
  
  .text-success {
    color: #28a745;
  }
  
  .text-primary {
    color: #007bff;
  }
  
  .maintenance-form {
    margin-top: 20px;
  }
  
  .form-label {
    font-weight: bold;
  }
  
  .form-control {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
  
  .btn-success {
    background-color: #28a745;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.2s;
  }
  
  .btn-success:hover {
    background-color: #218838;
  }
  </style>
  