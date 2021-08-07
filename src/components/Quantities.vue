<template>
  <div class="quantities">
    <SavingLabel
      v-bind:is-saving="isSaving"
      v-bind:is-idle="isIdle"
    ></SavingLabel>
    <input
      type="number"
      v-model="quantity"
      class="input-quantity"
      v-on:keyup="resetTimer"
    />
  </div>
</template>
<script>
import orders from "@/api/orders";
import SavingLabel from "@/components/SavingLabel";

export default {
  data: function () {
    return {
      quantity: 0,
      isSaving: false,
      isIdle: true,
      idleTime: 0,
      idleTimer: null,
      keyStrokes: 0,
    };
  },
  components: {
    SavingLabel,
  },
  methods: {
    setTimer: function () {
      this.idleTimer = setInterval(this.checkInterval, 1000);
    },
    resetTimer: function () {
      clearInterval(this.idleTimer);
      this.idleTime = 0;
      this.setTimer();
    },
    checkInterval: function () {
      if (this.idleTime === 2) {
        this.autoSave();
      }

      this.idleTime++;
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
