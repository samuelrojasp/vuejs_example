<template>
  <div class="quantities">
    <input
      type="number"
      v-model="quantity"
      class="input-quantity"
      v-on:keyup="initializeTimer"
    />
    <SavingLabel
      v-bind:is-saving="isSaving"
      v-bind:is-idle="isIdle"
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
      isIdle: true,
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
      this.isSaving = true;

      orders.saveOrder(this.quantity).then(() => {
        this.isSaving = false;
        this.isIdle = false;
        this.hideMessage();
      });
    },
    hideMessage: function () {
      setTimeout(() => {
        this.isIdle = true;
      }, 3000);
    },
  },
};
</script>
