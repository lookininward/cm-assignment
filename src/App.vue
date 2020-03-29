<template>
  <div id="app">
    <div class="cm-container">
      <div class="cm-logo-wrapper">
        <img alt="Carb Manager" src="./assets/cm-logo.svg" class="cm-logo" />
      </div>
      <h2>Carb Manager Dev Assignment</h2>
      <p>See the README file for assignment requirements.</p>

      <div class="premium-recipe-wrapper">
        <PremiumRecipeCard :calories="1180" energy-units="kilojoules" />
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
  }
};
</script>

<style>
/* Variables */
:root {
  --font-standard: "proxima-nova", Helvetica, Arial, sans-serif;
  --font-sm: 12px;
  --font-md: 14px;
  --font-lg: 18px;

  --white: #ffffff;
  --grey-000: #6f737a;
  --grey-100: #393c40;
  --grey-200: #0c0c0a;
  --red-000: #f94642;
  --blue-000: #3177bb;
  --blue-100: #2c3e50;
  --green-000: #1ca677;
  --orange-000: #fda120;

  --shadow-000: 0px 13px 35px rgba(0, 30, 47, 0.1);
}

/* Utility Classes */
.flex {
  display: flex;
}

.flex-justify-between {
  justify-content: space-between;
}

/* App Container */
#app {
  font-family: var(--font-standard);
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
