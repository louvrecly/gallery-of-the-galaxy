<template>
  <button class="text-button" @click="onClick">
    <Spinner v-if="busy" />

    <span v-else>{{ text }}</span>
  </button>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: {
    text: {
      type: String,
      default: ''
    }
  },
  computed: {
    ...mapGetters({ busy: 'getBusyState' })
  },
  methods: {
    onClick (e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style lang="sass" scoped>
.text-button
  width: 240px
  height: 35px
  position: relative
</style>
