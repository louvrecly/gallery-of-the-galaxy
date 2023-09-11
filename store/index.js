export const state = () => ({
  busy: false,
  isNavBarTranslucent: false,
  postsMap: {},
  dates: [],
  likedPostDates: [],
})

export const getters = {
  getBusyState: (state) => state.busy,
  getNavBarTranslucentState: (state) => state.isNavBarTranslucent,
  getPosts: (state) => state.dates.map((date) => state.postsMap[date]),
  getStartDate: (state) => state.dates[state.dates.length - 1],
  getLikePostDates: (state) => state.likedPostDates,
}

export const mutations = {
  SET_BUSY_STATE(state, busy) {
    state.busy = busy
  },
  SET_NAVBAR_TRANSLUCENT_STATE(state, isNavBarTranslucent) {
    state.isNavBarTranslucent = isNavBarTranslucent
  },
  ADD_TO_POSTS_MAP(state, posts = []) {
    state.postsMap = posts.reduce((subMap, post) => {
      return { ...subMap, [post.date]: post }
    }, state.postsMap)
  },
  UPDATE_DATES(state) {
    const dates = Object.keys(state.postsMap)
    if (state.dates.length === dates.length) return
    dates.sort((dateA, dateB) => (dateA < dateB ? 1 : -1))
    state.dates = dates
  },
  SET_LIKED_POST_DATES(state, likedPostDates) {
    state.likedPostDates = likedPostDates
  },
  TOGGLE_LIKE_POST(state, { date, like }) {
    const likedPostDates = like
      ? [...state.likedPostDates, date]
      : state.likedPostDates.filter((likedPostDate) => likedPostDate !== date)
    state.likedPostDates = likedPostDates
  },
}

export const actions = {
  nuxtClientInit({ commit }, { app }) {
    const likedPostDates = app.$cookies.get('liked-post-dates')
    if (likedPostDates) commit('SET_LIKED_POST_DATES', likedPostDates)
  },
  setNavBarTranslucentState({ commit }, isNavBarTranslucent = false) {
    commit('SET_NAVBAR_TRANSLUCENT_STATE', isNavBarTranslucent)
  },
  loadPosts({ commit, getters }, { startDate, endDate, nasaApiKey }) {
    if (startDate === endDate || startDate >= getters.getStartDate) return

    commit('SET_BUSY_STATE', true)

    return this.$axios
      .$get('/planetary/apod', {
        params: {
          api_key: nasaApiKey,
          start_date: startDate,
          end_date: endDate,
          thumbs: true,
        },
      })
      .then((newPosts) => {
        commit('ADD_TO_POSTS_MAP', newPosts)
        return newPosts
      })
      .finally(() => {
        commit('UPDATE_DATES')
        commit('SET_BUSY_STATE', false)
      })
  },
  loadPost({ commit, state }, { date, nasaApiKey }) {
    if (!date) return

    const post = state.postsMap[date]
    if (post) return post

    commit('SET_BUSY_STATE', true)

    return this.$axios
      .$get('/planetary/apod', {
        params: {
          api_key: nasaApiKey,
          date,
        },
      })
      .then((post) => {
        commit('ADD_TO_POSTS_MAP', [post])
        return post
      })
      .finally(() => {
        commit('UPDATE_DATES')
        commit('SET_BUSY_STATE', false)
      })
  },
  setLikePostDates({ commit }, likedPostDates) {
    commit('SET_LIKED_POST_DATES', likedPostDates)
  },
  toggleLikePost({ commit }, { date, like }) {
    commit('TOGGLE_LIKE_POST', { date, like })
  },
}
