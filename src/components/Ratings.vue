<template>
  <div class="ratings">
    <template v-for="(star, idx) in stars">
      <img
        class="ratings__star"
        :key="idx"
        :src="
          star === 'f' ? require('../assets/icons/star-full.svg') :
          star === 'h' ? require('../assets/icons/star-half.svg') :
                         require('../assets/icons/star-empty.svg')
        "
      />
    </template>
    <div class="ratings__total">
      {{formattedTotalRatings}}
    </div>
  </div>
</template>

<script>
  import formatNumber from '../helpers/formatNumber'
  import getAverageNumber from '../helpers/getAverageNumber'

  export default {
    name: 'Ratings',
    props: {
      ratings: {
        type: Array,
        required: true,
        validator: prop => {
          return !prop.map(rating =>
            rating >=0 && rating <=5 && rating % 0.5 == 0
          ).some(rating => !rating)
        }
      },
      displayTotalRatings: {
        type: Boolean,
        required: false,
        default: true,
        validator: prop => typeof prop === 'boolean'
      }
    },
    computed: {
      stars() {
        const rating = getAverageNumber(this.ratings).toString().split('.')
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
      formattedTotalRatings() {
        const number = formatNumber(this.ratings.length)
        return `${number} ${this.ratings.length > 1 ? 'ratings' : 'rating'}`
      }
    }
  }
</script>

<style scoped>
.ratings {
  display: flex;
  align-items: center;
  font-size: 14px;
  margin-bottom: 8px;
}

.ratings__star {
  margin-right: 1.69px;
}

.ratings__star:nth-child(5) {
  margin-right: 8px;
}

.ratings__total {
  font-weight: 500;
  font-size: 14px;
  color: #1ca677;
}
</style>
