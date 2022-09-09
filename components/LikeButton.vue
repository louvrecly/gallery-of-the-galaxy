<template>
  <IconButton
    class="like-button"
    :class="{ liked }"
    icon-name="heart"
    :icon-type="iconType"
    @click="toggleLike"
  />
</template>

<script>
export default {
  props: {
    liked: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    iconType () {
      return this.liked ? 'fas' : 'far'
    }
  },
  methods: {
    toggleLike () {
      this.$emit('toggleLike', this.liked)
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
