<template>
  <div class="posts-filter">
    <h2 class="title text-bold">Filter Posts</h2>

    <form class="form" @submit.prevent="submitQuery">
      <SearchBar v-model="query.search" class="search" />

      <button class="button text-button" type="submit">GO!</button>
    </form>
  </div>
</template>

<script>
export default {
  data: () => ({
    query: { search: '' },
  }),
  computed: {
    queryParams() {
      return this.$route.query
    },
  },
  created() {
    if (this.queryParams.search) this.query.search = this.queryParams.search
  },
  methods: {
    submitQuery() {
      const query = Object.keys(this.query).reduce((subquery, key) => {
        const queryValue = this.query[key]
        return queryValue ? { ...subquery, [key]: queryValue } : subquery
      }, {})
      const route = { name: 'index', query }

      this.$router.push(route)
      this.$emit('close')
    },
  },
}
</script>

<style lang="sass" scoped>
@import ~assets/css/base/typography
@import ~assets/css/utils/media

.posts-filter
  padding: 100px 30px
  height: 100%

  @media #{$tablets-up}
    padding: 50px 60px

  .title
    margin: 0 0 20px
    +font-size-small

    @media #{$tablets-up}
      margin: 0 0 30px
      +font-size-normal

  .form
    .search
      margin: 0 0 20px

      @media #{$tablets-up}
        margin: 0 0 30px

    .button
      margin: 0 auto
      display: block
</style>
