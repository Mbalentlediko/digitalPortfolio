<template>
    <div class="container content-container">
      <div class="row">
        <div class="col">
          <div id="details">
            <h1 class="display-1">Projects</h1>
            <div class="row gap-4" v-if="projects?.length">
              <div
                class="card project-card col-sm-12 col-md-6 col-lg-4"
                v-for="(item, index) in projects"
                :key="index"
                data-aos="fade-up"
              >
                <img :src="item.image" class="project-img" alt="project-img" loading="lazy" />
                <div class="card-body">
                  <h5 class="card-title">{{ item.name }}</h5>
                  <p class="card-text">{{ item.description }}</p>
                  <div class="d-flex justify-content-around buttons-box">
                    <a class="btn btn-primary" :href="netlify" target="_blank">
                      <i class="bi bi-github mx-2"></i> GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  
  <script setup>
  import { computed, onMounted } from "vue";
  import { useStore } from "vuex";
  
  const store = useStore();
  const projects = computed(() => store.state.projects);
  
  onMounted(() => {
    store.dispatch("fetchProjects");
  });
  </script>
  
  <style scoped>

  .project-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    max-width: 22rem; 
    border: none;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;
  }
  
  .project-card:hover {
    transform: translateY(-10px); 
  }
  
  .project-img {
    width: 100%;
    height: 12rem; 
    object-fit: cover;
    border-bottom: 2px solid #ddd;
  }
  
  .card-body {
    padding: 1rem;
    background-color: #f8f9fa;
  }
  
  .card-title {
    font-size: 1.25rem;
    margin-bottom: 0.75rem;
    font-weight: 600;
  }
  
  .card-text {
    font-size: 1rem;
    margin-bottom: 1rem;
    color: #6c757d;
  }
  
  /* Button styles */
  .buttons-box a {
    font-size: 0.9rem;
    text-decoration: none;
  }
  
  .btn {
    font-size: 0.9rem;
    padding: 0.5rem 1rem;
    background-color: #1d3557;
    color: white;
    border: none;
    border-radius: 5px;
    text-transform: uppercase;
    transition: background-color 0.3s ease;
  }
  
  .btn:hover {
    background-color: #457b9d;
  }
  

  .content-container {
    padding-top: 5rem; 
    padding-bottom: 5rem; 
  }
  
  @media (min-width: 768px) {
    .project-card {
      max-width: 20rem;
    }
  }
  </style>
  