import { withKnobs, number, select, boolean } from "@storybook/addon-knobs";
import Energy from "../src/components/Energy.vue";

export default {
  title: "Energy",
  component: Energy,
  decorators: [withKnobs],
  parameters: {
    backgrounds: [{ name: "white", value: "#ffffff" }]
  }
};

export const Default = () => ({
  components: { Energy },
  props: {
    calories: {
      default: number("calories", 1180, {}, "energy")
    },
    energyUnits: {
      default: select(
        "unit type",
        ["calories", "kilojoules"],
        "kilojoules",
        "energy"
      )
    },
    duration: {
      default: number("duration", 10, {}, "energy")
    },
    displayIcon: {
      default: boolean("display icon", true, "energy")
    }
  },
  template: `
    <Energy
      :calories="calories"
      :unitType="energyUnits"
      :duration="duration"
      :displayIcon="displayIcon"
    />
  `
});
