<template>
    <div class="container">
      <h2 class="section-heading">Contact Me</h2>
  
      <div class="row">
        <!-- Contact Information and Icons on the Left -->
        <div class="col-md-6 d-flex flex-column align-items-start contact-info">
          <!-- LinkedIn -->
          <div class="info-item mb-3">
            <i class="bi bi-linkedin"></i>
            <a href="#" class="info-link">LinkedIn</a>
          </div>
  
          <!-- Phone -->
          <div class="info-item mb-3">
            <i class="bi bi-telephone-fill"></i>
            <span class="info-text">083 564 5479</span>
          </div>
  
          <!-- Gmail -->
          <div class="info-item mb-3">
            <i class="bi bi-envelope-fill"></i>
            <span class="info-text">dikombalentle9@gmail.com</span>
          </div>
  
          <!-- Address -->
          <div class="info-item mb-3">
            <i class="bi bi-geo-alt-fill"></i>
            <span class="info-text">Khayelitsha 7784</span>
          </div>
        </div>
  
        <!-- Contact Form on the Right -->
        <div class="col-md-6">
          <form @submit.prevent="submitForm">
            <!-- Name -->
            <div class="form-group mb-3">
              <label for="name" class="form-label">Name</label>
              <input
                type="text"
                class="form-control"
                id="name"
                v-model="formData.name"
                required
              />
            </div>
  
            <!-- Email -->
            <div class="form-group mb-3">
              <label for="email" class="form-label">Email</label>
              <input
                type="email"
                class="form-control"
                id="email"
                v-model="formData.email"
                required
              />
            </div>
  
            <!-- Message -->
            <div class="form-group mb-4">
              <label for="message" class="form-label">Message</label>
              <textarea
                class="form-control"
                id="message"
                v-model="formData.message"
                rows="5"
                required
              ></textarea>
            </div>
  
            <!-- Submit Button -->
            <div class="d-grid">
              <button type="submit" class="btn submit-btn">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { reactive } from 'vue';
  
  const formData = reactive({
    name: '',
    email: '',
    message: ''
  });
  
  const submitForm = () => {
    alert('Form submitted!');
  };
  </script>
  
  <style scoped>
  /* Fonts */
  @import url('https://fonts.googleapis.com/css2?family=Lora:wght@700&family=Poppins:wght@400;500&display=swap');
  
  .container {
    padding-top: 80px;
    padding-bottom: 80px;
    background-color: #ffffff; /* Changed to white */
  }
  
  .section-heading {
    font-size: 2.5rem;
    font-family: 'Lora', serif; /* Professional heading font */
    font-weight: bold;
    text-align: center;
    color: #4A4E69;
    margin-bottom: 2rem;
  }
  
  .form-group {
    margin-bottom: 1.5rem;
  }
  
  .form-label {
    font-size: 1.2rem;
    color: #4A4E69;
    font-family: 'Poppins', sans-serif; /* Professional font for labels */
  }
  
  .form-control {
    border: 2px solid #C9ADA7;
    border-radius: 5px;
    padding: 10px;
    font-size: 1rem;
    font-family: 'Poppins', sans-serif;
  }
  
  .form-control:focus {
    border-color: #9A8C98;
    box-shadow: none;
  }
  
  .submit-btn {
    background-color: #22223B;
    color: #fff;
    padding: 10px;
    font-size: 1.2rem;
    border-radius: 5px;
    border: none;
    transition: background-color 0.3s;
    font-family: 'Poppins', sans-serif;
  }
  
  .submit-btn:hover {
    background-color: #4A4E69;
  }
  
  /* Contact Information Section */
  .contact-info {
    padding-top: 40px; /* Adjusted padding to move it up */
  }
  
  .info-item {
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    font-family: 'Poppins', sans-serif;
    color: #4A4E69;
  }
  
  .info-item i {
    margin-right: 10px;
    font-size: 1.5rem;
    color: #22223B;
  }
  
  .info-link {
    color: #4A4E69;
    text-decoration: none;
    font-weight: bold;
  }
  
  .info-text {
    font-size: 1.2rem;
  }
  </style>
  