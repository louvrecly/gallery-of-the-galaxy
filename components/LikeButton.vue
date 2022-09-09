<template>
  <IconButton
    class="like-button"
    :class="{ liked: isLiked }"
    icon-name="heart"
    :icon-type="iconType"
    @click="toggleLike"
  />
</template>

<script>
export default {
  props: {
    isLiked: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    iconType () {
      return this.isLiked ? 'fas' : 'far'
    }
  },
  methods: {
    toggleLike () {
      this.$emit('toggleLike', this.isLiked)
    }
  }
}
</script>

<style lang="sass" scoped>
.like-button
  transition: color .3s ease

  &.liked
    color: crimson
</style>
