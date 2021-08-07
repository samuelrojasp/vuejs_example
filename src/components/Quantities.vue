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
  mounted: function () {
    this.setTimer();
  },
  methods: {
    setTimer: function () {
      this.idleTimer = setInterval(this.checkInterval, 1000);
    },
    resetTimer: function () {
      this.keyStrokes++;
      clearInterval(this.idleTimer);
      this.idleTime = 0;
      this.setTimer();
    },
    checkInterval: function () {
      if (this.idleTime === 2 && this.keyStrokes > 0) {
        this.autoSave();
      }

      if (this.idleTime === 5) {
        this.hideMessage();
      }

      this.idleTime++;
    },
    autoSave: function () {
      this.isSaving = true;

      setTimeout(() => {
        this.isSaving = false;
        this.isIdle = false;
      }, 1000);
    },
    hideMessage: function () {
      this.isIdle = true;
    },
  },
};
</script>
