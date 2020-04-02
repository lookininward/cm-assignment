import { shallowMount } from "@vue/test-utils";
import PremiumRecipeCard from "@/components/PremiumRecipeCard.vue";

describe("PremiumRecipeCard.vue", () => {
  it("component does render", () => {
    const wrapper = shallowMount(PremiumRecipeCard, {
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
    expect(wrapper.attributes("class")).toBe("prc");
    expect(wrapper.find(".prc__cover").exists()).toBe(true);
    expect(wrapper.find(".prc__info").exists()).toBe(true);
    expect(wrapper.find(".prc__header").exists()).toBe(true);
  });

  it("emit didClick event when component clicked", () => {
    const wrapper = shallowMount(PremiumRecipeCard, {
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
    wrapper.find(".prc").trigger("click");
    expect(wrapper.emitted("didClick")).toHaveLength(1);
  });
});
