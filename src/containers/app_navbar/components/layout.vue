<template>
  <b-navbar toggleable="md" type="dark" variant="dark" fixed="top">
    <b-navbar-brand href="#/">
      <img class='logo mr-3' src="/static/icon_white.svg">
      <strong>pantograph</strong>.xyz
    </b-navbar-brand>

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-collapse is-nav id="nav_collapse">

      <!-- Navbar Links -->
      <b-navbar-nav class="mr-auto">

        <!-- Public links -->
        <b-nav-item href="#/about">About</b-nav-item>

      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style lang="sass">

  nav.navbar
    border-bottom: 1px solid #fff

    .navbar-brand
      letter-spacing: .25rem !important
      font-family: sans-serif
      // text-transform: uppercase
      font-weight: 100
      letter-spacing: 0.1rem

      strong
        font-weight: 400

      img.logo
        float: left
        margin-right: 0.4rem
        height: 2rem
        display: flex

</style>
