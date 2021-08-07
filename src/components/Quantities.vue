<template>
  <div class="quantities">
    <SavingLabel
      v-bind:is-saving="isSaving"
      v-bind:is-idle="isIdle"
    ></SavingLabel>
    <input type="number" v-model="quantity" class="input-quantity" />
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
    };
  },
  components: {
    SavingLabel,
  },
};
</script>
