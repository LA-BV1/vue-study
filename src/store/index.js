import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 2,
    authors: [
      'Dante Alighieri',
      'Fyodor Dostoevsky',
      'Leo Tolstoy',
      'Victor Hugo',
      'William Shakespeare'
    ],
    list: [
      {
        id: 1,
        isbn: 502013850,
        title:'Simple title',
        author: 'Dante Alighieri',
        description: 'Some description',
        date: new Date()
      },
      {
        id: 2,
        isbn: 502013850,
        title:'Simple title',
        author: 'Dante Alighieri',
        description: 'Some description',
        date: new Date()
      }

    ]
  },
  getters: {
    getList: state => {
      return state.list
    },
    getAuthors: state => {
      return state.authors
    },
    getItem: (state, id) => {
      return state.list.find(i => i.id === id)
    }
  },
  mutations: {
    delete (state, id) {
      state.list = state.list.filter(i => i.id !== id)
    },
    edit (state, item) {
      state.list = state.list.map(i => {
        if (i.id == item.id) {
          return {
            ...i,
            ...item
          }
        }
        return i
      })
    },
    add (state, item) {
      state.list.push({ ...item, id: ++state.count, date: new Date()})
    }
  },
  actions: {
    delete ({ commit, state}, id) {
      commit('delete', id)
    },
    edit ({ commit, state}, item) {
      commit('edit', item)
    },
    add ({ commit, state}, item) {
      commit('add', item)
    }
  }
})

export default store