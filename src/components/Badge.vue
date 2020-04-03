<template>
  <div class="badge">
    <img v-if="icon" class="badge__icon" :src="iconPath" />
    <div class="badge__label">
      {{ label }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Badge",
  props: {
    icon: {
      type: String,
      required: false,
      validator: prop => typeof prop === "string" && prop.length
    },
    label: {
      type: String,
      required: true,
      validator: prop => typeof prop === "string" && prop.length
    }
  },
  computed: {
    iconPath() {
      return require(`../assets/icons/${this.icon}.svg`);
    }
  }
};
</script>

<style scoped lang="scss">
.badge {
  width: fit-content;
  padding: 0 8px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  @include fontStandard();
  font-weight: 600;
  font-size: $font-sm;
  text-transform: capitalize;
  letter-spacing: -0.2px;
  color: #ffffff;
}

.badge__icon {
  width: 12px;
  height: 12px;
  margin-right: 4px;
}
</style>
