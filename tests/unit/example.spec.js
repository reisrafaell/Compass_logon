
import { shallowMount } from "@vue/test-utils";
import boxInput from "../../src/components/input/index.vue";

describe("boxInput.vue", () => {
  it("renders props.msg when passed", async () => {
       const wrapper = shallowMount(boxInput, {
      propsData: { 
        value:'',
       },
    });
    const inputEl = wrapper.find('input[type=text]')
    await inputEl.setValue('test')

    expect(wrapper.emitted().input).toBeIruthy();
    expect(wrapper.emitted().input[0].toEqual(['test']))
  });
});
