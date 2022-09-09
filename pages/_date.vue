<template>
  <div class="post-page">
    <div class="header">
      <IconButton class="close" icon-name="rocket" icon-type="fas" @click="navigateToHome" />
    </div>

    <MediaComponent class="media" :url="post.hdurl" :media-type="post.media_type" :title="post.title" />

    <div class="canvas">
      <MediaPostContent
        :date="post.date"
        :title="post.title"
        :explanation="post.explanation"
        :copyright="post.copyright"
        :is-liked="isPostLiked(post.date)"
        @like="toggleLike"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { validateDateString } from '~/utils/nasaHelper'

export default {
  layout: 'post',
  async asyncData ({ store, redirect, route: { params }, $config: { nasaApiKey } }) {
    if (!params || !params.date || !validateDateString(params.date)) return redirect(301, { name: 'index' })
    const post = await store.dispatch('loadPost', { date: params.date, nasaApiKey })
    return { post }
  },
  computed: {
    ...mapGetters({ likedPostDates: 'getLikePostDates' })
  },
  methods: {
    ...mapActions(['toggleLikePost']),
    isPostLiked (date) {
      return this.likedPostDates.includes(date)
    },
    toggleLike(like) {
      this.toggleLikePostAndSaveInCookies({ date: this.post.date, like: !like })
    },
    toggleLikePostAndSaveInCookies ({ date, like }) {
      this.toggleLikePost({ date, like })
      this.$cookies.set('liked-post-dates', this.likedPostDates)
    },
    navigateToHome () {
      return this.$router.push({ name: 'index' })
    }
  }
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

  .header
    padding: 20px 30px
    width: 100%
    position: fixed
    top: 0
    background-image: linear-gradient(#00000055, #00000000)
    opacity: 0
    transition: opacity .7s ease

    &:hover
      opacity: 1

    .close
      color: gold
      float: right

  .media
    height: 100%
    max-width: 100%

  .canvas
    width: 100%
    background-image: linear-gradient(#00000000, #000000FF)
    position: fixed
    bottom: 0
    opacity: 0
    transition: opacity .7s ease

    &:hover
      opacity: 1
</style>
