<template>
    <footer class="container-fluid">
      <div class="row align-items-center justify-content-center">
        <p class="lead mb-0">
          Mbalentle's portfolio &copy; <span>{{ cYear }}</span>
        </p>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: "FooterComp",
    data() {
      return {
        cYear: new Date().getUTCFullYear(),
      };
    },
  };
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
  
  footer {
    background-color: #1D3557; /* Dark navy background */
    color: #F1FAEE;
    font-family: "Playfair Display", serif;
    padding: 1rem 2rem;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    height: 100px;
  }
  
  .row {
    height: 100%;
  }
  
  .lead {
    text-align: center;
    margin-bottom: 0;
  }
  </style>
