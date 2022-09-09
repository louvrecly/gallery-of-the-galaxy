export const state = () => ({
  busy: false,
  posts: [],
  startDate: null,
  likedPostDates: []
})

export const getters = {
  getBusyState: state => state.busy,
  getPosts: state => state.posts,
  getStartDate: state => state.startDate,
  getLikePostDates: state => state.likedPostDates
}

export const mutations = {
  SET_BUSY_STATE (state, busy) {
    state.busy = busy
  },
  SET_POSTS (state, posts) {
    state.posts = posts
  },
  SET_START_DATE (state, startDate) {
    state.startDate = startDate
  },
  SET_LIKED_POST_DATES (state, likedPostDates) {
    state.likedPostDates = likedPostDates
  },
  TOGGLE_LIKE_POST (state, { date, like }) {
    const likedPostDates = like
      ? [...state.likedPostDates, date]
      : state.likedPostDates.filter(likedPostDate => likedPostDate !== date)
    state.likedPostDates = likedPostDates
  }
}

export const actions = {
  nuxtClientInit ({ commit }, { app }) {
    const likedPostDates = app.$cookies.get('liked-post-dates')
    if (likedPostDates) commit('SET_LIKED_POST_DATES', likedPostDates)
  },
  async loadPosts ({ commit, state }, { startDate, endDate, nasaApiKey }) {
    if (state.startDate === startDate && state.posts.length) return state.posts

    commit('SET_BUSY_STATE', true)

    const posts = await this.$axios.$get('/planetary/apod', {
      params: {
        api_key: nasaApiKey,
        start_date: startDate,
        end_date: endDate
      }
    })

    const sortedNewPosts = posts.sort((postA, postB) => postA.date < postB.date ? 1 : -1)
    const sortedPosts = [...state.posts, ...sortedNewPosts]

    commit('SET_START_DATE', startDate)
    commit('SET_POSTS', sortedPosts)
    commit('SET_BUSY_STATE', false)
    return sortedPosts
  },
  async loadPost ({ commit, state }, { date, nasaApiKey }) {
    if (!date) return

    let post = state.posts.find(post => post.date === date)
    if (post) return post

    commit('SET_BUSY_STATE', true)

    post = await this.$axios.$get('/planetary/apod', {
      params: {
        api_key: nasaApiKey,
        date
      }
    })

    commit('SET_BUSY_STATE', false)

    return post
  },
  setLikePostDates ({ commit }, likedPostDates) {
    commit('SET_LIKED_POST_DATES', likedPostDates)
  },
  toggleLikePost ({ commit }, { date, like }) {
    commit('TOGGLE_LIKE_POST', { date, like })
  }
}
