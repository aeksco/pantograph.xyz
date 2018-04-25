
<template>
  <div class="container-fluid">
    <div class="row h-100 align-items-center">
      <div class="col-lg-3 h-100">
        <Controls />
      </div>
      <div class="col-lg-9 ">
        <Renderer />
        <Uploader />
      </div>
    </div>
  </div>
</template>

<!-- // // // //  -->

<script>
import Controls from './components/Controls'
import Renderer from './components/Renderer'
import Uploader from './components/Uploader'
export default {
  name: 'main_home',
  metaInfo: {
    title: 'Main - Home'
  },
  components: {
    Controls,
    Renderer,
    Uploader
  }
}
</script>

<!-- // // // //  -->

<style lang="sass">
  img.welcome-logo
    height: 4rem
    width: 4rem

  .welcome-text
    letter-spacing: .6rem
    font-weight: 300
    font-size: 2rem
</style>
