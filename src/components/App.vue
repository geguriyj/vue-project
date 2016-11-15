<style src="todomvc-app-css/index.css"></style>
<style>
      
.new-todo {
  padding: 16px;
}
.todo-list li img {
    margin-left: 50px;
    margin-buttom: 50px;
    width: 250px;
}
.todo-list li img.show {
    display: block;
}
.todo-list li .fileUpload {
    color: #fff;
    background-color: #5cb85c;
    border-color: #4cae4c;
    position: absolute;
    overflow: hidden;
    top: 15px;
    right: 50px;
    height: 20px;
    padding: 5px;
    font-size: 13px;
    border-radius: 4px;
}
.todo-list li .fileUpload input.upload {
    position: absolute;
    top: 0;
    right: 0;
    margin: 0;
    padding: 0;
    font-size: 20px;
    cursor: pointer;
    opacity: 0;
    filter: alpha(opacity=0);
}

.todo-list li .edit {
  width: 80%;
  border: 0;
  box-shadow: inset 0 -1px 1px 0 rgba(0, 0, 0, 0.1);
}
.todo-list li .remove {
  position: absolute;
  top: 0;
  right: 10px;
  bottom: 0;
  width: 40px;
  height: 40px;
  margin: auto 0;
  font-size: 30px;
  color: #cc9a9a;
  margin-bottom: 11px;
  transition: color 0.2s ease-out;
}

</style>
<template>
  <section class="todoapp">
    <!-- header -->
    <header class="header">
      <h1>설문</h1>
      <input class="new-todo"
        autofocus
        autocomplete="off"
        placeholder="What needs to be done?"
        @keyup.enter="addTodo">

    </header>
    <!-- main section -->
    <section class="main" v-show="todos.length">
      <ul class="todo-list">
        <todo v-for="todo in filteredTodos" :todo="todo"></todo>
      </ul>
    </section>
    <!-- footer -->
    <footer class="footer" v-show="todos.length">
      <span class="todo-count">
        <strong>{{ remaining }}</strong>
        {{ remaining | pluralize('item') }} left
      </span>
      <ul class="filters">
        <li v-for="(val, key) in filters">
          <a :href="'#/' + key"
            :class="{ selected: visibility === key }"
            @click="visibility = key">{{ key | capitalize }}</a>
        </li>
      </ul>
      <button class="clear-completed"
        v-show="todos.length > remaining"
        @click="clearCompleted">
        Clear completed
      </button>
    </footer>
  </section>
</template>

<script>
import { mapMutations } from 'vuex'
import Todo from './Todo.vue'

import Vue from 'vue'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css';
Vue.use(Mint);

//import Toast from 'vue-toast-mobile';
//import 'mint-ui/lib/style.css';

const filters = {
  all: todos => todos,
  active: todos => todos.filter(todo => !todo.done),
  completed: todos => todos.filter(todo => todo.done)
}

export default {
  components: { Todo },
  data () {
    return {
      visibility: 'all',
      filters: filters
    }
  },
  created () {
    Mint.Indicator.open()
    this.$store.commit('getTodo')
    setTimeout(h => {
        Mint.Indicator.close()
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
