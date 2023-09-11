<template>
  <div class="default-layout">
    <GalaxyBackground class="galaxy-background" />

    <NavBar class="nav-bar" />

    <Nuxt class="nuxt" />
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
}
</script>

<style lang="sass" scoped>
.default-layout,
.nuxt
  position: relative

.galaxy-background
  position: fixed
  inset: 0

.nav-bar
  position: fixed
  inset: 0 0 auto
  z-index: 10
</style>
