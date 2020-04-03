<template>
  <div class="duration">
    <svg
      v-if="displayIcon"
      class="duration__icon"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.99998 16.6667C13.2342 16.6667 16.6666 13.2342 16.6666 9.00001C16.6666 4.76583 13.2342 1.33334 8.99998 1.33334C4.7658 1.33334 1.33331 4.76583 1.33331 9.00001C1.33331 13.2342 4.7658 16.6667 8.99998 16.6667Z"
        stroke="currentColor"
        stroke-width="1.2"
        stroke-miterlimit="10"
      />
      <path
        d="M9.33331 3.33334V9.33334H5.33331"
        stroke="currentColor"
        stroke-width="1.2"
        stroke-miterlimit="10"
      />
    </svg>
    <div class="duration__formatted">
      {{ formattedDuration }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Duration",
  props: {
    displayIcon: {
      type: Boolean,
      required: false,
      default: true,
      validator: prop => typeof prop === "boolean"
    },
    duration: {
      type: Number,
      required: true,
      validator: prop => prop >= 0
    }
  },
  computed: {
    formattedDuration() {
      const hours = this.duration / 60;
      const rhours = Math.floor(hours);
      const rminutes = Math.round((hours - rhours) * 60);
      return rhours ? `${rhours} hr ${rminutes} min` : `${rminutes} min`;
    }
  }
};
</script>

<style scoped lang="scss">
.duration {
  display: flex;
  align-items: center;
  @include fontStandard();
  font-size: $font-sm;
  color: #393c40;
}

.duration__icon {
  color: #6f737a;
  margin-right: 8px;
}
</style>
