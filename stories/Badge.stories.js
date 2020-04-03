import { withKnobs, select, text } from "@storybook/addon-knobs";
import Badge from "../src/components/Badge.vue";

export default {
  title: "Badge",
  component: Badge,
  decorators: [withKnobs]
};

export const Default = () => ({
  components: { Badge },
  props: {
    icon: {
      default: select(
        "icon",
        {
          trophy: "trophy",
          star: "star-full",
          clock: "clock",
          none: null
        },
        "trophy",
        "badge"
      )
    },
    label: {
      default: text("label", "Recipe of the Day", "badge")
    }
  },
  template: `
    <Badge
      :icon="icon"
      :label="label"
    />
  `
});
