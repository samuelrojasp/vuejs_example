import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import Quantities from "@/components/Quantities.vue";

let wrapper = null;

beforeEach(() => {
  wrapper = shallowMount(Quantities);
});

afterEach(() => {
  wrapper.destroy();
});

describe("Quantities field for orders page", () => {
  it("renders an input number", () => {
    const input = wrapper.findAll(".input-quantity");

    expect(input.length).to.equal(1);
  });

  it("modifies the prop when editing the number", async () => {
    const input = wrapper.find(".input-quantity");
    const quantity = "12";

    await input.setValue(quantity);

    expect(wrapper.vm.quantity).to.equal(quantity);
  });

  it("sets value as 0 when the quantity field is empty on auto-save", async () => {
    wrapper.vm.quantity = "";

    await wrapper.vm.autoSave();

    expect(wrapper.vm.quantity).to.equal(0);
  });
});
