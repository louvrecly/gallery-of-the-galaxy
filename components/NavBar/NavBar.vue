<template>
  <component
    :is="navBarComponent"
    class="nav-bar"
    :class="{ solid: isSolid, [navBarComponent]: true }"
    @mouseenter="setHovered(true)"
    @mouseleave="setHovered(false)"
  >
    <ModalBase v-if="modalOpened" @close="toggleModalOpened(false)">
      <PostsFilter @close="toggleModalOpened(false)" />
    </ModalBase>

    <div
      class="container"
      :class="{
        'responsive-margins': !getNavBarTranslucentState,
        translucent: getNavBarTranslucentState,
      }"
    >
      <NuxtLink class="link" :to="{ name: 'index' }">
        <AppLogo />
      </NuxtLink>

      <IconButton
        class="button icon-button"
        :class="{ active: isFilterActive }"
        icon-name="filter"
        icon-type="fas"
        @click="toggleModalOpened(true)"
      />
    </div>
  </component>
</template>

<script>
import { mapGetters } from 'vuex'
import scrollHandler from '~/components/mixins/scrollHandler'

export default {
  mixins: [scrollHandler],
  data: () => ({
    isOnTop: true,
    isHovered: false,
    modalOpened: false,
  }),
  computed: {
    ...mapGetters(['getNavBarTranslucentState']),
    navBarComponent() {
      return this.getNavBarTranslucentState ? 'media-canvas' : 'div'
    },
    isSolid() {
      return !this.isOnTop || this.isHovered
    },
    queryParams() {
      return this.$route.query
    },
    isFilterActive() {
      return Object.keys(this.queryParams).length > 0
    },
  },
  methods: {
    handleScroll() {
      this.isOnTop = (window.scrollY || window.pageYOffset) <= 40
    },
    setHovered(isHovered) {
      this.isHovered = isHovered
    },
    toggleModalOpened(opened) {
      this.modalOpened = opened
    },
  },
}
</script>

<style lang="sass" scoped>
@import ~assets/css/base/typography
@import ~assets/css/utils/media
@import ~assets/css/components/section

.nav-bar
  transition: all .3s ease

  &.div
    &.solid
      background-image: $background-gradient-light
      box-shadow: 0 5px 10px rgba(#000, 0.3)

      .container
        padding: 5px 0

        @media #{$tablets-up}
          padding: 10px 0

  .container
    padding: 20px 0
    display: flex
    justify-content: space-between
    align-items: center
    transition: padding .3s ease

    @media #{$tablets-up}
      padding: 25px 0

    &.translucent
      padding: 20px

      @media #{$tablets-up}
        padding: 25px 30px

    .link
      text-decoration: none

    .button
      &.active
        color: springgreen
</style>
