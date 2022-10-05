<template>
  <div class="shelving-system-kit">
    <NuxtLink to="/">Главная</NuxtLink>
    <h3>Комплекты стеллажных систем</h3>
    <ShelvingFilter
      @update-sort="(value) => (selectedSort = value)"
      @update-material="(value) => (selectedMaterial = +value)"
    />
    <div class="shelving-system-kit__wrapper">
      <CardWrapper
        v-for="card in sorteredArray"
        :key="card.id"
        :saleEnabled="!!card.price.old_price"
      >
        <ShelvingCard v-bind="card" />
      </CardWrapper>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ShelvingCard from '~/components/ShelvingCard.vue'
import CardWrapper from '~/layout/CardWrapper.vue'
import ShelvingFilter from '~/components/ShelvingFilter.vue'

export default {
  components: {
    ShelvingCard,
    CardWrapper,
    ShelvingFilter,
  },
  data() {
    return {
      selectedMaterial: null,
      selectedSort: null,
    }
  },
  computed: {
    ...mapState(['items']),
    sorteredArray() {
      if (this.selectedMaterial) {
        return this.items.filter(
          (item) => item.material === this.selectedMaterial
        )
      }
      return [...this.items].sort()
    },
  },
}
</script>

<style lang="scss" scoped>
.shelving-system-kit {
  max-width: 1338px;
  margin: 0 auto;
  padding: 0 15px;
  font-family: 'SFC UI Text Medium';

  &__wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 48px;
  }
}
</style>
