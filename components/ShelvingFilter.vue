<template>
  <form class="shelving-filter">
    <FormWrapper label="Сортировать по:" style="width: 280px">
      <VSelect
        v-bind="vsAttrs"
        :options="[
          { label: 'По возрастанию', value: 1 },
          { label: 'По убыванию', value: 2 },
        ]"
        :reduce="({ value }) => value"
        :value="filterForm.order"
        @input="(order) => $store.dispatch('handleUpdateFilterForm', { order })"
      >
        <template #open-indicator="{ attributes }">
          <span v-bind="attributes">
            <img src="../assets/arrow.svg" alt="" />
          </span>
        </template>
      </VSelect>
    </FormWrapper>

    <FormWrapper label="Материал" style="width: 280px">
      <VSelect
        v-bind="vsAttrs"
        label="name"
        :options="materials"
        :value="filterForm.material"
        :reduce="({ id }) => id"
        @input="
          (material) => $store.dispatch('handleUpdateFilterForm', { material })
        "
        ><template #open-indicator="{ attributes }">
          <span v-bind="attributes">
            <img src="../assets/arrow.svg" alt="" />
          </span> </template
      ></VSelect>
    </FormWrapper>
  </form>
</template>

<script>
import { mapState } from 'vuex'
import FormWrapper from '~/layout/FormWrapper.vue'

export default {
  components: { FormWrapper },
  data() {
    return {
      vsAttrs: {
        style: '--vs-border-color: transparent; --vs-border-radius: 0',
        clearable: false,
        searchable: false,
      },
    }
  },
  computed: {
    ...mapState(['filterForm', 'materials']),
  },
  watch: {
    filterForm: {
      handler() {
        this.$store.dispatch('handleSortArray')
      },
      deep: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.shelving-filter {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;

  & ::v-deep .vs__dropdown-toggle {
    background-color: #f2f2f2;
    color: #000;
  }

  & ::v-deep .vs__selected {
    color: #000;
  }
}
</style>
