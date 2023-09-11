<template>
  <div class="post-page">
    <GalaxyBackground class="galaxy-background" />

    <MediaPost
      class="post"
      :class="post.media_type"
      :date="post.date"
      :url="post.hdurl ?? post.url"
      :media-type="post.media_type"
      :title="post.title"
      :explanation="post.explanation"
      :copyright="post.copyright"
      :is-liked="isPostLiked(post.date)"
      is-canvas-fixed
      @like="toggleLikePostAndSaveInCookies"
    />

    <MediaCanvas class="canvas top">
      <IconButton
        class="close"
        icon-name="rocket"
        icon-type="fas"
        @click="navigateToHome"
      />
    </MediaCanvas>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { validateDateString } from '~/utils/nasaHelper'

export default {
  layout: 'post',
  async asyncData({
    store,
    redirect,
    route: { params },
    $config: { nasaApiKey },
  }) {
    if (!params || !params.date || !validateDateString(params.date))
      return redirect(301, { name: 'index' })
    const post = await store.dispatch('loadPost', {
      date: params.date,
      nasaApiKey,
    })
    if (!post) return redirect(301, { name: 'index' })
    return { post }
  },
  computed: {
    ...mapGetters({ likedPostDates: 'getLikePostDates' }),
  },
  methods: {
    ...mapActions(['toggleLikePost']),
    isPostLiked(date) {
      return this.likedPostDates.includes(date)
    },
    toggleLike(like) {
      this.toggleLikePostAndSaveInCookies({ date: this.post.date, like: !like })
    },
    toggleLikePostAndSaveInCookies({ date, like }) {
      this.toggleLikePost({ date, like })
      this.$cookies.set('liked-post-dates', this.likedPostDates)
    },
    navigateToHome() {
      return this.$router.push({ name: 'index' })
    },
  },
}
</script>

<style lang="sass" scoped>
@import ~assets/css/components/section
@import ~assets/css/utils/media

.post-page
  min-height: 100vh
  background-image: $background-gradient
  display: flex
  justify-content: center
  align-items: center
  position: relative

  .galaxy-background
    width: 100%
    height: 100%
    position: fixed

  .post
    box-shadow: 0 5px 10px rgba(#000, 0.3)

    &.video
      width: 100%
      aspect-ratio: 4 / 3

  .canvas
    position: fixed

    &.top
      top: 0

    .close
      margin: 20px
      color: gold
      float: right
</style>
