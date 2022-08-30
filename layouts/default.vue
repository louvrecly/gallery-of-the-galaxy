<template>
  <div class="default-layout">
    <NavBar />

    <Nuxt />
  </div>
</template>

<script>
import NavBar from '~/components/NavBar'

export default {
  name: 'DefaultLayout',
  components: { NavBar }
}
</script>
