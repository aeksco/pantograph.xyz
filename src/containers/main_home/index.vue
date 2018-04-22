
<template>
  <div class="container-fluid">
    <div class="row h-100 align-items-center">
      <div class="col-lg-12">
        <div class="row my-4">
          <div class="col-lg-12 text-center"><img src="/static/icon_white.svg" class="welcome-logo"/></div>
        </div>
        <div class="row my-4">
          <div class="col-lg-12 text-center">
            <p class="welcome-text">WELCOME</p>
          </div>
        </div>
        <div class="row my-4">
          <div class="col-lg-12 text-center">
            <p class="lead"><a href="https://github.com/aeksco/pantograph.xyz" target="_blank">Pantograph.xyz</a> is an open-source platform for extruding STLs from simple 2D images.</p>
          </div>
        </div>
        <div class="row py-2">
          <div class="col-lg-12 text-center">
            <p class="lead">Drag and drop an image file to get started - pantograph.xyz does the rest.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- // // // //  -->

<script>
export default {
  name: 'main_home',
  metaInfo: {
    title: 'Main - Home'
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
