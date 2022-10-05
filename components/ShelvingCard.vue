<template>
  <div class="shelving-card">
    <div class="shelving-card__img">
      <img :src="resolvedImgUrl" :alt="image.url" />
    </div>
    <div class="shelving-card__info">
      <span class="shelving-card__info-atricle">{{ code }}</span>
      <p class="shelving-card__info-title">{{ name }}</p>
      <div class="shelving-card__footer">
        <div class="shelving-card__price-info">
          <span v-if="price.old_price" class="shelving-card__old-price"
            >{{ Math.floor(price.old_price) }}₽</span
          >
          <span class="shelving-card__price"
            >{{ Math.floor(price.current_price) }}₽</span
          >
        </div>
        <div class="shelving-card__actions">
          <IconButton><img src="../assets/cart.svg" /></IconButton>
          <IconButton><img src="../assets/heart.svg" /></IconButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconButton from '~/layout/IconButton.vue'

export default {
  components: { IconButton },
  props: {
    code: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Object, required: true },
    id: { type: String, required: true },
    image: { type: Object, required: true },
  },
  computed: {
    resolvedImgUrl() {
      return require(`../assets${this.image.url}`)
    },
  },
}
</script>

<style lang="scss" scoped>
.shelving-card {
  width: 100%;

  &__info {
    display: flex;
    flex-direction: column;
    width: 100%;
    font-size: 16px;
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

  &__info-title {
  }

  &__old-price {
    color: #888;
    position: relative;
  }

  &__old-price::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #888;
    top: 50%;
  }
}
</style>
