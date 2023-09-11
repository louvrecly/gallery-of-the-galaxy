<template>
  <div class="media-posts">
    <MediaPost
      v-for="(post, idx) in posts"
      :key="idx"
      class="post"
      :date="post.date"
      :url="previewUrl(post)"
      media-type="image"
      :title="post.title"
      :explanation="post.explanation"
      :copyright="post.copyright"
      :is-liked="isPostLiked(post.date)"
      @like="toggleLikePostAndSaveInCookies"
    />
  </div>
</template>

<script>
import useLikeTogglerMixin from '~/components/mixins/useLikeToggler'

export default {
  mixins: [useLikeTogglerMixin],
  props: {
    posts: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    previewUrl(post) {
      return post.media_type === 'image' ? post.url : post.thumbnail_url
    },
  },
}
</script>

<style lang="sass" scoped>
@import ~assets/css/utils/media

.media-posts
  @media #{$medium-up}
    display: flex
    justify-content: space-between
    flex-wrap: wrap

  .post
    border-radius: 8px
    box-shadow: 0 5px 10px rgba(#000, 0.3)
    overflow: hidden
    transition: transform .3s ease
    transform-origin: top center

    &:hover
      transform: scale(1.05)

    @media #{$medium-up}
      width: 460px
      height: fit-content

    &:not(:last-of-type)
      margin: 0 0 50px

      @media #{$tablets-up}
        margin: 0 0 100px
</style>
