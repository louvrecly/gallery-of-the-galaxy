<template>
  <div class="media-canvas" :style="{ backgroundImage }">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    angle: {
      type: String,
      default: '0deg'
    },
    startColor: {
      type: String,
      default: '#00000000'
    },
    endColor: {
      type: String,
      default: '#00000099'
    }
  },
  computed: {
    backgroundImage () {
      return `linear-gradient(${this.angle}, ${this.startColor}, ${this.endColor})`
    }
  }
}
</script>

<style lang="sass" scoped>
.media-canvas
  width: 100%
  opacity: 0
  transition: opacity .7s ease

  &:hover
    opacity: 1
</style>
