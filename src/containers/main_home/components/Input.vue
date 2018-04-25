<template>
  <div class="row">
    <div class="col-sm-6">
      {{ label }}
    </div>
    <div class="col-sm-6">
      <input class='form-control' type="number">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: ['label']
}
</script>

<style lang="css" scoped>
</style>
