<template>
  <CardWrapper saleEnabled>
    <div class="shelving-card">
      <div class="shelving-card__img">
        <img src="../assets/testImg.png" alt="" />
      </div>
      <div class="shelving-card__info">
        <span class="shelving-card__info-atricle">L422WH</span>
        <p class="shelving-card__info-title">Ручка дверная</p>
        <div class="shelving-card__footer">
          <div class="shelving-card__price-info">
            <span class="shelving-card__old-price">350</span>
            <span class="shelving-card__price">350</span>
          </div>
          <div class="shelving-card__actions">
            <IconButton><img src="../assets/cart.svg" /></IconButton>
            <IconButton><img src="../assets/heart.svg" /></IconButton>
          </div>
        </div>
      </div>
    </div>
  </CardWrapper>
</template>

<script>
import IconButton from '~/layout/IconButton.vue'
import CardWrapper from '~/layout/CardWrapper.vue'

export default { components: { IconButton, CardWrapper } }
</script>

<style lang="scss" scoped>
.shelving-card {
  width: 100%;

  &__info {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  &__footer {
    display: flex;
    justify-content: space-between;
  }

  &__actions {
    display: flex;
    gap: 8px;
  }

  &__info-atricle {
    color: #888;
    font-size: 10px;
  }
}
</style>
