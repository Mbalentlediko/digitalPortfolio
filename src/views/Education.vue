<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div id="details">
          <h1 class="display-1 mt-5">Education</h1>
          <div class="row gap-4" v-if="education?.length">
            <div
              class="card education-card col-sm-12 col-md-6 col-lg-5"
              v-for="(item, index) in education"
              :key="index"
            >
              <img
                :src="item.image"
                alt="education-img"
                class="education-img"
              />

              <div class="card-body">
                <h5 class="heading">{{ item.place }}</h5>
                <p>{{ item.year }}</p>
                <p>{{ item.description }}</p>

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

// Check if education is being retrieved from the Vuex store
const education = computed(() => store.state.education);

onMounted(() => {
  store.dispatch("fetchEducation").then(() => {
    // Debugging: Check if education data is being loaded
    console.log("Education data:", education.value);
  });
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap");
.container {
  min-height: 100vh;
}

.education-card {
  max-width: 30rem;
  height: 20rem;
  border: none;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  margin-bottom: 20px;
}

.education-card:hover {
  transform: translateY(-10px);
}

.education-img {
  width: 100%;
  height: 10rem;
  object-fit: cover;
  border-bottom: 2px solid #ddd;
}

.heading {
  font-size: 2rem;
  margin: 20px 0;
  font-weight: bold;
  color: #1d3557;
  font-family: "Poppins", sans-serif;
}

.laptop-img {
  width: 100%;
  height: auto;
  margin-top: 10px;
  border-radius: 8px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
}

.card-body p {
  color: #333;
  font-size: 1rem;
}

.display-1 {
  margin-top: 70px;
}

.education-card:hover {
  transform: translateY(-10px);
}

.education-img {
  width: 100%;
  height: 14rem;
  object-fit: cover;
  border-bottom: 2px solid #ddd;
}
</style>
