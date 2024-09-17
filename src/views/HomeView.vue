<template>
  <div class="container">
    <div class="row vh-100 align-items-center">
      <!-- Left Column: Description -->
      <div class="col-md-6 text-md-left text-center">
        <p class="description">
          I am passionate about technology and web development, constantly seeking new challenges and learning opportunities.
        </p>
        <!-- Job Title at the bottom -->
        <div class="details mt-4">
          <h1 class="display-1">Mbalentle Diko</h1>
          <p v-if="jobTitles?.length">
            I am an <span>{{ jobTitles[0].title }}</span>
          </p>
        </div>
      </div>

      <!-- Right Column: Image -->
      <div class="col-md-6 text-md-right text-center">
        <img
          src="https://mbalentlediko.github.io/Images/static/20240422_100655.jpg"
          alt="portfolio"
          loading="lazy"
          class="img-fluid w-75 shadow rounded-top custom-rounded"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";

// Access Vuex store
const store = useStore();
const jobTitles = computed(() => store.state.jobTitle);

// Initializing AOS and dispatching Vuex action
onMounted(() => {
  store.dispatch("fetchJobTitle");
  AOS.init(); // Initialize AOS for animations
});
</script>

<style scoped>
/* Add a little curve to the top corners of the image */
.custom-rounded {
  border-top-left-radius: 80px;
  border-top-right-radius: 80px;
}

.description {
  font-size: 1.2rem;
  line-height: 1.6;
  color: #555;
}
</style>
