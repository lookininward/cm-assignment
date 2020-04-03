import { shallowMount } from "@vue/test-utils";
import RecipeOfTheDay from "@/components/RecipeOfTheDay.vue";

describe("RecipeOfTheDay.vue", () => {
  it("component does render", () => {
    const wrapper = shallowMount(RecipeOfTheDay, {
      propsData: {
        cover: "images/recipe-cover.png",
        title: "delicious chicken dinner",
        calories: 500,
        ratings: [5],
        duration: 75,
        carbs: 20,
        protein: 16,
        fat: 6
      }
    });
    expect(wrapper.attributes("class")).toBe("rotd");
    expect(wrapper.find(".rotd__coverImg").exists()).toBe(true);
    expect(wrapper.find(".rotd__info").exists()).toBe(true);
    expect(wrapper.find(".rotd__header").exists()).toBe(true);
  });

  it("emit didClick event when component clicked", () => {
    const wrapper = shallowMount(RecipeOfTheDay, {
      propsData: {
        cover: "images/recipe-cover.png",
        title: "delicious chicken dinner",
        calories: 500,
        ratings: [5],
        duration: 75,
        carbs: 20,
        protein: 16,
        fat: 6
      }
    });
    wrapper.find(".rotd").trigger("click");
    expect(wrapper.emitted("didClick")).toHaveLength(1);
  });
});
