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
      [0, "calories", 28, "0 Calories"],
      [100, "calories", 28, "100 Calories"],
      [498.9789, "calories", 28, "499 Calories"],
      [1374.23344, "calories", 28, "1,374 Calories"],
      [42089.23, "calories", 28, "42,089 Calories"],
      [0, "kilojoules", 28, "0 Kilojoules"],
      [100, "kilojoules", 28, "418 Kilojoules"],
      [498.9789, "kilojoules", 28, "2,088 Kilojoules"],
      [1374.23344, "kilojoules", 28, "5,750 Kilojoules"],
      [42089.23, "kilojoules", 28, "176,101 Kilojoules"],
      [498.9789, "calories", 5000, "499 Cal"],
      [1374.23344, "kilojoules", 118, "5,750 Kj"]
    ];
    test.each(cases)(
      "given %p and %p, returns %p",
      (calories, unitType, duration, expectedResult) => {
        const wrapper = shallowMount(Energy, {
          propsData: {
            calories,
            unitType,
            duration
          }
        });
        expect(wrapper.vm.formattedEnergy).toBe(expectedResult);
      }
    );
  });
});
