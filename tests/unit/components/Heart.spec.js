import { shallowMount } from "@vue/test-utils";
import Heart from "@/components/Heart.vue";

describe("Heart.vue", () => {
  it("component does render", () => {
    const wrapper = shallowMount(Heart);
    expect(wrapper.attributes("class")).toBe("heart heart--empty");
  });

  describe("compute heart fill", () => {
    const cases = [
      [true, "heart heart--full"],
      [false, "heart heart--empty"]
    ];
    test.each(cases)("given %p, returns %p", (isFull, expectedResult) => {
      const wrapper = shallowMount(Heart, {
        propsData: {
          isFull
        }
      });
      expect(wrapper.attributes("class")).toBe(expectedResult);
    });
  });
});
