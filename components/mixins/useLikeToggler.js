import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters({ likedPostDates: 'getLikePostDates' }),
  },
  methods: {
    ...mapActions(['toggleLikePost']),
    isPostLiked(date) {
      return this.likedPostDates.includes(date)
    },
    toggleLikePostAndSaveInCookies({ date, like }) {
      this.toggleLikePost({ date, like })
      this.$cookies.set('liked-post-dates', this.likedPostDates)
    },
  },
}
