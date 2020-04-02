import { withKnobs, number } from "@storybook/addon-knobs";
import Macros from "../src/components/Macros.vue";

export default {
  title: "Macros",
  component: Macros,
  decorators: [withKnobs],
  parameters: {
    backgrounds: [{ name: "white", value: "#ffffff" }]
  }
};

export const Default = () => ({
  components: { Macros },
  props: {
    carbs: {
      default: number("carbs", 27, {}, "macros")
    },
    protein: {
      default: number("protein", 45, {}, "macros")
    },
    fat: {
      default: number("fat", 32, {}, "macros")
    }
  },
  template: `
    <Macros
      :carbs="carbs"
      :protein="protein"
      :fat="fat"
    />
  `
});
