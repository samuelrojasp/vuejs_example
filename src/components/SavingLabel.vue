<template>
  <div>
    <p v-show="!isHidden">{{ message }}</p>
  </div>
</template>
<script>
export default {
  props: {
    isSaving: Boolean,
    isHidden: Boolean,
  },
  computed: {
    message: function () {
      if (this.isSaving) return "Auto-saving";

      return "Saved";
    },
  },
};
</script>
