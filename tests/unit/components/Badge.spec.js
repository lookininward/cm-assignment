import { shallowMount } from "@vue/test-utils";
import Badge from "@/components/Badge.vue";

describe("Badge.vue", () => {
  it("component does render", () => {
    const wrapper = shallowMount(Badge, { propsData: { label: "anonymous" } });
    expect(wrapper.attributes("class")).toBe("badge");
    expect(wrapper.find(".badge__icon").exists()).toBe(false);
    expect(wrapper.find(".badge__label").text()).toBe("anonymous");
  });

  describe("compute display icon if passed", () => {
    const cases = [
      ["trophy", "path/icon/trophy.svg"],
      ["star", "path/icon/star.svg"],
      ["clock", "path/icon/clock.svg"]
    ];
    test.each(cases)("given %p, returns %p", (icon, expectedResult) => {
      const wrapper = shallowMount(Badge, {
        propsData: { icon, label: "xyz" },
        computed: {
          iconPath: jest.fn(() => `path/icon/${icon}.svg`)
        }
      });
      const iconWrapper = wrapper.find(".badge__icon");
      expect(iconWrapper.attributes("src")).toBe(expectedResult);
    });
  });
});
