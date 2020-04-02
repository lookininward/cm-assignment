import { shallowMount } from "@vue/test-utils";
import Macros from "@/components/Macros.vue";

describe("Macros.vue", () => {
  it("component does render", () => {
    const wrapper = shallowMount(Macros, {
      propsData: {
        carbs: 5,
        protein: 10,
        fat: 17
      }
    });
    expect(wrapper.attributes("class")).toBe("macros");
    expect(wrapper.find(".macro--carbs").exists()).toBe(true);
    expect(wrapper.find(".macro--protein").exists()).toBe(true);
    expect(wrapper.find(".macro--fat").exists()).toBe(true);
    expect(wrapper.find(".macro--carbs .macro__amount").text()).toBe("5g");
    expect(wrapper.find(".macro--protein .macro__amount").text()).toBe("10g");
    expect(wrapper.find(".macro--fat .macro__amount").text()).toBe("17g");
  });
});
