import { withKnobs, boolean } from "@storybook/addon-knobs";
import Heart from "../src/components/Heart.vue";

export default {
  title: "Heart",
  component: Heart,
  decorators: [withKnobs],
  parameters: {
    backgrounds: [{ name: "purple", value: "#3b5998", default: true }]
  }
};

export const Default = () => ({
  components: { Heart },
  props: {
    isLiked: {
      default: boolean("is full", true, "heart")
    }
  },
  template: `<Heart :isFull="isLiked"/>`
});
