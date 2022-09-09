<template>
  <li class="media-post">
    <MediaComponent :url="url" :media-type="mediaType" :title="title" />

    <MediaPostContent
      :date="date"
      :title="title"
      :explanation="explanation"
      :copyright="copyright"
      :liked="liked"
      @like="toggleLike"
      @infoOnClick="navigateToPost"
    />
  </li>
</template>

<script>
export default {
  props: {
    date: {
      type: String,
      required: true
    },
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
      default: "Missing Title"
    },
    explanation: {
      type: String,
      default: "Missing Explanation"
    },
    copyright: {
      type: String,
      default: ""
    },
    liked: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    toggleLike(like) {
      this.$emit("like", { date: this.date, like: !like })
    }
  }
}
</script>

<style lang="sass" scoped>
.media-post
  border-radius: 8px
  box-shadow: 0 5px 10px rgba(#000, 0.3)
  overflow: hidden
  transition: transform .3s ease
  transform-origin: top center

  &:hover
    transform: scale(1.05)
</style>
