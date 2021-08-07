<template>
  <div class="quantities">
    <SavingLabel></SavingLabel>
    <input type="number" v-model="quantity" class="input-quantity" />
  </div>
</template>
<script>
import SavingLabel from "@/components/SavingLabel";
export default {
  data: function () {
    return {
      quantity: 0,
    };
  },
  components: {
    SavingLabel,
  },
};
</script>
