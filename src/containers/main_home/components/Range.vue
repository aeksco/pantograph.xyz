<template>
  <div class="row">
    <div class="col-sm-6">
      {{ label }}
    </div>
    <div class="col-sm-6">
      <input class='form-control' type="range">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Range',
  props: ['label']
}
</script>

<style lang="css" scoped>
</style>
