import axios from 'axios'

export default {
  namespaced: true,
  state: {
    orders: [],
    order: {},
  },
  gutters: {},
  mutations: {
    GET_ALL(state, payload) {
      state.orders = payload
    },
    UPDATE(state, payload) {
      state.orders = payload
    },
    DELETE(state, payload) {
      state.orders = state.orders.filter(order => order.id !== payload)
    },
    GET_ONE(state, payload) {
      state.order = payload
    },
  },
  actions: {
    async getAll(ctx) {
      // async await
    },
    async deleteOne(ctx, { id }) {
      // async await
      // 
    },
    async updateOne(ctx) {
      // async await
    },
    async updateAll(ctx) {
      // async await
    },
  },
}
