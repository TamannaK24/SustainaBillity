<template>
    <footer class="app-footer">
      <div class="footer-content">
        <span>&copy; 2024 SustainaBillity</span>
        <span> | </span>
        <span>Contact: <a href="mailto:info@sustainabillity.com">info@sustainabillity.com</a></span>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: "AppFooter",
  };
  </script>
  
  <style scoped>
  /* Footer Styling */
  .app-footer {
    background: #003F2D; /* Dark green background */
    color: white;
    text-align: center;
    padding: 10px 0; /* Minimal padding for a smaller footer */
    font-size: 0.8rem; /* Smaller font size */
    width: 100%; /* Full width */
    position: relative; /* Scrollable with content */
    margin-top: 20px; /* Add gap from the content above */
  }
  
  .footer-content {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px; /* Add spacing between elements */
  }
  
  .footer-content a {
    color: #FFD700; /* Gold text for email link */
    text-decoration: none;
  }
  
  .footer-content a:hover {
    text-decoration: underline;
  }
  </style>
  