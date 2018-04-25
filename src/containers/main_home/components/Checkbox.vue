<template>
  <div class="row">
    <div class="col-sm-6">
      {{ label }}
    </div>
    <div class="col-sm-6">
      <input type="checkbox">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Checkbox',
  props: ['label']
}
</script>

<style lang="css" scoped>
</style>
