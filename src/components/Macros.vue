<template>
  <div class="macros">
    <div class="macro macro--carbs">
      <div class="macro__icon"></div>
      <div class="macro__amount">{{carbs}}g</div>
    </div>
    <div class="macro macro--protein">
      <div class="macro__icon"></div>
      <div class="macro__amount">{{protein}}g</div>
    </div>
    <div class="macro macro--fat">
      <div class="macro__icon"></div>
      <div class="macro__amount">{{fat}}g</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Macros',
  props: {
    carbs: {
      type: Number,
      required: true,
      default: 0,
      validator: prop => typeof prop === 'number'
    },
    protein: {
      type: Number,
      required: true,
      default: 0,
      validator: prop => typeof prop === 'number'
    },
    fat: {
      type: Number,
      required: true,
      default: 0,
      validator: prop => typeof prop === 'number'
    }
  }
}
</script>

<style scoped>
.macros,
.macro {
  display: flex;
  align-items: center;
}

.macro__icon {
  width: 6px;
  height: 6px;
  border-radius: 3px;
  margin-right: 4px;
}

.macro.macro--carbs .macro__icon {
  background-color: #f94642;
}

.macro.macro--protein .macro__icon {
  background-color: #3177bb;
}

.macro.macro--fat .macro__icon {
  background-color: #fda120;
}

.macro__amount {
  margin-right: 8px;
  font-size: 12px;
  color: #6f737a;
}
</style>
