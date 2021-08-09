import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import SavingLabel from "@/components/SavingLabel.vue";

let wrapper = null;

beforeEach(() => {
  wrapper = shallowMount(SavingLabel);
});

afterEach(() => {
  wrapper.destroy();
});

describe("Messages shown according to states", () => {
  it("shows auto saving message when is in saving state", async () => {
    const message = wrapper.find("p");
    await wrapper.setProps({ isSaving: true });

    expect(message.text()).to.contain("Auto-saving");
  });

  it("shows saved message when the data was saved", async () => {
    const message = wrapper.find("p");
    await wrapper.setProps({ isSaving: false, isHidden: false });

    expect(message.text()).to.contain("Saved");
  });

  it("hides any messages when the state is hidden", async () => {
    const message = wrapper.find("p");
    await wrapper.setProps({ isSaving: false, isHidden: true });

    expect(message.isVisible()).to.be.false;
  });
});
