<template>
  <div class="quantities">
    <label for="quantity">Quantity: </label>
    <input
      name="quantity"
      type="number"
      v-model="quantity"
      class="input-quantity"
      v-on:keyup="initializeTimer"
      min="0"
    />
    <SavingLabel
      v-bind:is-saving="isSaving"
      v-bind:is-hidden="labelIsHidden"
    ></SavingLabel>
  </div>
</template>
<script>
import orders from "@/api/orders";
import SavingLabel from "@/components/SavingLabel";
import SaveTimer from "@/services/timer";

export default {
  data: function () {
    return {
      quantity: 0,
      isSaving: false,
      labelIsHidden: true,
      timer: {},
      excludedKeys: [38, 39, 27, 17, 18, 91, 16, 93],
    };
  },
  components: {
    SavingLabel,
  },
  created: function () {
    this.timer = new SaveTimer({
      interval: 1000,
      autoSaveAfter: 2,
      autoSaveCallback: this.autoSave,
    });
  },
  methods: {
    initializeTimer: function (e) {
      this.labelIsHidden = true;
      if (!this.isInExcludedKeys(e.keycode)) {
        this.timer.initializeTimer();
      }
    },
    autoSave: function () {
      this.labelIsHidden = false;
      this.isSaving = true;
      if (this.quantity === "") this.quantity = 0;

      orders.saveOrder(this.quantity).then(() => {
        this.isSaving = false;
        this.hideMessage();
      });
    },
    hideMessage: function () {
      setTimeout(() => {
        this.labelIsHidden = true;
      }, 3000);
    },
    isInExcludedKeys(keycode) {
      return this.excludedKeys.includes(keycode);
    },
  },
};
</script>
