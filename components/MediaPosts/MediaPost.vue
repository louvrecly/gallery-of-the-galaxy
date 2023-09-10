<template>
  <div class="media-post">
    <NuxtLink class="link" :class="mediaType" :to="postLink">
      <MediaComponent :url="url" :media-type="mediaType" :title="title" />
    </NuxtLink>

    <MediaCanvas class="canvas bottom" :class="{ fixed: isCanvasFixed }" angle="180deg">
      <MediaPostContent
        :date="date"
        :title="title"
        :explanation="explanation"
        :copyright="copyright"
        :is-liked="isLiked"
        @like="toggleLike"
        @infoOnClick="navigateToPost"
      />
    </MediaCanvas>
  </div>
</template>

<script>
export default {
  props: {
    date: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    mediaType: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      default: 'Missing Title',
    },
    explanation: {
      type: String,
      default: 'Missing Explanation',
    },
    copyright: {
      type: String,
      default: '',
    },
    isLiked: {
      type: Boolean,
      default: false,
    },
    isCanvasFixed: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    postLink () {
      return { name: 'date', params: { date: this.date } }
    }
  },
  methods: {
    toggleLike(like) {
      this.$emit('like', { date: this.date, like: !like })
    },
    navigateToPost () {
      return this.$router.push(this.postLink)
    }
  }
}
</script>

<style lang="sass" scoped>
.media-post
  position: relative

  .canvas
    max-height: 100%
    position: absolute
    overflow: auto

    &.bottom
      inset: auto 0 0

    &.fixed
      position: fixed
</style>
