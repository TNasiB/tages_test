<template>
  <section class="shelving-system-kit">
    <div class="shelving-system-kit__breadcrumbs">
      <span class="shelving-system-kit__breadcrumbs-item">Главная</span>
      <span>/</span>
      <span class="shelving-system-kit__breadcrumbs-item"
        >Системы хранения</span
      >
      <span>/</span>
      <span
        class="shelving-system-kit__breadcrumbs-item shelving-system-kit__breadcrumbs-item--active"
        >Комплекты стеллажных систем</span
      >
    </div>
    <h3 class="shelving-system-kit__title">Комплекты стеллажных систем</h3>
    <div class="shelving-system-kit__filter">
      <ShelvingFilter />
    </div>
    <div class="shelving-system-kit__wrapper">
      <CardWrapper
        v-for="card in filteredItems"
        :key="card.id"
        :saleEnabled="!!card.price.old_price"
        style="flex-grow: 1"
      >
        <ShelvingCard v-bind="card" />
      </CardWrapper>
    </div>
  </section>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import ShelvingCard from '~/components/ShelvingCard.vue'
import CardWrapper from '~/layout/CardWrapper.vue'
import ShelvingFilter from '~/components/ShelvingFilter.vue'

export default {
  components: {
    ShelvingCard,
    CardWrapper,
    ShelvingFilter,
  },
  created() {
    this.$store.dispatch('handleSortArray')
  },
  mounted() {
    this.$store.dispatch('handleParseLocalStorage')
  },
  computed: {
    ...mapState(['items']),
    ...mapGetters(['filteredItems']),
  },
}
</script>

<style lang="scss" scoped>
.shelving-system-kit {
  max-width: 1338px;
  margin: 0 auto;
  padding: 30px 15px 0;
  font-family: 'SFC UI Text Medium';

  &__breadcrumbs {
    display: flex;
    gap: 15px;
    font-size: 16px;
    color: #727783;
    flex-wrap: wrap;
  }

  &__breadcrumbs-item {
    cursor: pointer;
  }

  &__breadcrumbs-item--active {
    color: #000;
  }

  &__wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, auto));
    gap: 48px;
  }

  &__filter {
    padding: 30px 0 20px;
  }

  &__title {
    font-size: 36px;
    font-weight: 600;
    padding-top: 32px;
    font-family: 'SFPRODISPLAY Medium';
  }
}

@media screen and (max-width: 425px) {
  .shelving-system-kit {
    &__title {
      font-size: 25px;
    }

    &__breadcrumbs {
      font-size: 12px;
    }
  }
}
</style>
