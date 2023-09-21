<template>
  <div class="home">
    <section class="container responsive-margins">
      <div class="results">
        <Spinner v-if="busy" />

        <MediaPosts v-else-if="filteredPosts.length" :posts="filteredPosts" />

        <p v-else class="message">
          Oops... no posts seem to matched the filter criteria so far.
        </p>
      </div>

      <TextButton
        class="button"
        text="LOAD MORE POSTS"
        @click="loadMorePosts"
      />
    </section>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import { getNextDateRange } from '~/utils/nasaHelper'

export default {
  name: 'HomePage',
  data: () => ({
    searchableFields: ['title', 'explanation', 'copyright'],
  }),
  computed: {
    ...mapGetters({
      busy: 'getBusyState',
      posts: 'getPosts',
      startDate: 'getStartDate',
    }),
    queryParams() {
      return this.$route.query
    },
    filteredPosts() {
      return this.queryParams.search
        ? this.posts.filter(this.comparePost(this.queryParams.search))
        : this.posts
    },
  },
  created() {
    this.loadMorePosts()
  },
  methods: {
    ...mapActions(['loadPosts']),
    comparePost(search) {
      return (post) => {
        return this.searchableFields.some(
          (field) =>
            post[field] &&
            post[field].toLowerCase().includes(search.toLowerCase()),
        )
      }
    },
    loadMorePosts() {
      const { startDate, endDate } = getNextDateRange(this.startDate)
      const { nasaApiKey } = this.$config
      this.loadPosts({ startDate, endDate, nasaApiKey })
    },
  },
}
</script>

<style lang="sass" scoped>
@import ~assets/css/base/typography
@import ~assets/css/utils/media
@import ~assets/css/components/section

.home
  min-height: 100vh

  .container
    padding: 120px 0 100px

    @media #{$tablets-up}
      padding: 160px 0

    .results
      min-height: 300px
      position: relative

      .message
        margin: 0 0 30px
        color: goldenrod
        +font-size-small
        text-align: center

        @media #{$tablets-up}
          +font-size-normal

    .button
      margin: 100px auto
      display: block
</style>
