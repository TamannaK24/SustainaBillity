<template>
  <div>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <!-- Navbar Brand -->
      <NuxtLink class="navbar-brand me-2" to="/">
        <img src="/icons/logo.png" alt="SustainaBillity Logo" class="navbar-icon" />
      </NuxtLink>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <!-- Right-aligned navigation links -->
        <ul class="navbar-nav ms-auto">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle summary-link"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Summary
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <!-- Goals -->
              <NuxtLink class="dropdown-item" to="/goals">
                <img src="/icons/goal.png" alt="Goals Icon" class="dropdown-icon me-2" />
                Goals
              </NuxtLink>
              <!-- Cost -->
              <NuxtLink class="dropdown-item" to="/totalcost">
                <img src="/icons/money-bag.png" alt="Cost Icon" class="dropdown-icon me-2" />
                Cost
              </NuxtLink>
              <!-- Timeline -->
              <NuxtLink class="dropdown-item" to="/timeline">
                <img src="/icons/calendar.png" alt="Timeline Icon" class="dropdown-icon me-2" />
                Timeline
              </NuxtLink>
              <!-- Profile -->
              <NuxtLink class="dropdown-item" to="/profile">
                <img src="/icons/account.png" alt="Users Icon" class="dropdown-icon me-2" />
                Profile
              </NuxtLink>
              <div class="dropdown-divider"></div>
              <!-- Settings -->
              <NuxtLink class="dropdown-item" to="/settings">
                <img src="/icons/setting.png" alt="Settings Icon" class="dropdown-icon me-2" />
                Settings
              </NuxtLink>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>



<style scoped>
/* Styling for icons */
.dropdown-icon {
  width: 20px;
  height: 20px;
  object-fit: contain;
  display: none; /* Initially hide the icon */
  margin-right: 0.5rem; /* Add spacing */
}

/* Show icons only on hover */
.dropdown-item:hover .dropdown-icon {
  display: inline-block; /* Show the icon on hover */
}

/* Navbar Brand Icon */
.navbar-icon {
  width: 400px; /* Adjust this for desktop */
  height: auto; /* Maintain aspect ratio */
  object-fit: contain;
}

/* Dropdown Options Styling */
.dropdown-menu {
  background-color: #003F2D; /* Green background */
  border: none; /* Remove border */
  border-radius: 4px; /* Optional: Rounded corners */
}

.dropdown-item {
  font-weight: bold; /* Make dropdown text bold */
  color: #ffffff !important; /* Set dropdown text color to white */
  text-decoration: none; /* Remove underline */
  transition: color 0.3s ease, background-color 0.3s ease; /* Smooth transition for hover effects */
}

.dropdown-item:hover {
  background-color: #004C3B; /* Slightly darker green for hover */
  color: #000000 !important; /* Black text on hover */
}

/* Summary Dropdown Text Styling */
.summary-link {
  font-weight: bold; /* Make Summary text bold */
  color: #003F2D !important; /* Match the dropdown item color */
  text-decoration: none; /* Remove underline */
}

.summary-link:hover {
  color: #001F14 !important; /* Slightly darker green for hover */
}

/* Mobile Responsive Styles */
@media (max-width: 768px) {
  .navbar-icon {
    width: 20px; /* Smaller size for mobile */
    height: auto; /* Maintain aspect ratio */
  }
}
</style>
