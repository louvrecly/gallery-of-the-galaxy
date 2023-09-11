<template>
  <div class="post-page">
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
  </div>
</template>

<script>
import useLikeTogglerMixin from '~/components/mixins/useLikeToggler'
import { validateDateString } from '~/utils/nasaHelper'

export default {
  mixins: [useLikeTogglerMixin],
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
    store.dispatch('setNavBarTranslucentState', true)
    return { post }
  },
  beforeDestroy() {
    this.$store.dispatch('setNavBarTranslucentState', false)
  },
}
</script>

<style lang="sass" scoped>
@import ~assets/css/components/section
@import ~assets/css/utils/media

.post-page
  min-height: 100vh
  display: flex
  justify-content: center
  align-items: center

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
