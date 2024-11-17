<template>
    <div>
      <!-- Navbar -->
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand me-2" href="#">SustainaBillity</a>
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
                <a class="dropdown-item" href="#">
                  <i class="bi bi-flag me-2"></i>Goals
                </a>
                <a class="dropdown-item" href="#">
                  <i class="bi bi-cash-coin me-2"></i>Cost
                </a>
                <a class="dropdown-item" href="#">
                  <i class="bi bi-calendar me-2"></i>Timeline
                </a>
                <a class="dropdown-item" href="#">
                  <i class="bi bi-people me-2"></i>Users
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">
                  <i class="bi bi-gear me-2"></i>Settings
                </a>
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
  