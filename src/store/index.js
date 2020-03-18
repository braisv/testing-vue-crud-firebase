import Vue from 'vue'
import Vuex from 'vuex'
import db from '../firebase'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: []
  },
  mutations: {
    setTasks(state, tasks) {
      state.tasks = tasks
    },
    setTask(state, task) {
      state.task = task
    },
    deleteTask(state, id) {
      state.tasks = state.tasks.filter(task => task.id != id)
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
    },
    getTask({ commit }, id) {
      db.collection('tasks').doc(id).get()
      .then(doc => {
        let task = doc.data();
        task.id = doc.id;
        commit('setTask', task)
      })
    },
    editTask({ commit}, task) {
      db.collection('tasks').doc(task.id).update({
        name: task.name
      })
      .then( () => {
        router.push({ name: 'Init' })
      })
    },
    addTask({ commit }, taskName) {
      db.collection('tasks').add({
        name: taskName
      })
      .then( () => {
        router.push({ name: 'Init' })
      })
    },
    deleteTask({ commit }, id) {
      db.collection('tasks').doc(id).delete()
      .then( () => commit('deleteTask', id))
    }
  },
  modules: {
  }
})
