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
    this.timer = new SaveTimer(1000, 2, this.autoSave, 3000);
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
      });

      setTimeout(this.hideMessage, 3000);
    },
    hideMessage: function () {
      this.isIdle = true;
    },
  },
};
</script>
