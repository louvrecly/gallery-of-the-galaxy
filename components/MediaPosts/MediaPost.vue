<template>
  <li class="media-post">
    <!-- <NuxtLink class="link" :class="{ play: isVideo }" :to="postLink"> -->
    <NuxtLink class="link" :class="mediaType" :to="postLink">
      <!-- <MediaComponent :url="url" :media-type="mediaType" :title="title" /> -->
      <MediaComponent :url="url" media-type="image" :title="title" />
    </NuxtLink>

    <MediaPostContent
      :date="date"
      :title="title"
      :explanation="explanation"
      :copyright="copyright"
      :is-liked="isLiked"
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
    isLiked: {
      type: Boolean,
      default: false
    },
    isVideo: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    postLink () {
      return { name: 'date', params: { date: this.date } }
    }
  },
  methods: {
    toggleLike(like) {
      this.$emit("like", { date: this.date, like: !like })
    },
    navigateToPost () {
      return this.$router.push(this.postLink)
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

  .link
    &.video
      position: relative
      display: flex
      justify-content: center
      align-items: center

      &::before,
      &::after
        content: ''
        position: absolute

      &::before
        // content: ''
        width: 50px
        height: 50px
        background-color: crimson
        border-radius: 50%
        // position: absolute
        opacity: 0.3
        filter: blur(1px)
        transition: opacity .5s ease, transform .5s ease

      &::after
        // margin-left: 15px
        margin-left: 17px
        // width: 20px
        // height: 20px
        // background-color: white
        border: 10px solid transparent
        border-left-color: white
        // transform: translateX(7px) scaleY(0.8)
        opacity: 0.5
        transition: opacity .5s ease, transform .5s ease

      &:hover
        &::before,
        &::after
          transform: scale(1.5)

        &::before
          opacity: 0.5

        &::after
          opacity: 0.7
</style>
