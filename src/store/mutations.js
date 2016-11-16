import Vue from 'vue'

export const state = {
  todos: []
}

export const mutations = {

  setImage (state, { todo, value, evt }) {
    //Get count of selected files
    var input = evt.target
    // var files = [...input.files]
    var imgPath = input.value
    var extn = imgPath.substring(imgPath.lastIndexOf('.') + 1).toLowerCase()

    if (extn == "gif" || extn == "png" || extn == "jpg" || extn == "jpeg") {
      if (typeof (FileReader) != "undefined") {

        var reader = new FileReader()
        reader.onload = function(e) {
            var src = e.target.result
            if(typeof value !== 'undefined') {
              todo.text = value
            }
            if(typeof src !== 'undefined') {
              todo.src = src
            }
        }
        reader.readAsDataURL(input.files[0])
        
      } else {
        alert("This browser does not support FileReader.")
      }
    } else {
      alert("Pls select only images")
    }

  },
  getTodo (state) {
    var _data = []
    _data.push({text: '빨강', id: 0, done: true, src: ''})
    _data.push({text: '파랑', id: 1, done: false, src: ''})

    _data.forEach(_data => {
        Vue.set(state.todos, _data.id, {id: _data.id, text: _data.text, done: _data.done, src: _data.src})
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

  addTodo (state, { text }) {용
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

  editTodo (state, { todo, value, src }) {
    if(typeof value !== 'undefined') {
      todo.text = value
    }
    if(typeof src !== 'undefined') {
      todo.src = src
    }
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
