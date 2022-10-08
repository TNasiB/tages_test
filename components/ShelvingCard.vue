<template>
  <article class="shelving-card">
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
          <IconButton @click.native="dropToCart">
            <img src="../assets/cart.svg" v-if="!inCartList" />
            <img v-else src="../assets/circle-checked.svg"
          /></IconButton>
          <IconButton @click.native="dropToFavourite"
            ><svg
              width="22"
              height="22"
              fill="currentColor"
              :class="{
                'shelving-card__fav-icon--active': this.inFavouriteList,
              }"
            >
              <path
                d="M15.0979 2.00001C13.795 2 12.9551 2.15522 11.9924 2.62647C11.6359 2.80094 11.3015 3.01105 10.9909 3.25618C10.6923 3.0248 10.3713 2.82433 10.0296 2.65532C9.04816 2.1699 8.16523 2 6.90907 2C3.54477 2 1.09998 4.78754 1.09998 8.40789C1.09998 11.142 2.62442 13.7831 5.46393 16.3369C6.95438 17.6774 8.85737 19.004 10.2202 19.7097L11 20.1135L11.7797 19.7097C13.1426 19.004 15.0456 17.6774 16.536 16.3369C19.3755 13.7831 20.9 11.142 20.9 8.40789C20.9 4.82586 18.4321 2.01382 15.0979 2.00001ZM19.1 8.40793C19.1 10.5499 17.8276 12.7544 15.3324 14.9986C13.972 16.2221 12.2231 17.4449 11 18.0864C9.77695 17.4449 8.02806 16.2221 6.66767 14.9986C4.17246 12.7544 2.90002 10.5499 2.90002 8.40793C2.90002 5.73298 4.5953 3.80004 6.90911 3.80004C7.90787 3.80004 8.52333 3.91847 9.23164 4.2688C9.65002 4.47573 10.0198 4.74897 10.3399 5.09043L11.0021 5.79687L11.6583 5.08483C11.9856 4.72969 12.3608 4.45023 12.7837 4.24322C13.4713 3.90668 14.0483 3.80004 15.0942 3.80004C17.3794 3.80952 19.1 5.7701 19.1 8.40793Z"
                fill="currentColor"
              />
            </svg>
          </IconButton>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import { mapState } from 'vuex'
import IconButton from '~/layout/IconButton.vue'

export default {
  components: { IconButton },
  props: {
    code: { type: String, default: '' },
    name: { type: String, required: true },
    price: { type: Object, required: true },
    id: { type: String, required: true },
    image: { type: Object, required: true },
  },
  computed: {
    ...mapState(['favList', 'cartList']),
    resolvedImgUrl() {
      return require(`../assets${this.image.url}`)
    },
    inFavouriteList() {
      return this.favList.includes(String(this.id))
    },
    inCartList() {
      return this.cartList.includes(String(this.id))
    },
  },
  methods: {
    dropToFavourite() {
      // FIXME:Переписать
      const favList = localStorage.getItem('favourite')

      if (favList) {
        if (favList.includes(this.id))
          return this.$store.dispatch('handleRemoveFavList', this.id)

        this.$store.dispatch(
          'handleUpdateLocalStorage',
          JSON.stringify([...JSON.parse(favList), this.id])
        )

        this.$store.dispatch('handlePushFavList', this.id)
      } else {
        localStorage.setItem('favourite', JSON.stringify([this.id]))
      }
    },
    dropToCart() {
      this.inCartList
        ? this.$store.dispatch('handleRemoveCartItem', this.id)
        : this.$store.dispatch('handleAddCartItem', this.id)
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

  &__img {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__img img {
    max-width: 100%;
    max-height: 100%;
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

  &__fav-icon--active {
    color: red;
  }
}
</style>
