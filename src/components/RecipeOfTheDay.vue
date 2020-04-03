<template>
  <div class="rotd" @click="clickAction">
    <div
      class="rotd__coverImg"
      :style="{ 'background-image': `url(${cover})` }"
    ></div>
    <div class="rotd__coverImgFilter"></div>
    <div class="rotd__info">
      <div class="rotd__group">
        <div class="rotd__label">
          Recipe of the Day
        </div>
        <div class="rotd__header">
          {{ title }}
        </div>
        <Ratings :ratings="ratings" :displayTotalRatings="false" />
        <div class="flex">
          <Duration :duration="duration" />
          <Energy
            :calories="calories"
            :unitType="energyUnits"
            :duration="duration"
          />
        </div>
      </div>
      <Macros :carbs="carbs" :protein="protein" :fat="fat" />
      <div class="btn btn--learnMore">
        Learn More
      </div>
    </div>
  </div>
</template>

<script>
import Ratings from "@/components/Ratings.vue";
import Duration from "@/components/Duration.vue";
import Energy from "@/components/Energy.vue";
import Macros from "@/components/Macros.vue";

export default {
  name: "RecipeOfTheDay",
  components: {
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
        const extension = prop.split(".").pop();
        return extension === "png" || extension === "jpg";
      }
    },
    title: {
      type: String,
      required: true,
      validator: prop => typeof prop === "string" && prop.length
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
      required: true
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
      this.$emit("didClick", "RecipeOfTheDay");
    }
  }
};
</script>

<style scoped lang="scss">
.rotd {
  position: relative;
  width: 393px;
  height: 239px;
  background-color: #000000;
  box-shadow: 0px 13px 35px rgba(0, 30, 47, 0.1);
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  @include fontStandard();
}

.rotd__coverImg,
.rotd__coverImgFilter {
  position: absolute;
  width: 100%;
  height: 239px;
}

.rotd__coverImg {
  background-size: cover;
  z-index: 1;
}

.rotd__coverImgFilter {
  background: #000000;
  background-blend-mode: multiply;
  mix-blend-mode: normal;
  opacity: 0.45;
  z-index: 2;
}

.rotd__info {
  position: absolute;
  width: 393px;
  height: 239px;
  display: flex;
  flex-direction: column;
  text-align: left;
  z-index: 3;
}

.rotd__group {
  position: absolute;
  top: 38px;
  left: 28px;
}

.rotd__label {
  width: 218px;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: #1bc98e;
  text-transform: uppercase;
  margin-bottom: 2px;
}

.rotd__header {
  max-width: 330px;
  height: 52px;
  display: flex;
  align-items: left;
  font-weight: 600;
  font-size: 24px;
  line-height: 26px;
  text-align: left;
  color: #ffffff;
  text-transform: capitalize;
  margin-bottom: 3px;
  max-height: 60px;
  @include limitLines(2);
}

.btn.btn--learnMore {
  position: absolute;
  width: 73px;
  height: 16px;
  font-size: $font-md;
  font-weight: bold;
  line-height: 16px;
  color: #ffffff;
  padding: 8px 20px;
  background: rgba(255, 255, 255, 0.4);
  mix-blend-mode: normal;
  border-radius: 15px;
}
</style>

<style lang="scss">
.rotd {
  .duration,
  .energy,
  .macro__amount {
    font-size: $font-md;
  }

  .duration,
  .energy,
  .duration__icon,
  .energy__icon,
  .macro__amount {
    color: #ffffff;
  }

  .duration {
    margin-right: 5px;
  }

  .ratings {
    margin-bottom: 5px;
  }

  .energy {
    margin-left: 5px;
  }

  .macros {
    position: absolute;
    bottom: 30px;
    left: 28px;
  }

  .macro {
    margin-right: 10px;
  }

  .btn.btn--learnMore {
    position: absolute;
    bottom: 23px;
    right: 16px;
  }
}
</style>
