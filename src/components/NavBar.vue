<template>
  <nav class="navbar navbar-expand-lg fixed-top">
    <div class="container-fluid">
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
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="/"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About me</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/education"
              >Education and Experience</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/projects">Projects</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact"
              >Contact Information</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<style>
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap");


.navbar {
  background-color: #9A8C98; 
  color: #f1faee;
  font-family: "Playfair Display", serif;
  font-optical-sizing: auto;
  padding: 1rem 2rem;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  height: 100px;
}


.navbar-brand {
  color: #f7f9fb;
  font-size: 1.5rem;
  font-weight: 600;
  text-transform: uppercase;
}


.nav-link {
  color:#080808; 
  font-weight: 400;
  font-size: 1.1rem;
  margin-left: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: color 0.3s ease;
}


.navbar-toggler {
  border-color: #f7f9fb;
}




.navbar-collapse {
  background-color: transparent; 
}

.navbar a {
  color: #080808; 
  text-decoration: none;
  margin: 0 10px;
}
</style>
