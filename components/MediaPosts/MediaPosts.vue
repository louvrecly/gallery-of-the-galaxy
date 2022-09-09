<template>
  <ul class="media-posts">
    <MediaPost
      v-for="(post, idx) in posts"
      :key="idx"
      class="post"
      :date="post.date"
      :url="post.url"
      :media-type="post.media_type"
      :title="post.title"
      :explanation="post.explanation"
      :copyright="post.copyright"
      :is-liked="isPostLiked(post.date)"
      @like="toggleLikePostAndSaveInCookies"
    />
  </ul>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  props: {
    posts: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    ...mapGetters({ likedPostDates: 'getLikePostDates' })
  },
  methods: {
    ...mapActions(['toggleLikePost']),
    isPostLiked (date) {
      return this.likedPostDates.includes(date)
    },
    toggleLikePostAndSaveInCookies ({ date, like }) {
      this.toggleLikePost({ date, like })
      this.$cookies.set('liked-post-dates', this.likedPostDates)
    }
  }
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
    @media #{$medium-up}
      width: 460px
      height: fit-content

    &:not(:last-of-type)
      margin: 0 0 50px

      @media #{$tablets-up}
        margin: 0 0 100px
</style>
