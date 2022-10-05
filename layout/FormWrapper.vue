<template>
  <div class="form-item-wrapper">
    <p class="form-item-wrapper__label">{{ label }}</p>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    label: { type: String, default: '' },
  },
}
</script>

<style lang="scss" scoped>
.form-item-wrapper {
  &__label {
    color: #4f4f4f;
    font-size: 12px;
    padding-left: 16px;
    line-height: 12px;
    margin-bottom: 6px;
  }
}
</style>
