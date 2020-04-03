<template>
  <div id="app">
    <div class="cm-container">
      <div class="cm-logo-wrapper">
        <img alt="Carb Manager" src="@/assets/cm-logo.svg" class="cm-logo" />
      </div>
      <h2>Carb Manager Dev Assignment</h2>

      <div class="premium-recipe-wrapper">
        <PremiumRecipeCard
          :cover="recipe.cover"
          :title="recipe.title"
          :isLiked="recipe.isLiked"
          :calories="recipe.calories"
          :energy-units="energyUnitType"
          :ratings="recipe.ratings"
          :duration="recipe.duration"
          :carbs="recipe.carbs"
          :protein="recipe.protein"
          :fat="recipe.fat"
          @didClick="goToRecipe"
        />

        <RecipeOfTheDay
          :cover="recipeOfTheDay.cover"
          :title="recipeOfTheDay.title"
          :calories="recipeOfTheDay.calories"
          :energy-units="energyUnitType"
          :ratings="recipeOfTheDay.ratings"
          :duration="recipeOfTheDay.duration"
          :carbs="recipeOfTheDay.carbs"
          :protein="recipeOfTheDay.protein"
          :fat="recipeOfTheDay.fat"
          @didClick="goToRecipe"
        />
      </div>
    </div>
  </div>
</template>

<script>
import PremiumRecipeCard from "@/components/PremiumRecipeCard.vue";
import RecipeOfTheDay from "@/components/RecipeOfTheDay.vue";

export default {
  name: "App",
  components: {
    PremiumRecipeCard,
    RecipeOfTheDay
  },
  data() {
    return {
      recipe: {
        cover: "images/recipe-cover.png",
        title: "Low Carb Thai Chicken Curry With Coconut Cauliflower Rice",
        isLiked: false,
        calories: 489,
        ratings: [...Array(200)].map(() => 3),
        duration: 24,
        carbs: 20,
        protein: 16,
        fat: 6
      },
      recipeOfTheDay: {
        cover: "images/noodles-cover.png",
        title: "Keto Italian Beef With Cabbage Noodles",
        calories: 489,
        ratings: [...Array(1)].map(() => 5),
        duration: 30,
        carbs: 2,
        protein: 26,
        fat: 43
      },
      energyUnitType: "calories"
    };
  },
  methods: {
    goToRecipe(component) {
      alert(`pass method to ${component} to run when clicked`);
    }
  }
};
</script>

<style lang="scss">
#app {
  @include fontStandard();
  text-align: center;
  margin-top: 60px;
}

.flex {
  display: flex;
}

.flex-justify-between {
  justify-content: space-between;
}
</style>

<style scoped lang="scss">
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
  flex-direction: column;
  align-items: center;

  div:nth-child(1),
  div:nth-child(2) {
    margin-bottom: 50px;
  }
}
</style>
