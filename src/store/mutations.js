// export const STORAGE_KEY = 'todos-vuejs'
//
// // for testing
// if (navigator.userAgent.indexOf('PhantomJS') > -1) {
//   window.localStorage.clear()
// }
//
// export const state = {
//   todos: JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
// }




import Vue from 'vue'

export const state = {
  todos: []
}

export const mutations = {

  displayImage (state, { text, src }) {
    state.todos.push({
      text,
      src,
      done: false
    })
  },
  getTodo (state) {
    var _data = []
    _data.push({text: '빨강', id: 0, done: true, src: ''})
    _data.push({text: '파랑', id: 1, done: false, src: ''})

    _data.forEach(_data => {
        Vue.set(state.todos, _data.id, {text: _data.text, done: _data.done, src: _data.src})
    })

    // var Vue = require('vue');
    // var VueResource = require('vue-resource');
    //
    // Vue.use(VueResource);
    // // POST /someUrl
    // Vue.http.get('/list', {formId : "a001"}).then((response) => {
    //
    //   response.forEach(_initData => {
    //     Vue.set(state.todos, _initData.id, {text: _initData.text})
    //   })
    //
    // }, (response) => {
    //   // error callback
    // })
  },

  addTodo (state, { text }) {
    state.todos.push({
      text,
      done: false
    })
  },

  deleteTodo (state, { todo }) {
    state.todos.splice(state.todos.indexOf(todo), 1)
  },

  toggleTodo (state, { todo }) {
    todo.done = !todo.done
  },

  editTodo (state, { todo, value }) {
    todo.text = value
  },

  toggleAll (state, { done }) {
    state.todos.forEach((todo) => {
      todo.done = done
    })
  },

  clearCompleted (state) {
    state.todos = state.todos.filter(todo => !todo.done)
  }
}
