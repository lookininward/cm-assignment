import { action } from "@storybook/addon-actions";
import {
  withKnobs,
  text,
  boolean,
  number,
  select
} from "@storybook/addon-knobs";

import PremiumRecipeCard from "../src/components/PremiumRecipeCard.vue";
import App from "../src/App.vue";
import cover1 from "../public/images/recipe-cover.png";
import cover2 from "../public/images/pokebowl-cover.jpg";
import cover3 from "../public/images/italian-cover.png";
import cover4 from "../public/images/tacos-cover.png";

export default {
  title: "PremiumRecipeCard",
  component: PremiumRecipeCard,
  decorators: [withKnobs]
};

export const Default = () => ({
  components: { App, PremiumRecipeCard },
  props: {
    cover: {
      default: select(
        "images",
        [cover1, cover2, cover3, cover4],
        cover2,
        "prc-controls"
      )
    },
    title: {
      default: text(
        "title",
        "Salmon poke bowl with rice, edamame beans, avocado and radishes",
        "prc-controls"
      )
    },
    isLiked: {
      default: boolean("is favorite?", true, "prc-controls")
    },
    calories: {
      default: number("calories", 1180, {}, "prc-controls")
    },
    energyUnits: {
      default: select(
        "energyUnits",
        ["calories", "kilojoules"],
        "kilojoules",
        "prc-controls"
      )
    },
    ratings: {
      default: select(
        "ratings",
        {
          zero: [0],
          half: [0.5],
          one: [1],
          onehalf: [1.5],
          two: [2],
          twohalf: [2.5],
          three: [3],
          threehalf: [3.5],
          four: [4],
          fourhalf: [4.5],
          five: [5],
          manyRatings: [...Array(42084)].map(() => 4)
        },
        [...Array(37485)].map(() => 4.5),
        "prc-controls"
      )
    },
    duration: {
      default: number("duration", 18, {}, "prc-controls")
    },
    carbs: {
      default: number("carbs", 12, {}, "prc-controls")
    },
    protein: {
      default: number("protein", 19, {}, "prc-controls")
    },
    fat: {
      default: number("fat", 8, {}, "prc-controls")
    }
  },
  template: `
    <PremiumRecipeCard
      :cover="cover"
      :title="title"
      :isLiked="isLiked"
      :calories="calories"
      :energyUnits="energyUnits"
      :ratings="ratings"
      :duration="duration"
      :carbs="carbs"
      :protein="protein"
      :fat="fat"
      @didClick="action('clicked component')"
    />
  `,
  methods: { action: action("didClick") }
});
