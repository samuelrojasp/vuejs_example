<template>
  <div class="quantities">
    <label for="quantity">Quantity: </label>
    <input
      name="quantity"
      type="number"
      v-model="quantity"
      class="input-quantity"
      v-on:keyup="initializeTimer"
    />
    <SavingLabel
      v-bind:is-saving="isSaving"
      v-bind:is-hidden="isHidden"
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
      isHidden: true,
      timer: {},
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
    initializeTimer: function () {
      this.timer.initializeTimer();
    },
    autoSave: function () {
      this.isHidden = false;
      this.isSaving = true;
      if (this.quantity === "") this.quantity = 0;

      orders.saveOrder(this.quantity).then(() => {
        this.isSaving = false;
        this.hideMessage();
      });
    },
    hideMessage: function () {
      setTimeout(() => {
        this.isHidden = true;
      }, 3000);
    },
  },
};
</script>
