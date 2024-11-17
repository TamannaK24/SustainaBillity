<template>
  <div class="container mt-5">
    <h1>Property Owner Dashboard</h1>
    <p>Manage your property details, view contact information, and submit your concerns easily.</p>

    <!-- Office Building Information -->
    <div class="building-info mt-4">
      <h3>Office Building Details</h3>
      <ul>
        <li><strong>Building Name:</strong> Sunrise Corporate Center</li>
        <li><strong>Location:</strong> 123 Main Street, Downtown, NY</li>
        <li><strong>Total Floors:</strong> 10</li>
        <li><strong>Total Area:</strong> 250,000 sq ft</li>
        <li><strong>Energy Efficiency Rating:</strong> A+</li>
      </ul>
    </div>

    <!-- CBRE Website -->
    <div class="cbre-link mt-4">
      <h3>Visit CBRE for More Information</h3>
      <p>Explore resources and additional support on the CBRE website:</p>
      <a href="https://www.cbre.com/" target="_blank" class="btn btn-primary">Visit CBRE</a>
    </div>

    <!-- Contact Form -->
    <div class="contact-form mt-4">
      <h3>Contact Us</h3>
      <p>If you have any questions or concerns, please fill out the form below, and we will get back to you.</p>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="form.name" class="form-control" required />
        </div>
        <div class="form-group mt-3">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="form.email" class="form-control" required />
        </div>
        <div class="form-group mt-3">
          <label for="message">Message:</label>
          <textarea id="message" v-model="form.message" class="form-control" rows="4" required></textarea>
        </div>
        <button type="submit" class="btn btn-success mt-3">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "PropertyOwnerDashboard",
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: "",
      },
    };
  },
  methods: {
    submitForm() {
      alert(`Thank you, ${this.form.name}! We have received your message and will get back to you soon.`);
      this.form.name = "";
      this.form.email = "";
      this.form.message = "";
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

/* Building Info */
.building-info ul {
  list-style-type: none;
  padding: 0;
}

.building-info li {
  margin-bottom: 10px;
  font-size: 16px;
}

/* CBRE Link */
.cbre-link {
  text-align: center;
}

.cbre-link a {
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 5px;
  color: white;
}

/* Contact Form */
.contact-form {
  margin-top: 20px;
}

.contact-form label {
  font-weight: bold;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.contact-form button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  color: white;
  background-color: #28a745;
  cursor: pointer;
}

.contact-form button:hover {
  background-color: #218838;
}
</style>
