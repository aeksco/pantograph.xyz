
<template>
  <div id="app">
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'app',
  components: {
    Navbar
  },
  metaInfo: {
    title: 'Loading...',
    titleTemplate: 'pantograph.xyz - %s',
    htmlAttrs: {
      lang: 'en'
    }
  }

}
</script>

<style lang="sass">
  @import "./sass/vendor.sass"

  html
    height: 100%

  body
    height: 100%

  // TODO - remove this.
  // .container-fluid
    // height: 100%

  #app
    height: 100%
    width: 100%

</style>
