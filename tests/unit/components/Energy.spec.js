import { shallowMount } from "@vue/test-utils";
import Energy from "@/components/Energy.vue";

describe("Energy.vue", () => {
  it("component does render", () => {
    const wrapper = shallowMount(Energy, { propsData: { calories: 500 } });
    expect(wrapper.attributes("class")).toBe("energy");
    expect(wrapper.find(".energy__icon").exists()).toBe(true);
    expect(wrapper.find(".energy__formatted").exists()).toBe(true);
  });

  describe("compute energy units in calories, kilojoules", () => {
    const cases = [
      [0, "calories", "0 Calories"],
      [100, "calories", "100 Calories"],
      [498.9789, "calories", "499 Calories"],
      [1374.23344, "calories", "1,374 Calories"],
      [42089.23, "calories", "42,089 Calories"],
      [0, "kilojoules", "0 Kilojoules"],
      [100, "kilojoules", "418 Kilojoules"],
      [498.9789, "kilojoules", "2,088 Kilojoules"],
      [1374.23344, "kilojoules", "5,750 Kilojoules"],
      [42089.23, "kilojoules", "176,101 Kilojoules"]
    ];
    test.each(cases)(
      "given %p and %p, returns %p",
      (calories, unitType, expectedResult) => {
        const wrapper = shallowMount(Energy, {
          propsData: {
            calories,
            unitType
          }
        });
        expect(wrapper.vm.formattedEnergy).toBe(expectedResult);
      }
    );
  });
});
