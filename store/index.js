export const state = () => ({
  busy: false,
  postsMap: {},
  dates: [],
  likedPostDates: [],
})

export const getters = {
  getBusyState: (state) => state.busy,
  getPosts: (state) => state.dates.map((date) => state.postsMap[date]),
  getStartDate: (state) => state.dates[state.dates.length - 1],
  getLikePostDates: (state) => state.likedPostDates,
}

export const mutations = {
  SET_BUSY_STATE(state, busy) {
    state.busy = busy
  },
  ADD_TO_POSTS_MAP(state, postsMap) {
    state.postsMap = { ...state.postsMap, ...postsMap }
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
  // async loadPosts ({ commit }, { startDate, endDate, nasaApiKey }) {
  // async loadPosts ({ commit, getters }, { startDate, endDate, nasaApiKey }) {
  loadPosts({ commit, getters }, { startDate, endDate, nasaApiKey }) {
    if (startDate === endDate || startDate >= getters.getStartDate) return

    commit('SET_BUSY_STATE', true)

    // const newPosts = await this.$axios.$get('/planetary/apod', {
    //   params: {
    //     api_key: nasaApiKey,
    //     start_date: startDate,
    //     end_date: endDate,
    //     thumbs: true
    //   }
    // })
    // .catch(err => {
    //   console.log({ err }) // eslint-disable-line
    // })

    // const newPostsMap = newPosts.reduce(
    //   (subMap, post) => ({ ...subMap, [post.date]: post }),
    //   {}
    // )

    // commit('ADD_TO_POSTS_MAP', newPostsMap)
    // commit('UPDATE_DATES')

    // commit('SET_BUSY_STATE', false)
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
        const newPostsMap = newPosts.reduce(
          (subMap, post) => ({ ...subMap, [post.date]: post }),
          {}
        )

        commit('ADD_TO_POSTS_MAP', newPostsMap)
        return newPostsMap
      })
      .catch((err) => {
        console.log({ loadPostsError: err }) // eslint-disable-line

        return {}
      })
      .finally(() => {
        commit('UPDATE_DATES')
        commit('SET_BUSY_STATE', false)
      })
  },
  // async loadPost ({ commit, state }, { date, nasaApiKey }) {
  loadPost({ commit, state }, { date, nasaApiKey }) {
    if (!date) return

    // let post = state.postsMap[date]
    const post = state.postsMap[date]
    if (post) return post

    commit('SET_BUSY_STATE', true)

    // post = await this.$axios.$get('/planetary/apod', {
    //   params: {
    //     api_key: nasaApiKey,
    //     date
    //   }
    // })

    // commit('ADD_TO_POSTS_MAP', { [post.date]: post })
    // commit('UPDATE_DATES')

    // commit('SET_BUSY_STATE', false)

    // return post
    return this.$axios
      .$get('/planetary/apod', {
        params: {
          api_key: nasaApiKey,
          date,
        },
      })
      .then((post) => {
        commit('ADD_TO_POSTS_MAP', { [post.date]: post })

        return post
      })
      .catch((err) => {
        console.log({ loadPostError: err }) // eslint-disable-line
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
