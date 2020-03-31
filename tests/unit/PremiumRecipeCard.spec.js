import { shallowMount } from '@vue/test-utils'
import PremiumRecipeCard from '@/components/PremiumRecipeCard.vue'

describe('PremiumRecipeCard.vue', () => {

  it('component does render', () => {
    const wrapper = shallowMount(PremiumRecipeCard, {
      propsData: {
        cover: 'images/recipe-cover.png',
        title: 'delicious chicken dinner',
        calories: 500,
        ratings: [5],
        duration: 75,
        carbs: 20,
        protein: 16,
        fat: 6
      }
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
    expect(wrapper.find('.prc__energy').exists()).toBe(true)
    expect(wrapper.find('.prc__macros').exists()).toBe(true)
  })

  it('emit didClick event when component clicked', () => {
    const wrapper = shallowMount(PremiumRecipeCard, {
      propsData: {
        cover: 'images/recipe-cover.png',
        title: 'delicious chicken dinner',
        calories: 500,
        ratings: [5],
        duration: 75,
        carbs: 20,
        protein: 16,
        fat: 6
      }
    })
    wrapper.find('.prc').trigger('click')
    expect(wrapper.emitted('didClick')).toHaveLength(1)
  })

  describe('compute heart fill', () => {
    const cases = [
      [true, 'full'],
      [false, 'empty']
    ]
    test.each(cases)(
      "given %p, returns %p",
      (isFavorite, expectedResult) => {
        const wrapper = shallowMount(PremiumRecipeCard, {
          propsData: {
            cover: 'images/recipe-cover.png',
            title: 'delicious chicken dinner',
            calories: 500,
            ratings: [5],
            duration: 75,
            isFavorite,
            carbs: 20,
            protein: 16,
            fat: 6
          }
        })
        const heart = wrapper.find('[data-test-heart]')
        expect(heart.attributes()['data-test-heart']).toBe(expectedResult)
      }
    );
  })

  describe('compute energy units in calories, kilojoules', () => {
    const cases = [
      [0, 'calories', 28, '0 Calories'],
      [100, 'calories', 28, '100 Calories'],
      [498.9789, 'calories', 28, '499 Calories'],
      [1374.23344, 'calories', 28, '1,374 Calories'],
      [42089.23, 'calories', 28, '42,089 Calories'],
      [0, 'kilojoules', 28, '0 Kilojoules'],
      [100, 'kilojoules', 28, '418 Kilojoules'],
      [498.9789, 'kilojoules', 28, '2,088 Kilojoules'],
      [1374.23344, 'kilojoules', 28, '5,750 Kilojoules'],
      [42089.23, 'kilojoules', 28, '176,101 Kilojoules'],
      [498.9789, 'calories', 5000, '499 Cal'],
      [1374.23344, 'kilojoules', 118, '5,750 Kj']
    ];
    test.each(cases)(
      "given %p and %p, returns %p",
      (calories, energyUnits, duration, expectedResult) => {
        const wrapper = shallowMount(PremiumRecipeCard, {
          propsData: {
            cover: 'images/recipe-cover.png',
            title: 'delicious chicken dinner',
            calories,
            energyUnits,
            duration,
            ratings: [5],
            carbs: 20,
            protein: 16,
            fat: 6
          }
        })
        expect(wrapper.vm.energy).toBe(expectedResult)
      }
    );
  })

  describe('compute average rating from ratings', () => {
    const cases = [
      [[0], 0],
      [[0, 0.5], 0.25],
      [[0, 0.5, 1], 0.5],
      [[0, 0.5, 1, 1.5], 0.75],
      [[0, 0.5, 1, 1.5, 2], 1],
      [[0, 0.5, 1, 1.5, 2, 2.5], 1.25],
      [[0, 0.5, 1, 1.5, 2, 2.5, 3], 1.5],
      [[0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], 1.75],
      [[0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4], 2],
      [[0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5], 2.25],
      [[0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5], 2.5],
      [[0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5], 2.7083333333333335]
    ];
    test.each(cases)(
      "given %p, returns %p",
      (ratings, expectedResult) => {
        const wrapper = shallowMount(PremiumRecipeCard, {
          propsData: {
            cover: 'images/recipe-cover.png',
            title: 'delicious chicken dinner',
            calories: 500,
            ratings,
            duration: 75,
            carbs: 20,
            protein: 16,
            fat: 6
          }
        })
        expect(
          wrapper.vm.getAverage(ratings)
        ).toStrictEqual(expectedResult)
      }
    );
  })

  describe('compute stars from ratings', () => {
    const cases = [
      [[0],['e','e','e','e','e']],
      [[0.5],['h','e','e','e','e']],
      [[1],['f','e','e','e','e']],
      [[1.5],['f','h','e','e','e']],
      [[2.0],['f','f','e','e','e']],
      [[2.5],['f','f','h','e','e']],
      [[3],['f','f','f','e','e']],
      [[3.5],['f','f','f','h','e']],
      [[4],['f', 'f', 'f', 'f', 'e']],
      [[4.5],['f','f','f','f','h']],
      [[5],['f','f','f','f','f']],
      [[0,0.5],['h','e','e','e','e']],
      [[0,0.5,1],['h','e','e','e','e']],
      [[0,0.5,1,1.5],['h','e','e','e','e']],
      [[0,0.5,1,1.5,2],['f','e','e','e','e']],
      [[0,0.5,1,1.5,2,2.5],['f','h','e','e','e']],
      [[0,0.5,1,1.5,2,2.5,3],['f','h','e','e','e']],
      [[0,0.5,1,1.5,2,2.5,3,3.5],['f', 'h', 'e', 'e', 'e']],
      [[0,0.5,1,1.5,2,2.5,3,3.5, 4],['f', 'f', 'e', 'e', 'e']],
      [[0,0.5,1,1.5,2,2.5,3,3.5,4,4.5],['f','f','h','e','e']],
      [[0,0.5,1,1.5,2,2.5,3,3.5,4,4.5,5],['f','f','h','e','e']],
      [[0,0.5,1,1.5,2,2.5,3,3.5,4,4.5,5,5],['f','f','h','e','e']
      ]
    ];
    test.each(cases)(
      "given %p, returns %p",
      (ratings, expectedResult) => {
        const wrapper = shallowMount(PremiumRecipeCard, {
          propsData: {
            cover: 'images/recipe-cover.png',
            title: 'delicious chicken dinner',
            calories: 500,
            ratings,
            duration: 75,
            carbs: 20,
            protein: 16,
            fat: 6
          }
        })
        expect(wrapper.vm.stars).toStrictEqual(expectedResult)
      }
    );
  })
})
