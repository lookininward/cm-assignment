<template>
  <div class="ratings">
    <template v-for="(star, idx) in stars">
      <img
        v-if="star === 'f'"
        class="ratings__star"
        :key="idx"
        src="@/assets/icons/star-full.svg"
      />
      <img
        v-else-if="star === 'h'"
        class="ratings__star"
        :key="idx"
        src="@/assets/icons/star-half.svg"
      />
      <img
        v-else
        class="ratings__star"
        :key="idx"
        src="@/assets/icons/star-empty.svg"
      />
    </template>
    <div v-if="displayTotalRatings" class="ratings__total">
      {{ formattedTotalRatings }}
    </div>
  </div>
</template>

<script>
import formatNumber from "@/helpers/formatNumber";
import getAverageNumber from "@/helpers/getAverageNumber";

export default {
  name: "Ratings",
  props: {
    ratings: {
      type: Array,
      required: true,
      validator: prop => {
        return !prop
          .map(rating => rating >= 0 && rating <= 5 && rating % 0.5 == 0)
          .some(rating => !rating);
      }
    },
    displayTotalRatings: {
      type: Boolean,
      required: false,
      default: true,
      validator: prop => typeof prop === "boolean"
    }
  },
  computed: {
    stars() {
      const rating = getAverageNumber(this.ratings)
        .toString()
        .split(".");
      let stars = [];

      for (let i = 0; i < parseInt(rating[0]); i++) {
        stars.push("f");
      }

      if (rating[1]) {
        stars.push("h");
      }

      while (stars.length < 5) {
        stars.push("e");
      }

      return stars;
    },
    formattedTotalRatings() {
      const number = formatNumber(this.ratings.length);
      return `${number} ${this.ratings.length > 1 ? "ratings" : "rating"}`;
    }
  }
};
</script>

<style scoped lang="scss">
.ratings {
  display: flex;
  align-items: center;
  @include fontStandard();
  font-size: $font-md;
}

.ratings__star {
  margin-right: 1.69px;
}

.ratings__star:nth-child(5) {
  margin-right: 8px;
}

.ratings__total {
  font-weight: 500;
  font-size: $font-md;
  color: #1ca677;
}
</style>
