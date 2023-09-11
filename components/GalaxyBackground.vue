<template>
  <div class="space">
    <div class="stars">
      <div v-for="i in 100" :key="`star-${i}`" class="star" />
    </div>

    <div class="milky-way">
      <div v-for="i in 150" :key="`star-${i}`" class="star" />
    </div>
  </div>
</template>

<style lang="sass" scoped>
@import ~assets/css/components/section

$COLOR_WHITE: #fff
$COLOR_SKY_TOP: #060431
$COLOR_SKY_BOTTOM: #406178

@mixin keyframes($animation-name)
  @-webkit-keyframes #{$animation-name}
    @content
  @-moz-keyframes #{$animation-name}
    @content
  @keyframes #{$animation-name}
    @content

@mixin animation($animation-name)
  -webkit-animation: $animation-name
  -moz-animation: $animation-name
  animation: $animation-name
  -webkit-animation-fill-mode: both
  -moz-animation-fill-mode: both
  animation-fill-mode: both

@mixin prefixes($property, $value)
  @each $prefix in -webkit-, -moz-, -ms-, -o-, ""
    #{$prefix}#{$property}: $value

.space
  background-image: $background-gradient

.stars
  position: relative
  width: 100%
  height: 100%

.star
  position: absolute
  top: 50%
  left: 50%
  background: $COLOR_WHITE
  border-radius: 50%
  @for $i from 1 through 100
    &:nth-child(#{$i})
      $size: random(3)
      top: calc(50% - #{random(100) - 50%})
      left: calc(50% - #{random(100) - 50%})
      @include prefixes(box-shadow, 0 0 20px 10px rgba($COLOR_SKY_TOP, 0.3))
      width: $size + px
      height: $size + px
      opacity: calc(random(10) / 10)
      @if $i > 250
        @include prefixes(box-shadow, 0 0 20px 5px rgba($COLOR_SKY_BOTTOM, 0.3))
      @if $i % 10 == 0
        @include animation(star #{random(3)}s #{random(3)}s alternate infinite)
        @include prefixes(box-shadow, 0 0 10px 5px rgba($COLOR_WHITE, 0.3))

@include keyframes(star)
  0%
    @include prefixes(box-shadow, 0 0 10px 5px rgba($COLOR_WHITE, 0.3))
  100%
    @include prefixes(box-shadow, 0 0 20px 5px rgba($COLOR_WHITE, 0.3))

.milky-way
  position: absolute
  top: 25%
  left: 0
  width: max(100vw, 100vh)
  height: 50vh
  @include prefixes(transform,  rotate(50deg))

  .star
    @for $i from 1 through 150
      &:nth-child(#{$i})
        $size: random(3)
        $shadowSize: calc(#{random(10) + 2px})
        top: calc(50% - #{random(100) - 50%})
        left: calc(50% - #{random(100) - 50%})
        @include prefixes(box-shadow, 0 0 20px $shadowSize rgba(random(255), random(140), 255, 0.8))
        width: $size + px
        height: $size + px
        opacity: calc(random(10) / 10)
        @if $i > 125
          @include prefixes(box-shadow, 0 0 20px 5px rgba($COLOR_SKY_TOP, 0.3))

html,
body
  width: 100%
  height: 100%

body
  background: $COLOR_WHITE

*
  margin: 0
  padding: 0
  &:before,
  &:after
    content: ""
    position: absolute
</style>
