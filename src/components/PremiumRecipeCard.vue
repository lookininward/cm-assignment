<template>
  <div class="prc" @click="clickAction">
    <div
      class="prc__coverImg"
      :style="{
        'background-image': `
          linear-gradient(
              180deg,
              rgba(0, 0, 0, 0.0001) 0%,
              rgba(22, 27, 35, 0.2) 70.94%,
              rgba(26, 29, 34, 0.79) 106.25%
            ),
          url(${cover})
      `
      }"
    >
      <Heart :isFull="isLiked" />
      <Badge icon="trophy" label="Premium Recipe" />
    </div>
    <div class="prc__info">
      <div class="prc__header">
        {{ title }}
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
        <Macros :carbs="carbs" :protein="protein" :fat="fat" />
      </div>
    </div>
  </div>
</template>

<script>
import Heart from "@/components/Heart.vue";
import Badge from "@/components/Badge.vue";
import Ratings from "@/components/Ratings.vue";
import Duration from "@/components/Duration.vue";
import Energy from "@/components/Energy.vue";
import Macros from "@/components/Macros.vue";

export default {
  name: "PremiumRecipeCard",
  components: {
    Heart,
    Badge,
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
    isLiked: {
      type: Boolean,
      required: false
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
      this.$emit("didClick", "PremiumRecipeCard");
    }
  }
};
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

  &:hover .prc__coverImg {
    opacity: 0.8;
  }
}

.prc__coverImg {
  position: relative;
  width: 100%;
  height: 200px;
  background-size: cover;
  transition: opacity 0.3s;
}

.prc__info {
  height: 118px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 16px;
  background-color: #ffffff;
}

.prc__header {
  max-height: 40px;
  @include limitLines(2);
  margin-bottom: 12px;
  font-weight: bold;
  font-size: $font-lg;
  line-height: 20px;
  color: #0c0c0a;
  text-transform: capitalize;
  text-align: left;
}
</style>

<style lang="scss">
.prc {
  .heart {
    position: absolute;
    top: 16px;
    right: 16px;
  }

  .badge {
    position: absolute;
    bottom: 8px;
    left: 8px;
  }

  .ratings {
    margin-bottom: 5px;
  }

  .duration {
    margin-right: 16px;
  }
}
</style>
