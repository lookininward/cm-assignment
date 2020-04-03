<template>
  <div class="macros">
    <div class="macro macro--carbs">
      <svg class="macro__icon" viewBox="0 0 80 80" width="6" height="6">
        <circle class="circle" cx="40" cy="40" r="38" />
      </svg>
      <div class="macro__amount">{{ carbs }}g</div>
    </div>
    <div class="macro macro--protein">
      <svg class="macro__icon" viewBox="0 0 80 80" width="6" height="6">
        <circle class="circle" cx="40" cy="40" r="38" />
      </svg>
      <div class="macro__amount">{{ protein }}g</div>
    </div>
    <div class="macro macro--fat">
      <svg class="macro__icon" viewBox="0 0 80 80" width="6" height="6">
        <circle class="circle" cx="40" cy="40" r="38" />
      </svg>
      <div class="macro__amount">{{ fat }}g</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Macros",
  props: {
    carbs: {
      type: Number,
      required: true,
      default: 0,
      validator: prop => typeof prop === "number"
    },
    protein: {
      type: Number,
      required: true,
      default: 0,
      validator: prop => typeof prop === "number"
    },
    fat: {
      type: Number,
      required: true,
      default: 0,
      validator: prop => typeof prop === "number"
    }
  }
};
</script>

<style scoped lang="scss">
.macros,
.macro {
  display: flex;
  align-items: center;
  @include fontStandard();
}

.macro {
  margin-right: 8px;

  &:nth-child(3) {
    margin-right: 0;
  }
}

.macro__icon {
  margin-right: 4px;

  .circle {
    fill: #f94642;
    stroke: #f94642;
    stroke-width: 0.1875em;
  }
}

.macro.macro--carbs .macro__icon .circle {
  fill: #f94642;
  stroke: #f94642;
}

.macro.macro--protein .macro__icon .circle {
  fill: #3177bb;
  stroke: #3177bb;
}

.macro.macro--fat .macro__icon .circle {
  fill: #fda120;
  stroke: #fda120;
}

.macro__amount {
  font-size: $font-sm;
  font-weight: 500;
  color: #6f737a;
}
</style>
