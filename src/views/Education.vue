<template>
    <div class="container">
      <div class="row">
        <div class="col">
          <div id="details">
            <h1 class="display-1">Education</h1>
            <div class="row gap-4" v-if="education?.length">
              <!-- Looping through the education items -->
              <div
                class="card education-card col-sm-12 col-md-6 col-lg-4"
                v-for="(item, index) in education"
                :key="index"
              >
                <!-- Card Header with Image -->
                <img :src="item.image" alt="education-img" class="education-img" />
    
                <!-- Card Body -->
                <div class="card-body">
                  <h5 class="heading">{{ item.place }}</h5>
                  <p>{{ item.year }}</p>
                  <p>{{ item.description }}</p> <!-- Description should appear here -->
                  <!-- Optional: Laptop Image inside the card -->
                  <img
                    v-if="item.laptopImage"
                    :src="item.laptopImage"
                    alt="Laptop Image"
                    class="laptop-img"
                  />
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
const education = computed(() => store.state.education);

onMounted(() => {
  store.dispatch("fetchEducation");
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');

.container {
  min-height: 100vh;
}

.education-card {
  max-width: 30rem; 
  height: auto; /* Auto height to grow based on content */
  border: none;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  margin-bottom: 20px;
  background-color: #f0f4f8; /* Background color to distinguish */
}

.education-card:hover {
  transform: translateY(-10px);
}

.education-img {
  width: 100%;
  height: 10rem; /* Adjusted image height */
  object-fit: cover;
  border-bottom: 2px solid #ddd;
}

.card-body {
  padding: 1.25rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
}

.heading {
  font-size: 1.75rem; 
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: #1d3557;
  font-family: 'Poppins', sans-serif;
}

.card-body p {
  color: #333;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  line-height: 1.5;
}

.laptop-img {
  width: 100%;
  height: auto;
  margin-top: 10px;
  border-radius: 8px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
}

.display-1 {
  margin-top: 70px;
  font-family: 'Poppins', sans-serif;
}
</style>
