<template>
  <div class="duration">
    <img
      v-if="displayIcon"
      class="duration__icon"
      src="@/assets/icons/clock.svg"
    />
    <div class="duration__formatted">
      {{formattedDuration}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Duration',
  props: {
    duration: {
      type: Number,
      required: true,
      validator: prop => prop >= 0
    },
    displayIcon: {
      type: Boolean,
      required: false,
      default: true,
      validator: prop => typeof prop === 'boolean'
    },
  },
  computed: {
    formattedDuration() {
      const hours = this.duration / 60
      const rhours = Math.floor(hours)
      const rminutes = Math.round((hours - rhours) * 60)
      return rhours ? `${rhours} hr ${rminutes} min` : `${rminutes} min`
    }
  }
}
</script>

<style scoped lang="scss">
.duration {
  display: flex;
  align-items: center;
  font-size: $font-sm;
  color: #393c40;
}

.duration__icon {
  color: #6f737a;
  margin-right: 8px;
}
</style>
