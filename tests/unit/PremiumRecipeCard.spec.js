import { shallowMount } from '@vue/test-utils'
import PremiumRecipeCard from '@/components/PremiumRecipeCard.vue'

describe('PremiumRecipeCard.vue', () => {

  it('component does render', () => {
    const wrapper = shallowMount(PremiumRecipeCard, {
      propsData: { calories: 500 }
    })
    expect(wrapper.attributes('class')).toBe('prc')

    // Cover
    expect(wrapper.find('.prc__cover').exists()).toBe(true)
    expect(wrapper.find('.prc__heart').exists()).toBe(true)
    expect(wrapper.find('.prc__tag').exists()).toBe(true)

    // Info
    expect(wrapper.find('.prc__info').exists()).toBe(true)
    expect(wrapper.find('.prc__header').exists()).toBe(true)
    expect(wrapper.find('.prc__ratings').exists()).toBe(true)
    expect(wrapper.find('.prc__duration').exists()).toBe(true)
    expect(wrapper.find('.prc__energy').exists()).toBe(true)
    expect(wrapper.find('.prc__macros').exists()).toBe(true)
  })

  describe('computes energy units in calories, kilojoules', () => {
    const cases = [
      [0, 'calories', '0 Calories'],
      [100, 'calories', '100 Calories'],
      [498.9789, 'calories', '499 Calories'],
      [1374.23344, 'calories', '1,374 Calories'],
      [42089.23, 'calories', '42,089 Calories'],
      [0, 'kilojoules', '0 Kilojoules'],
      [100, 'kilojoules', '418 Kilojoules'],
      [498.9789, 'kilojoules', '2,088 Kilojoules'],
      [1374.23344, 'kilojoules', '5,750 Kilojoules'],
      [42089.23, 'kilojoules', '176,101 Kilojoules']
    ];

    test.each(cases)(
      "given %p and %p, returns %p",
      (calories, energyUnits, expectedResult) => {
        const wrapper = shallowMount(PremiumRecipeCard, {
          propsData: {
            calories,
            energyUnits
          }
        })
        expect(wrapper.vm.energy).toBe(expectedResult)
      }
    );
  })
})
