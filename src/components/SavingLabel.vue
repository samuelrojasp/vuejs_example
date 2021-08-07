<template>
  <div>
    <p>{{ message }}</p>
  </div>
</template>
<script>
export default {
  props: {
    isSaving: Boolean,
    isIdle: Boolean,
  },
  computed: {
    message: function () {
      if (this.isSaving) {
        return "Auto saving...";
      }

      if (!this.isSaving && !this.isIdle) {
        return "Saved!";
      }

      return "";
    },
  },
};
</script>
