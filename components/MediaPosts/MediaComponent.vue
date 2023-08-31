<template>
  <div class="wrapper">
    <Spinner v-if="busy" />

    <component
      :is="mediaComponent"
      v-else
      class="media"
      :class="mediaComponent"
      v-bind="mediaProps"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

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
    ...mapGetters({ busy: 'getBusyState' }),
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
  justify-content: center
  align-items: center

  .media
    // min-width: 100%
    // min-height: 100%
    max-width: 100%
    max-height: 100%
    border: none

    &.iframe
      // height: 100%
      width: 100%
      // height: auto
      aspect-ratio: 16 / 9

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