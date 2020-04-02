<template>
  <img
    v-if="isFull"
    class="heart heart--full"
    src="@/assets/icons/heart-full.svg"
  />
  <img v-else class="heart heart--empty" src="@/assets/icons/heart-empty.svg" />
</template>

<script>
export default {
  name: "Heart",
  props: {
    isFull: {
      type: Boolean,
      required: false,
      default: false,
      validator: prop => typeof prop === "boolean"
    }
  }
};
</script>
