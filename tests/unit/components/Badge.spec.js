import { shallowMount } from "@vue/test-utils";
import Badge from "@/components/Badge.vue";

describe("Badge.vue", () => {
  it("component does render", () => {
    const wrapper = shallowMount(Badge, {
      propsData: {
        label: "anonymous"
      }
    });
    expect(wrapper.attributes("class")).toBe("badge");
    expect(wrapper.find(".badge__icon").exists()).toBe(false);
    expect(wrapper.find(".badge__label").text()).toBe("anonymous");
  });

  it("display icon if passed", () => {
    const wrapper = shallowMount(Badge, {
      propsData: {
        icon: "clock",
        label: "anonymous"
      }
    });
    expect(wrapper.find(".badge__icon").exists()).toBe(true);
  });
});
