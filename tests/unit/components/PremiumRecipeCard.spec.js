import { shallowMount } from "@vue/test-utils";
import PremiumRecipeCard from "@/components/PremiumRecipeCard.vue";
import Heart from "@/components/Heart.vue";
import Badge from "@/components/Badge.vue";
import Ratings from "@/components/Ratings.vue";
import Duration from "@/components/Duration.vue";
import Energy from "@/components/Energy.vue";
import Macros from "@/components/Macros.vue";

describe("PremiumRecipeCard.vue", () => {
  const propsData = {
    cover: "images/recipe-cover.png",
    title: "delicious chicken dinner",
    calories: 500,
    ratings: [5],
    duration: 75,
    carbs: 20,
    protein: 16,
    fat: 6
  };

  it("component does render", () => {
    const wrapper = shallowMount(PremiumRecipeCard, { propsData });
    expect(wrapper.attributes("class")).toBe("prc");
    expect(wrapper.find(".prc__coverImg").exists()).toBe(true);
    expect(wrapper.find(".prc__info").exists()).toBe(true);
    expect(wrapper.find(".prc__header").exists()).toBe(true);
    expect(wrapper.find(Heart).exists()).toBe(true);
    expect(wrapper.find(Badge).exists()).toBe(true);
    expect(wrapper.find(Ratings).exists()).toBe(true);
    expect(wrapper.find(Duration).exists()).toBe(true);
    expect(wrapper.find(Energy).exists()).toBe(true);
    expect(wrapper.find(Macros).exists()).toBe(true);
  });

  it("emit didClick event when component clicked", () => {
    const wrapper = shallowMount(PremiumRecipeCard, { propsData });
    wrapper.find(".prc").trigger("click");
    expect(wrapper.emitted("didClick")).toHaveLength(1);
  });
});
