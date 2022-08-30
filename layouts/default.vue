<template>
  <div class="default-layout">
    <NavBar></NavBar>

    <Nuxt></Nuxt>
  </div>
</template>

<script>
import NavBar from '~/components/NavBar'

export default {
  name: 'DefaultLayout',
  components: { NavBar }
}
</script>
