<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col">
        <div id="details">

          <h1 class="display-1 text-center">Education</h1>

          <div v-if="education?.length" class="row row-cols-1 row-cols-md-2 row-cols-lg-3 gap-3 justify-content-center">
            <div v-for="(item, index) in education" :key="index" class="col d-flex justify-content-center">
              <div class="card education-card">
                <img :src="item.image" alt="education-img" class="education-img card-img-top img-fluid" />
                <div class="card-body text-center">
                  <h5 class="card-title">{{ item.place }}</h5>
                  <p class="card-text">{{ item.year }}</p>
                  <p>{{ item.description }}</p>
                </div>
              </div>
            </div>
          </div>

          <div v-else>
            <Spinner />
          </div>

          <h1 class="display-1 mt-5 text-center">Experience</h1>
          <div class="experience-card mt-4 text-center">
            <h2>Life Choices Studio - Intern</h2>
            <p>
              I am currently an intern at Life Choices Studio, where I am gaining hands-on experience in web development
              and collaborating on real-world projects. My responsibilities include assisting in front-end and back-end
              development, troubleshooting bugs, and working closely with in a team. While I am still upskilling through
              short courses and small side projects, I also actively contribute to group projects, which has helped me
              sharpen my technical skills and grow professionally.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import Spinner from "@/components/Loader.vue";

const store = useStore();

const education = computed(() => store.state.education);

onMounted(() => {
  store.dispatch("fetchEducation").then(() => {
    console.log("Education data:", education.value);
  });
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap");

.container {
  min-height: 100vh;
  padding-bottom: 4rem;
}

.education-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-width: 30rem;
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

.education-img {
  width: 80%;
  aspect-ratio: 1;
  object-fit: cover;
  border-bottom: 2px solid #ddd;
}

.card {
  width: 23rem;
  height: 26rem;
  display: flex;
  align-items: center;
}

.experience-card {
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  font-family: "Poppins", sans-serif;
  margin-bottom: 2rem;
}

.experience-card h2 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.experience-card p {
  font-size: 1rem;
  line-height: 1.5;
  color: #333;
}

.card-body {
  padding: 1rem;
}

@media screen and (max-width: 1000px) {
  .education {
    display: flex;
    flex-direction: column;
  }

  .container {
    padding: 4rem;
  }
}

@media screen and (max-width: 400px) {
  .card {
    width: 300px;
  }

  .container {
    padding: 4rem;
  }
}

@media screen and (max-width: 350px) {
  .card {
    width: 250px;
  }

  .container {
    padding-bottom: 4rem;
  }
}
</style>
