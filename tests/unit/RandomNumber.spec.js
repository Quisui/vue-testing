import RandomNumber from "@/components/RandomNumber";
import { mount } from "@vue/test-utils";

describe("RandomNumber", () => {
  test("By default, randomNUmber data value should be 0", () => {
    const wrapper = mount(RandomNumber);
    expect(wrapper.html()).toContain("<span>0</span>");
  });
  test("oif button is clicked, randomNUmber data value should be between 1 and 10", async () => {
    const wrapper = mount(RandomNumber);
    wrapper.find("button").trigger("click");
    await wrapper.vm.$nextTick();
    const randomNUmber = parseInt(wrapper.find("span").element.textContent);
    expect(randomNUmber).toBeGreaterThanOrEqual(1);
    expect(randomNUmber).toBeLessThanOrEqual(10);
  });
  test("oif button is clicked, randomNUmber data value should be between 300 and 200", async () => {
    const wrapper = mount(RandomNumber, {
      propsData: {
        min: 200,
        max: 300,
      },
    });
    wrapper.find("button").trigger("click");
    await wrapper.vm.$nextTick();
    const randomNUmber = parseInt(wrapper.find("span").element.textContent);
    expect(randomNUmber).toBeGreaterThanOrEqual(200);
    expect(randomNUmber).toBeLessThanOrEqual(300);
  });
});
