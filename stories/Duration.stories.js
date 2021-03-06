import { withKnobs, boolean, number } from "@storybook/addon-knobs";
import Duration from "../src/components/Duration.vue";

export default {
  title: "Duration",
  component: Duration,
  decorators: [withKnobs],
  parameters: {
    backgrounds: [{ name: "white", value: "#ffffff", default: true }]
  }
};

export const Default = () => ({
  components: { Duration },
  props: {
    displayIcon: {
      default: boolean("display icon", true, "duration")
    },
    duration: {
      default: number("duration", 86, {}, "duration")
    }
  },
  template: `
    <Duration
      :duration="duration"
      :displayIcon="displayIcon"
    />
  `
});
