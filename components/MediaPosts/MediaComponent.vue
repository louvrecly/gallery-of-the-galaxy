<template>
  <div class="wrapper">
    <component
      :is="mediaComponent"
      class="media"
      :class="mediaComponent"
      v-bind="mediaProps"
    />
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true
    },
    mediaType: {
      type: String,
      required: true
    },
    title: {
      type: String,
      default: 'Missing Title'
    }
  },
  computed: {
    mediaComponent () {
      switch (this.mediaType) {
        case 'image':
          return 'img'
        case 'video':
          return 'iframe'
        default:
          return 'div'
      }
    },
    mediaProps () {
      switch (this.mediaType) {
        case 'image':
          return { src: this.url, alt: this.title }
        case 'video':
          return { src: this.url, title: this.title }
        default:
          return {}
      }
    }
  }
}
</script>

<style lang="sass" scoped>
@import ~assets/css/utils/media

.wrapper
  display: flex

  .media
    min-width: 100%
    min-height: 100%
    border: none

    &.iframe,
    &.div
      padding: 30px
      background-color: #222
      color: gold
      border-radius: 8px
      display: flex
      justify-content: center
      align-items: center
      transition: background-color .3s ease

      &::before
        content: 'Invalid Media Type'

      &:hover
        background-color: #202020
</style>