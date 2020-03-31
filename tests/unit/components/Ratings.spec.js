import { shallowMount } from '@vue/test-utils'
import Ratings from '@/components/Ratings.vue'

describe('Ratings.vue', () => {

  it('component does render', () => {
    const wrapper = shallowMount(Ratings, {
      propsData: {
        ratings: [...Array(200)].map(() => 3)
      }
    })
    expect(wrapper.attributes('class')).toBe('ratings')
    expect(wrapper.findAll('.ratings__star').length).toBe(5)
    expect(wrapper.find('.ratings__total').text()).toBe('200 ratings')
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
    test.each(cases)("given %p, returns %p", (ratings, expectedResult) => {
      const wrapper = shallowMount(Ratings, { propsData: { ratings } })
      expect(wrapper.vm.stars).toStrictEqual(expectedResult)
    });
  })
})
