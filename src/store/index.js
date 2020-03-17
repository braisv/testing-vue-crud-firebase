import Vue from 'vue'
import Vuex from 'vuex'
import db from '../firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: []
  },
  mutations: {
    setTasks(state, tasks) {
      state.tasks = tasks
    }
  },
  actions: {
    getTasks({ commit }) {
      const dbTasks = []
      db.collection('tasks').get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          let task = doc.data()
          task.id = doc.id
          dbTasks.push(task)
        })
      })
      commit('setTasks', dbTasks)
    }
  },
  modules: {
  }
})
