<template>
  <div class="card card-body h-100">

    <p class="lead">Object</p>
    <Checkbox label="Invert" />
    <Checkbox label="Bevel" />
    <Input label="Height" />
    <Input label="Width" />

    <hr>
    <p class="lead">Platform</p>
    <Checkbox label="Enabled" />
    <Range label="Height" />
    <Range label="Buffer" />

    <hr>
    <p class="lead">Download</p>
    <Download />
  </div>
</template>

<script>
import Input from './Input'
import Range from './Range'
import Checkbox from './Checkbox'
import Download from './Download'
export default {
  name: 'Controls',
  components: {
    Checkbox,
    Input,
    Range,
    Download
  }
}
</script>

<style lang="css" scoped>
</style>
