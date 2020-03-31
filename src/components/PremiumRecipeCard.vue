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
      <img
        :data-test-heart="isFavorite ? 'full' : 'empty'"
        class="prc__heart"
        :src="
          isFavorite ? require('../assets/icons/heart-full.svg') :
                       require('../assets/icons/heart-empty.svg')
        "
      />
      <div class="prc__tag">
        <img class="prc__tagIcon" src="../assets/icons/trophy.svg" />
        Premium Recipe
      </div>
    </div>
    <div class="prc__info">
      <div class="prc__header">
        {{title}}
      </div>
      <div class="prc__ratings">
        <template v-for="(star, idx) in stars">
          <img
            class="prc__star"
            :key="idx"
            :src="
              star === 'f' ? require('../assets/icons/star-full.svg') :
              star === 'h' ? require('../assets/icons/star-half.svg') :
                             require('../assets/icons/star-empty.svg')
            "
          />
        </template>
        <div class="ratingsLink">
          {{formattedRatings}}
        </div>
      </div>
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
  import Duration from './Duration.vue'
  import Energy from './Energy.vue'
  import Macros from './Macros.vue'
  import formatNumber from '../helpers/formatNumber'

  export default {
    name: 'PremiumRecipeCard',
    components: {
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
      title: {
        type: String,
        required: true,
        validator: prop => typeof prop === 'string' && prop.length
      },
      isFavorite: {
        type: Boolean,
        required: false,
        default: false,
        validator: prop => typeof prop === 'boolean'
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
      ratings: {
        type: Array,
        required: true,
        validator: prop => {
          return !prop.map(rating =>
            rating >=0 && rating <=5 && rating % 0.5 == 0
          ).some(rating => !rating)
        }
      },
      duration: {
        type: Number,
        required: true
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
      },
    },
    computed: {
      stars() {
        const rating = this.getAverage(this.ratings).toString().split('.')
        let stars = []

        for (let i = 0; i < parseInt(rating[0]); i++) {
          stars.push('f')
        }

        if (rating[1]) {
          stars.push('h')
        }

        while (stars.length < 5) {
          stars.push('e')
        }

        return stars
      },
      formattedRatings() {
        const number = formatNumber(this.ratings.length)
        return `${number} ${this.ratings.length > 1 ? 'ratings' : 'rating'}`
      }
    },
    methods: {
      getAverage(ratings) {
        return ratings.reduce((a,b) => a + b, 0) / ratings.length
      },
      clickAction() {
        this.$emit('didClick')
      }
    }
  }
</script>

<style scoped>
.flex {
  display: flex;
}

.flex-justify-between {
  justify-content: space-between;
}

/* container */
.prc {
  position: relative;
  width: 343px;
  height: 318px;
  background-color: #ffffff;
  box-shadow: 0px 13px 35px rgba(0, 30, 47, 0.1);
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  font-family: "proxima-nova", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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

.prc__heart {
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
  font-size: 12px;
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
  font-size: 18px;
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

/* star ratings */
.prc__ratings {
  display: flex;
  align-items: center;
  font-size: 14px;
  margin-bottom: 8px;
}

.prc__ratings .prc__star {
  margin-right: 1.69px;
}

.prc__ratings .prc__star:nth-child(5) {
  margin-right: 8px;
}

.ratingsLink {
  font-weight: 500;
  font-size: 14px;
  color: #1ca677;
}

/* Modifiers for nested components */
.prc .duration {
  margin-right: 16px;
}
</style>
