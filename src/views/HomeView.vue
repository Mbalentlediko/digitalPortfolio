<template>
  <div class="container" id="home">
    <div class="row vh-100 align-items-center">
      <div class="col-md-6 text-md-left text-center">
        <div class="details mt-4">
          <h2 >Hello I am </h2>
          <h1 class="display-1">Mbalentle Diko</h1>
          <p id="jobtitle" v-if="jobTitles?.length">
            An <span id="title">{{ jobTitles[0].title }}</span>
          </p>
          <button type="button" @click.prevent="navigateToContact" class="btn reach-me-btn mt-4">
            Reach Me
          </button>
        </div>
      </div>

      <div class="col-md-6 text-md-right text-center">
        <img
          src="https://mbalentlediko.github.io/Images/static/20240422_100655.jpg"
          alt="portfolio"
          loading="lazy"
          class="img-fluid w-75 shadow rounded-top custom-rounded"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router"; 


const store = useStore();
const jobTitles = computed(() => store.state.jobTitle);


const router = useRouter();


onMounted(() => {
  store.dispatch("fetchJobTitle");
});


const navigateToContact = () => {
  router.push({ name: "contact" }); 
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

.custom-rounded {
  border-radius: 80px;
}
.container {
  padding-bottom: 100px; /* Space between content and footer */
}
#title, .display{
  font-family: 'Poppins', sans-serif;
  font-size: 3rem;
}

.reach-me-btn {
  margin-TOP: 90px;
  font-family: 'Poppins', sans-serif;
  font-size: 1.2rem;
  padding: 20px 90px;
  background-color: #22223b ;
  color: white;
  border-radius: 30px;
  transition: background-color 0.3s ease;
}

.reach-me-btn:hover {
  background-color: #C9ADA7;
}

.description {
  font-size: 1.2rem;
  line-height: 1.6;
}
button{
  margin-bottom:20px;
}
img {
  margin-bottom: 50px;
}
@media (max-width: 768px) {
  img {
    margin-bottom: 30px; /* Adjust space for smaller screens */
  }

  button {
    margin-bottom: 15px; /* Adjust space for smaller screens */
  }
}

</style>
