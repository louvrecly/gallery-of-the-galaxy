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

.media
  width: 100%
  border: none

  &.iframe,
  &.div
    height: 230px

    @media #{$tablets-up}
      height: 510px

    @media #{$medium-up}
      height: 770px

  &.div
    background-color: #222
    display: flex
    justify-content: center
    align-items: center

    &:before
      content: 'Invalid Media Type'
</style>