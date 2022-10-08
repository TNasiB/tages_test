<template>
  <div class="card-wrapper">
    <div v-if="saleEnabled" class="card-wrapper__sale-label">Скидка</div>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    saleEnabled: { type: Boolean, default: false },
  },
}
</script>

<style lang="scss" scoped>
.card-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  border: 1px solid #eeeeee;
  padding: 10px;
  position: relative;
  box-shadow: 0px 0px 0px 0px transparent;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0px 0px 20px -10px rgb(0 0 0 / 25%);
  }

  &__sale-label {
    background-color: #eb5757;
    color: #fff;
    padding: 3px 16px;
    left: 0;
    position: absolute;
    font-family: 'SFPRODISPLAY Medium';
    font-size: 14px;
  }
}
</style>
