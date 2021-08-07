<template>
  <div>
    <p>{{ message }}</p>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      isSaving: false,
      isIdle: true,
    };
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
