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
      <input type="file" class="upload" @change="addImage({ todo: todo }, $event)"/>
    </div>
    <button class="remove" @click="deleteTodo({ todo: todo })">X</button>
  </li>
</template>

<script>

  import Vue from 'vue'

  import { mapMutations } from 'vuex'

  export default {
    name: 'item',
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
      addImage (data, evt) {
        var todo = data.todo
        var value = todo.text ? todo.text : '이미지';
        this.$store.commit('setImage', { todo, value, evt })
      }
    }
  }
</script>
