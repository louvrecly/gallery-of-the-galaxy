<template>
  <div class="nav-bar" :class="{ solid: !isOnTop }">
    <ModalBase v-if="modalOpened" @close="toggleModalOpened(false)">
      <PostsFilter @close="toggleModalOpened(false)" />
    </ModalBase>

    <div class="container responsive-margins">
      <AppLogo />

      <button class="button icon-button" :class="{ active: isFilterActive }" @click="toggleModalOpened(true)">
        <FontAwesomeIcon :icon="['fas', 'filter']" />
      </button>
    </div>
  </div>
</template>

<script>
import scrollHandler from '~/components/mixins/scrollHandler'

export default {
  name: 'NavBar',
  mixins: [scrollHandler],
  data () {
    return {
      isOnTop: true,
      modalOpened: false
    }
  },
  computed: {
    queryParams () {
      return this.$route.query
    },
    isFilterActive () {
      return Object.keys(this.queryParams).length > 0
    }
  },
  methods: {
    handleScroll () {
      this.isOnTop = (window.scrollY || window.pageYOffset) <= 40
    },
    toggleModalOpened (opened) {
      this.modalOpened = opened
    }
  }
}
</script>

<style lang="sass" scoped>
@import ~assets/css/base/typography
@import ~assets/css/utils/media
@import ~assets/css/components/section

.nav-bar
  width: 100%
  position: fixed
  z-index: 10
  transition: all .3s ease

  &.solid
    background-image: $background-gradient-light
    box-shadow: 0 5px 10px rgba(#000, 0.3)

    .container
      padding: 0 0 5px

      @media #{$tablets-up}
        padding: 10px 0 15px

  .container
    padding: 15px 0 20px
    display: flex
    justify-content: space-between
    align-items: center
    transition: padding .3s ease

    @media #{$tablets-up}
      padding: 20px 0 25px

    .button
      &.active
        color: springgreen
</style>