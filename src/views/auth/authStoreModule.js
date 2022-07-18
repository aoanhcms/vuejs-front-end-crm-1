import axios from '@axios'

export default {
  namespaced: true,
  state: {
    user: {},
  },
  getters: {},
  mutations: {
    GET_USER(state, userData) {
      state.user = userData
    },
  },
  actions: {
    fetchUser(ctx, { id }) {
      return new Promise((resolve, reject) => {
        axios
          .get(`/auth/me/${id}`)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
  },
}
