<template>
  <div class="container">
    <div class="row mb-5 section">
      <h2 class="section-heading">About Me</h2>
      <div class="col-md-12">
        <div class="blog-content p-4">
          <p v-if="about?.length">{{ about[0] }}</p>
          <p v-else>Loading about me content...</p>
        </div>
      </div>
    </div>


    <div class="row mb-5">
      <h2 class="section-heading">Technical Skills</h2>
      <div class="row g-4 justify-content-center"> 
        <template v-if="skills?.techStack?.length">
          <div
            class="col-md-4 d-flex align-items-stretch"
            v-for="(tech, index) in skills.techStack"
            :key="index"
          >
            <div class="card tech-card">
              <img :src="tech.img" class="card-img-top" :alt="tech.title" />
              <div class="card-body">
                <h5 class="card-title">{{ tech.title }}</h5>
              </div>
            </div>
          </div>
        </template>
        <p v-else>Loading technical skills...</p>
      </div>
    </div>

  
    <div class="row mb-5">
      <h2 class="section-heading">Soft Skills</h2>
      <ul class="list-group soft-skills-list" v-if="skills?.softSkills?.length">
        <li
          class="list-group-item"
          v-for="(skill, index) in skills.softSkills"
          :key="index"
        >
          <i class="bi bi-check-circle"></i> {{ skill }}
        </li>
      </ul>
      <p v-else>Loading soft skills...</p>
    </div>


    <div class="row mb-5">
      <h2 class="section-heading">Hobbies</h2>
      <div class="row g-4">
        <div
          class="col-md-4 d-flex justify-content-center"
          v-for="(hobby, index) in hobbies"
          :key="index"
        >
          <div class="hobby-card">
            <div class="hobby-icon">
              <i :class="hobby.icon"></i>
            </div>
            <h5 class="hobby-title">{{ hobby.title }}</h5>
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


const about = computed(() => store.state.about);
const skills = computed(() => store.state.skills);


const hobbies = [
  { title: "Reading", icon: "bi bi-book" },
  { title: "Traveling", icon: "bi bi-airplane" },
  { title: "Coding", icon: "bi bi-laptop" }
];

onMounted(() => {
  store.dispatch("fetchAbout");
  store.dispatch("fetchSkills");
});
</script>

<style scoped>
.container {
  padding-top: 120px;
  padding-bottom: 50px;
}

.section {
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

.section-heading {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: #1d3557;
  text-align: center;
  margin-top: 1rem;
}

.tech-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 2.5rem;
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%; 
}

.tech-card:hover {
  transform: scale(1.05);
}

.card-img-top {
  width: 150px; 
  height: 150px;
  margin: 1rem auto;
  object-fit: cover;
}

.card-title {
  font-size: 1.2rem;
  text-align: center;
}


.hobby-card {
  background-color: #f5f5f5;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  transition: transform 0.3s ease, background-color 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%; 
}

.hobby-card:hover {
  transform: scale(1.05);
  background-color: #e9ecef;
}

.hobby-icon {
  font-size: 2.5rem;
  color: #1d3557;
  margin-bottom: 10px;
}

.hobby-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #495057;
}

.soft-skills-list {
  list-style-type: none;
  padding-left: 0;
}

.list-group-item {
  border: 0;
  padding: 1rem 1.5rem;
  font-size: 1.2rem;
  font-family: "Poppins", sans-serif;
  display: flex;
  align-items: center;
  font-weight: 500;
}

.list-group-item i {
  margin-right: 10px;
  color: #28a745;
}
</style>
