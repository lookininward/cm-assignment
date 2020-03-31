import { withKnobs, boolean, number } from "@storybook/addon-knobs";
import Duration from "../src/components/Duration.vue";

export default {
  title: "Duration",
  component: Duration,
  decorators: [withKnobs]
};

export const Default = () => ({
  components: { Duration },
   props: {
    displayIcon: {
      default: boolean('display icon?', true, 'duration-controls')
    },
    duration: {
      default: number('duration', 86, {}, 'duration-controls')
    },
  },
  template: `
    <Duration
      :duration="duration"
      :displayIcon="displayIcon"
    />
  `
});
