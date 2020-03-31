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
          :cover="recipe.cover"
          :title="recipe.title"
          :isFavorite="recipe.isFavorite"
          :calories="recipe.calories"
          :energy-units="recipe.energyUnits"
          :ratings="recipe.ratings"
          :duration="recipe.duration"
          :carbs="recipe.carbs"
          :protein="recipe.protein"
          :fat="recipe.fat"
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
  data() {
    return {
      recipe: {
        cover: 'images/recipe-cover.png',
        title: 'Low Carb Thai Chicken Curry With Coconut Cauliflower Rice',
        isFavorite: false,
        calories: 489,
        energyUnits: 'calories',
        ratings: [...Array(200)].map(() => 3),
        duration: 24,
        carbs: 20,
        protein: 16,
        fat: 6
      }
    }
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
