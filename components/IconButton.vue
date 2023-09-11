<template>
  <button class="icon-button icon-button" @click="onClick">
    <FontAwesomeIcon :icon="[iconType, iconName]" class="icon" />
  </button>
</template>

<script>
export default {
  props: {
    iconName: {
      type: String,
      required: true,
    },
    iconType: {
      type: String,
      default: 'far',
    },
  },
  methods: {
    onClick(e) {
      this.$emit('click', e)
    },
  },
}
</script>

<style lang="sass" scoped>
.icon-button
  .icon
    height: 20px
</style>
