<template>
  <div>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <!-- Navbar Brand -->
      <NuxtLink class="navbar-brand me-2" to="/">
        SustainaBillity
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
              class="nav-link dropdown-toggle"
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
              <NuxtLink class="dropdown-item" to="/cost">
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

<script>
export default {
  name: "AppNavbar",
};
</script>

<style scoped>
/* Styling for icons */
.dropdown-icon {
  width: 20px;
  height: 20px;
  object-fit: contain;
  display: inline-block; /* Ensure image appears next to text */
  margin-right: 0.5rem; /* Add spacing */
}
</style>
