import { shallowMount } from '@vue/test-utils'
import Duration from '@/components/Duration.vue'

describe('Duration.vue', () => {

  it('component does render', () => {
    const wrapper = shallowMount(Duration, { propsData: { duration: 75 } })
    expect(wrapper.attributes('class')).toBe('duration')
    expect(wrapper.find('.duration__icon').exists()).toBe(true)
    expect(wrapper.find('.duration__formatted').exists()).toBe(true)
  })

  it('can toggle icon off', () => {
    const wrapper = shallowMount(Duration, {
      propsData: {
        duration: 75,
        displayIcon: false
      }
    })
    expect(wrapper.find('.duration__icon').exists()).toBe(false)
  })

  describe('compute formatted duration from minutes', () => {
    const cases = [
      [0, '0 min'],
      [45.234, '45 min'],
      [45.534, '46 min'],
      [60, '1 hr 0 min'],
      [125.23, '2 hr 5 min'],
      [125.83, '2 hr 6 min'],
      [9999.3, '166 hr 39 min']
    ];
    test.each(cases)("given %p, returns %p", (duration, expectedResult) => {
      const wrapper = shallowMount(Duration, { propsData: { duration }})
      expect(wrapper.vm.formattedDuration).toBe(expectedResult)
    });
  })
})
