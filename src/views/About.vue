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
      <div class="row">
        <template v-if="skills?.techStack?.length">
          <div
            class="col-md-4"
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

    
    <div class="row">
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
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
const store = useStore();

// Fetch the skills from the Vuex store
const about = computed(() => store.state.about);
const skills = computed(() => store.state.skills);

onMounted(() => {
  store.dispatch("fetchAbout");
  store.dispatch("fetchSkills");
});
</script>

<style scoped>
.section {
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

.blog-content {
  font-family: "Georgia", serif;
  font-size: 1.2rem;
  line-height: 1.8;
  color: #333;
}

.container {
  padding-top: 80px;
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
  margin-bottom: 1.5rem;
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* gap: 5rem; */
  height: 100%;
}

.tech-card:hover {
  transform: scale(1.05);
}

.card-img-top {
  width: 100px;
  height: 100px;
  margin: 1rem auto;
  object-fit: cover;
}

.card-title {
  font-size: 1.2rem;
  text-align: center;
}

/* Soft skills list styling */
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

/* Align cards and ensure uniform size */
.row > .col-md-4 {
  display: flex;
  justify-content: center;
  align-items: stretch;
}

.row .col-md-4 .card {
  width: 100%;
}

/* Typography for soft skills section */
.soft-skills-list {
  font-family: "Poppins", sans-serif;
  color: #495057;
}
</style>
