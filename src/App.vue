<template>
  <div id="app">
    <div class="cm-container">
      <div class="cm-logo-wrapper">
        <img alt="Carb Manager" src="./assets/cm-logo.svg" class="cm-logo" />
      </div>
      <h2>Carb Manager Dev Assignment</h2>
      <p>See the README file for assignment requirements.</p>

      <div class="premium-recipe-wrapper">
        <PremiumRecipeCard
          title="Low Carb Thai Chicken Curry With Coconut Cauliflower Rice There are more things to come, ya hear!"
          :isFavorite="true"
          :calories="1180"
          energy-units="kilojoules"
          :ratings="[3.5, 5, 0.5, 2.5, 0, 4, 5, 5, 5, 4, 5, 3.5, 5]"
          :duration="128"
          @didClick="goToRecipe"
        />
      </div>

    </div>
  </div>
</template>

<script>
import PremiumRecipeCard from "./components/PremiumRecipeCard.vue";

export default {
  name: "App",
  components: {
    PremiumRecipeCard
  },
  methods: {
    goToRecipe() {
      alert('pass method to PremiumRecipeCard to run when clicked')
    }
  }
};
</script>

<style>
/* App Container */
#app {
  font-family: "proxima-nova", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--blue-100);
  margin-top: 60px;
}
</style>

<style scoped>
.cm-logo-wrapper {
  margin-bottom: 30px;
}

.cm-logo {
  max-width: 150px;
  height: auto;
}

.cm-container {
  max-width: 960px;
  margin: auto;
}

.premium-recipe-wrapper {
  display: flex;
  justify-content: center;
}
</style>
