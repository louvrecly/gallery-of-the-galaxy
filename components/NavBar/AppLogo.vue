<template>
  <div class="app-logo">
    <span class="icon">&#129680;</span>
    <h1 class="title u-block">
      <span>Gallery</span>
      <span class="u-flex">
        <span>
          <span class="subscript u-block">of</span>
          <span class="subscript u-block">the</span>
        </span>
        <span>Galaxy</span>
      </span>
    </h1>
  </div>
</template>

<style lang="sass" scoped>
@import ~assets/css/base/typography
@import ~assets/css/utils/media
@import ~assets/css/utils/display

.app-logo
  color: goldenrod
  font-family: $font-family-logo
  display: flex
  align-items: center

  .icon
    margin: 0 5px 0 0
    +font-size-larger

  .title
    +font-size-large
    line-height: 1
    font-style: italic
    text-transform: uppercase

    .subscript
      margin: 0 5px
      +font-size-smaller
      line-height: 1
</style>
