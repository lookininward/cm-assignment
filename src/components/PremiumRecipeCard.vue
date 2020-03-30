<template>
  <div class="prc" @click="clickAction">
    <div class="prc__cover">
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
          {{formatNumber(ratings.length)}}
          {{ratings.length > 1 ? 'ratings' : 'rating'}}
        </div>
      </div>
      <div class="flex flex-justify-between">
        <div class="flex">
          <div class="prc__duration">
            <img class="prc__durationIcon" src="../assets/icons/clock.svg" />
            {{formattedDuration}}
          </div>
          <div class="prc__energy">
            <img class="prc__energyIcon" src="../assets/icons/energy.svg" />
            {{energy}}
          </div>
        </div>
        <div class="prc__macros">
          <div class="macro macro--carb"></div>
          <div class="amount">20g</div>
          <div class="macro macro--protein"></div>
          <div class="amount">16g</div>
          <div class="macro macro--fat"></div>
          <div class="amount">6g</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Description',
    props: {
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
        default: 'calories',
        validator: prop => ['calories', 'kilojoules'].includes(prop)
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
        required: true,
        validator: prop => prop >= 0
      },
      didClick: {
        type: Function,
        required: false
      },
    },
    computed: {
      energy() {
        const calories = this.formatNumber(Math.round(this.calories))
        const kilojoules = this.formatNumber(Math.round(this.calories * 4.184))
        const labelCal = this.duration >= 5000 ? 'Cal' : 'Calories'
        const labelKj = this.duration >= 60 ? 'Kj' : 'Kilojoules'

        return this.energyUnits === 'calories' ?
          `${calories} ${labelCal}` :
          `${kilojoules} ${labelKj}`
      },

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

      formattedDuration() {
        const hours = this.duration / 60
        const rhours = Math.floor(hours)
        const rminutes = Math.round((hours - rhours) * 60)
        return rhours ? `${rhours} hr ${rminutes} min` : `${rminutes} min`
      }

    },
    methods: {
      formatNumber(number) {
        let parts = number.toString().split(".")
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        return parts.join(".")
      },
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
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.0001) 0%,
      rgba(22, 27, 35, 0.2) 70.94%,
      rgba(26, 29, 34, 0.79) 106.25%
    ),
    url("../assets/recipe-cover.png");
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

/* duration, energy, macros breakdown */
.prc__duration,
.prc__energy {
  display: flex;
  align-items: center;
  font-size: 12px;
  color: #393c40;
}

.prc__duration .prc__durationIcon,
.prc__energy .prc__energyIcon {
  color: #6f737a;
  margin-right: 8px;
}

.prc__duration {
  margin-right: 16px;
}

.prc__macros {
  display: flex;
  align-items: center;
}

.prc__macros .macro {
  margin-right: 4px;
}

.prc__macros .amount {
  margin-right: 8px;
  font-size: 12px;
  color: #6f737a;
}

.macro {
  width: 6px;
  height: 6px;
  border-radius: 3px;
}

.macro.macro--carb {
  background-color: #f94642;
}

.macro.macro--protein {
  background-color: #3177bb;
}

.macro.macro--fat {
  background-color: #fda120;
}
</style>
