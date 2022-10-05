<template>
  <div class="shelving-filter">
    <FormWrapper label="Сортировать по:" style="width: 288px">
      <VSelect
        :options="['По возрастанию', 'По убыванию']"
        @input="(e) => $emit('update-sort', e)"
      />
    </FormWrapper>
    <FormWrapper label="Материал" style="width: 288px">
      <VSelect
        label="name"
        :options="materials"
        :reduce="(option) => option.id"
        @input="(e) => $emit('update-material', e)"
      />
    </FormWrapper>
  </div>
</template>

<script>
import FormWrapper from '~/layout/FormWrapper.vue'
import materials from '~/static/materials.json'

export default {
  components: { FormWrapper },
  data() {
    return {
      materials,
    }
  },
}
</script>

<style lang="scss" scoped>
.shelving-filter {
  display: flex;
  gap: 24px;
}
</style>
