<template>
  <div class="prc" @click="clickAction">
    <div
      class="prc__cover"
      :style="{
        'background-image': `
          linear-gradient(
              180deg,
              rgba(0, 0, 0, 0.0001) 0%,
              rgba(22, 27, 35, 0.2) 70.94%,
              rgba(26, 29, 34, 0.79) 106.25%
            ),
          url(${cover})
      `}"
    >
      <Heart :isFull="isLiked"/>

      <!-- Tag Component -->
      <div class="prc__tag">
        <img class="prc__tagIcon" src="@/assets/icons/trophy.svg" />
        Premium Recipe
      </div>
    </div>
    <div class="prc__info">
      <div class="prc__header">
        {{title}}
      </div>
      <Ratings :ratings="ratings" />
      <div class="flex flex-justify-between">
        <div class="flex">
          <Duration :duration="duration" />
          <Energy
            :calories="calories"
            :unitType="energyUnits"
            :duration="duration"
          />
        </div>
        <Macros
          :carbs="carbs"
          :protein="protein"
          :fat="fat"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import Heart from '@/components/Heart.vue'
  import Ratings from '@/components/Ratings.vue'
  import Duration from '@/components/Duration.vue'
  import Energy from '@/components/Energy.vue'
  import Macros from '@/components/Macros.vue'

  export default {
    name: 'PremiumRecipeCard',
    components: {
      Heart,
      Ratings,
      Duration,
      Energy,
      Macros
    },

    props: {
      cover: {
        type: String,
        required: true,
        validator: prop => {
          const extension = prop.split('.').pop();
          return extension === 'png' || extension === 'jpg'
        }
      },
      isLiked: {
        type: Boolean,
        required: false
      },
      title: {
        type: String,
        required: true,
        validator: prop => typeof prop === 'string' && prop.length
      },
      ratings: {
        type: Array,
        required: true
      },
      duration: {
        type: Number,
        required: true
      },
      calories: {
        type: Number,
        required: true,
        validator: prop => prop >= 0
      },
      energyUnits: {
        type: String,
        required: false
      },
      carbs: {
        type: Number,
        required: true
      },
      protein: {
        type: Number,
        required: true
      },
      fat: {
        type: Number,
        required: true
      },
      didClick: {
        type: Function,
        required: false
      }
    },
    methods: {
      clickAction() {
        this.$emit('didClick')
      }
    }
  }
</script>

<style scoped lang="scss">
.prc {
  position: relative;
  width: 343px;
  height: 318px;
  background-color: #ffffff;
  box-shadow: 0px 13px 35px rgba(0, 30, 47, 0.1);
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  @include fontStandard();
}

/* section -- cover */
.prc__cover {
  position: absolute;
  width: 100%;
  height: 200px;
  background-size: cover;
  transition: opacity 0.3s;
}

.prc:hover .prc__cover {
  opacity: 0.8;
}

.prc .heart {
  position: absolute;
  top: 16px;
  right: 16px;
}

.prc__tag {
  position: absolute;
  bottom: 8px;
  left: 8px;
  width: 117px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  font-weight: 600;
  font-size: $font-sm;
  letter-spacing: -0.2px;
  color: #ffffff;
}

.prc__tag .prc__tagIcon {
  margin-right: 4px;
}

/* section -- detailed information */
.prc__info {
  width: 310px;
  height: 94px;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: #ffffff;
  padding: 8px 16px 16px 16px;
}

.prc__header {
  display: block;
  font-weight: bold;
  font-size: $font-lg;
  line-height: 20px;
  color: #0c0c0a;
  text-align: left;
  margin-bottom: 16px;
  padding-right: 10px;

  /* handle overflow */
  max-height: 40px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

/* Modifiers for nested components */
.prc .duration {
  margin-right: 16px;
}
</style>
