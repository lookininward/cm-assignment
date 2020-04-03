import { shallowMount } from "@vue/test-utils";
import RecipeOfTheDay from "@/components/RecipeOfTheDay.vue";
import Ratings from "@/components/Ratings.vue";
import Duration from "@/components/Duration.vue";
import Energy from "@/components/Energy.vue";
import Macros from "@/components/Macros.vue";

describe("RecipeOfTheDay.vue", () => {
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
    const wrapper = shallowMount(RecipeOfTheDay, { propsData });
    expect(wrapper.attributes("class")).toBe("rotd");
    expect(wrapper.find(".rotd__coverImg").exists()).toBe(true);
    expect(wrapper.find(".rotd__info").exists()).toBe(true);
    expect(wrapper.find(".rotd__header").exists()).toBe(true);
    expect(wrapper.find(Ratings).exists()).toBe(true);
    expect(wrapper.find(Duration).exists()).toBe(true);
    expect(wrapper.find(Energy).exists()).toBe(true);
    expect(wrapper.find(Macros).exists()).toBe(true);
  });

  it("emit didClick event when component clicked", () => {
    const wrapper = shallowMount(RecipeOfTheDay, { propsData });
    wrapper.find(".rotd").trigger("click");
    expect(wrapper.emitted("didClick")).toHaveLength(1);
  });
});
