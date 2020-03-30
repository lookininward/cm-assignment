import { action } from "@storybook/addon-actions";
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs";

import PremiumRecipeCard from "../src/components/PremiumRecipeCard.vue";

export default {
  title: "PremiumRecipeCard",
  component: PremiumRecipeCard,
  decorators: [withKnobs]
};

export const Default = () => ({
  components: { PremiumRecipeCard },
   props: {
    title: {
      default: text('title', 'Low Carb Thai Chicken Curry With Coconut Cauliflower Rice There are more things to come, ya hear!', 'prc-controls')
    },
    isFavorite: {
      default: boolean('is favorite?', false, 'prc-controls')
    },
    calories: {
      default: number('calories', 1180, {}, 'prc-controls')
    },
    energyUnits: {
      default: select(
        'energyUnits',
        ['calories', 'kilojoules'],
        'calories',
        'prc-controls'
      )
    },
    ratings: {
      default: select(
        'ratings',
        {
          zero: [0],
          half: [.5],
          one: [1],
          onehalf: [1.5],
          two: [2],
          twohalf: [2.5],
          three: [3],
          threehalf: [3.5],
          four: [4],
          fourhalf: [4.5],
          five: [5],
          manyRatings: [...Array(Math.floor(Math.random() * 10000))].map(
            () => Math.random() * 6
          ),
        },
        [3.5, 3.5, 3.5],
        'prc-controls'
      )
    },
    duration: {
      default: number('duration', 128, {}, 'prc-controls')
    }


  },
  template: `
    <PremiumRecipeCard
      :title="title"
      :isFavorite="isFavorite"
      :calories="calories"
      :energyUnits="energyUnits"
      :ratings="ratings"
      :duration="duration"
      @didClick="action('clicked component')"
    />
  `,
  methods: { action: action('didClick') }
});
