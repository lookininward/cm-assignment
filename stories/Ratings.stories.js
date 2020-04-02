import { withKnobs, select } from "@storybook/addon-knobs";
import Ratings from "../src/components/Ratings.vue";

export default {
  title: "Ratings",
  component: Ratings,
  decorators: [withKnobs],
  parameters: {
    backgrounds: [{ name: "white", value: "#ffffff" }]
  }
};

export const Default = () => ({
  components: { Ratings },
  props: {
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
        "ratings-controls"
      )
    }
  },
  template: `<Ratings :ratings="ratings" />`
});
