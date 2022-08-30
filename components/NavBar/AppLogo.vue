<template>
  <h1 class="app-logo">
    <span class="icon">&#129680;</span><span class="title">spacestagram</span>
  </h1>
</template>

<style lang="sass" scoped>
@import ~assets/css/base/typography
@import ~assets/css/utils/media

.app-logo
  color: goldenrod
  font-family: $font-family-logo

  .icon
    margin: 0 10px 0 0
    +font-size-normal

    @media #{$tablets-up}
      margin: 0 10px 0 0

  .title
    +font-size-large
</style>
