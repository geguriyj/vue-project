<template>
  <li class="todo" :class="{ editing: editing }">
    <input class="toggle" type="checkbox" @change="toggleTodo({ todo: todo })">
    <label v-show="!editing" v-text="todo.text" @dblclick="editing = true"></label>
    <input class="edit"
           v-show="editing"
           v-focus="editing"
           :value="todo.text"
           @keyup.enter="doneEdit"
           @keyup.esc="cancelEdit"
           @blur="doneEdit">
    <img v-show="todo.src" :src="todo.src"/>
    <div class="fileUpload">
      <span>Upload</span>
      <input type="file" class="upload" @change="addImage"/>
    </div>
    <button class="remove" @click="deleteTodo({ todo: todo })">X</button>
  </li>
</template>

<script>

  import { mapMutations } from 'vuex'

  // import Vue from 'vue'
  // import { Checklist } from 'mint-ui';

  // Vue.component(Checklist.name, Checklist);

  export default {
    name: 'todo',
    props: ['todo'],
    data () {
      return {
        editing: true
      }
    },
    directives: {
      focus (el, { value }, { context }) {
        if (value) {
          context.$nextTick(() => {
            el.focus()
        })
        }
      }
    },
    methods: {
      ...mapMutations([
        'editTodo',
        'toggleTodo',
        'deleteTodo'
      ]),
    doneEdit (e) {
      const value = e.target.value.trim()
      const { todo } = this
      if (!value) {
        this.deleteTodo({
          todo
        })
      } else if (this.editing) {
        this.editTodo({
          todo,
          value
        })
        //this.editing = false
      }
    },
    cancelEdit (e) {
      e.target.value = this.todo.text
      this.editing = false
    },
    disp (src) {
      var text = 'aaa';
      this.$store.commit('displayImage', { text, src })
    },
    addImage (e) {
      //Get count of selected files
      var input = e.target
      var countFiles = input.files.length
      var imgPath = input.value
      var extn = imgPath.substring(imgPath.lastIndexOf('.') + 1).toLowerCase()
      var _this = this
      function dispImg (src) {
        _this.disp(src)
      }
      if (extn == "gif" || extn == "png" || extn == "jpg" || extn == "jpeg") {
        if (typeof (FileReader) != "undefined") {
          //loop for each file selected for uploaded.
          for (var i = 0; i < countFiles; i++) {
            var reader = new FileReader()
            reader.onload = function (e) {
              var src = e.target.result
              dispImg(src)
              /*
               $("<img />", {
               "src": e.target.result,
               "class": "thumb-image"
               }).appendTo(image_holder);
               */
            }
            //image_holder.show();
            reader.readAsDataURL(input.files[i])
          }
        } else {
          alert("This browser does not support FileReader.")
        }
      } else {
        alert("Pls select only images")
      }
    }
  }
  }
</script>
