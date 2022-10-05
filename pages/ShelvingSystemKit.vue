<template>
  <div class="shelving-system-kit">
    <NuxtLink to="/">Главная</NuxtLink>
    <h3>Комплекты стеллажных систем</h3>
    <div class="shelving-system-kit__wrapper">
      <ShelvingCard v-for="card in 10" />
    </div>
  </div>
</template>

<script>
import ShelvingCard from '~/components/ShelvingCard.vue'
export default { components: { ShelvingCard } }
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
