    <template>
        <nav class="navbar navbar-expand-lg ">
    <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
            <router-link class="nav-link "  aria-current="page" to="/" href="#">Home</router-link>
            </li>
            <li class="nav-item">
            <router-link class="nav-link "  href="#about">About me</router-link>
            </li>
            <li class="nav-item">
            <router-link class="nav-link" to="#education">Education and Experience</router-link>
            </li>
            <li class="nav-item">
            <router-link class="nav-link "  href="#projects">Projects</router-link>
            </li>
            <li class="nav-item">
            <router-link class="nav-link "  href="#contact">Contact Information</router-link>
            </li>
            
        </ul>
    
        </div>
    </div>
    </nav>
    </template>
    <style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');

/* Navbar */
.navbar {
    background-color: #1D3557; /* Dark navy for the navbar */
    color: #F1FAEE; 
    font-family: "Playfair Display", serif;
    font-optical-sizing: auto;
    padding: 1rem 2rem;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    height: 100px;
}

/* Navbar Brand */
.navbar-brand {
    color: #F7F9FB; /* Soft White text */
    font-size: 1.5rem;
    font-weight: 600;
    text-transform: uppercase;
}

/* Navbar Links */
.nav-link {
    color: #F7F9FB; /* Soft White text for links */
    font-weight: 400;
    font-size: 1.1rem;
    margin-left: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    transition: color 0.3s ease;
}

/* Navbar Link Hover Effect */
.nav-link:hover {
    color: #E63946 !important;
    background-color: white !important; /* Red color on hover (E63946) */
}

/* Navbar Toggler (for mobile view) */
.navbar-toggler {
    border-color: #F7F9FB;
}

.navbar-toggler-icon {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3E%3Cpath stroke='rgba%287%2C 8%2C 10%2C 0.6%29' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
}

/* Collapse for mobile view */
.navbar-collapse {
    background-color: transparent; /* No background for mobile collapse */
}

.navbar a {
    color: #F1FAEE; /* Light color for the navbar links */
    text-decoration: none;
    margin: 0 10px;
}

</style>