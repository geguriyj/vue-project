<template>
  <div>
    <input class="new-todo"
               autofocus
               autocomplete="off"
               placeholder="질문을 입력하세요.">
    <ul class="todo-list">
      <checkbox v-for="todo in filteredTodos" :todo="todo"></checkbox>
    </ul>
  </div>
</template>

<script>

  const filters = {
        all: todos => todos,
        active: todos => todos.filter(todo => !todo.done),
        completed: todos => todos.filter(todo => todo.done)
  }

  import Vue from 'vue'

  import { mapMutations } from 'vuex'

  import store from '../store'
  import checkbox from './CheckBox.vue'
  
  // Vue.component('item', Item)


  import { Indicator } from 'mint-ui'
  import 'mint-ui/lib/style.css'

  export default {
    name: 'itembox',
    components: { checkbox },
    store,
    data () {
      return {
        visibility: 'all',
        filters: filters
      }
    },
    created () {
        Indicator.open()
        this.$store.commit('getTodo')
        setTimeout(h => {
          Indicator.close()
      }, 500)
    },
    computed: {
      todos () {
        return this.$store.state.todos
      },
      allChecked () {
        return this.todos.every(todo => todo.done)
      },
      filteredTodos () {
        return filters[this.visibility](this.todos)
      },
      remaining () {
        return this.todos.filter(todo => !todo.done).length
      }
    },
    methods: {
      onValuesChange () {

      },
      addTodo (e) {
        var text = e.target.value
        if (text.trim()) {
          this.$store.commit('addTodo', { text })
        }
        e.target.value = ''
      },

      ...mapMutations([
        'toggleAll',
        'clearCompleted'
      ])
    },
    filters: {
      pluralize: (n, w) => n === 1 ? w : (w + 's'),
        capitalize: s => s.charAt(0).toUpperCase() + s.slice(1)
    }
  }
</script>
