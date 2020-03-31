import { withKnobs, number } from "@storybook/addon-knobs";
import Macros from "../src/components/Macros.vue";

export default {
  title: "Macros",
  component: Macros,
  decorators: [withKnobs]
};

export const Default = () => ({
  components: { Macros },
   props: {
    carbs: {
      default: number('carbs', 27, {}, 'macros-controls')
    },
    protein: {
      default: number('protein', 45, {}, 'macros-controls')
    },
    fat: {
      default: number('fat', 32, {}, 'macros-controls')
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
