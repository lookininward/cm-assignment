<template>
  <div class="energy">
    <img class="energy__icon" src="../assets/icons/energy.svg" />
    <div class="energy__formatted">
      {{formattedEnergy}}
    </div>
  </div>
</template>

<script>
  import formatNumber from '../helpers/formatNumber'
  export default {
    name: 'Energy',
    props: {
      calories: {
        type: Number,
        required: true,
        validator: prop => prop >= 0
      },
      unitType: {
        type: String,
        required: false,
        default: 'calories',
        validator: prop => ['calories', 'kilojoules'].includes(prop)
      },
      duration: {
        type: Number,
        required: false,
        validator: prop => prop >= 0
      }
    },
    computed: {
      formattedEnergy() {
        const calories = formatNumber(Math.round(this.calories))
        const kilojoules = formatNumber(Math.round(this.calories * 4.184))
        const labelCal = this.duration >= 5000 ? 'Cal' : 'Calories'
        const labelKj = this.duration >= 60 ? 'Kj' : 'Kilojoules'
        return this.unitType === 'calories' ?
          `${calories} ${labelCal}` :
          `${kilojoules} ${labelKj}`
      }
    }
  }
</script>

<style scoped>
.energy {
  display: flex;
  align-items: center;
  font-size: 12px;
  color: #393c40;
}

.energy__icon {
  color: #6f737a;
  margin-right: 8px;
}
</style>
