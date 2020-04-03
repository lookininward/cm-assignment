import { action } from "@storybook/addon-actions";
import { withKnobs, text, number, select } from "@storybook/addon-knobs";
import RecipeOfTheDay from "../src/components/RecipeOfTheDay.vue";
import App from "../src/App.vue";
import cover1 from "../public/images/recipe-cover.png";
import cover2 from "../public/images/pokebowl-cover.jpg";
import cover3 from "../public/images/italian-cover.png";
import cover4 from "../public/images/tacos-cover.png";
import cover5 from "../public/images/noodles-cover.png";

export default {
  title: "RecipeOfTheDay",
  component: RecipeOfTheDay,
  decorators: [withKnobs],
  parameters: {
    backgrounds: [{ name: "white", value: "#ffffff" }]
  }
};

export const Default = () => ({
  components: { App, RecipeOfTheDay },
  props: {
    cover: {
      default: select(
        "images",
        [cover1, cover2, cover3, cover4, cover5],
        cover4,
        "rotd"
      )
    },
    title: {
      default: text(
        "title",
        "Traditional home-made ground turkey tacos",
        "rotd"
      )
    },
    calories: {
      default: number("calories", 1180, {}, "rotd")
    },
    energyUnits: {
      default: select(
        "energyUnits",
        ["calories", "kilojoules"],
        "calories",
        "rotd"
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
          five: [5]
        },
        [...Array(1)].map(() => 4),
        "rotd"
      )
    },
    duration: {
      default: number("duration", 32, {}, "rotd")
    },
    carbs: {
      default: number("carbs", 24, {}, "rotd")
    },
    protein: {
      default: number("protein", 20, {}, "rotd")
    },
    fat: {
      default: number("fat", 14, {}, "rotd")
    }
  },
  template: `
    <RecipeOfTheDay
      :cover="cover"
      :title="title"
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
