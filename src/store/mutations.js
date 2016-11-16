import Vue from 'vue'

export const state = {
  todos: []
}

export const mutations = {

  // setTodo (state, { id, text, src }) {
  //   state.todos.push({
  //     id,
  //     text,
  //     src,
  //     done: false
  //   })
  // },
  setImage (state, { todo, value, evt }) {
    //Get count of selected files
    var input = evt.target
    var files = [...input.files]
    var imgPath = input.value
    var extn = imgPath.substring(imgPath.lastIndexOf('.') + 1).toLowerCase()
    var _this = this
    var _editTodo = (src) => {
      todo.text = value
      todo.src = src
      console.log(todo);
    }
    if (extn == "gif" || extn == "png" || extn == "jpg" || extn == "jpeg") {
      if (typeof (FileReader) != "undefined") {
        //loop for each file selected for uploaded.
        files.forEach( (info, idx) => {
          setTimeout
          var reader = new FileReader()
          reader.onload = function (e) {
            var src = e.target.result
            _editTodo(src)
          }
          //image_holder.show();
          reader.readAsDataURL(input.files[idx])
        })
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
    todo.text = value
    todo.src = src
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
