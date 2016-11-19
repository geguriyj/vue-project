<template>
  <div>
    <input class="new-todo"
       autocomplete="off"
       placeholder="질문을 입력하세요.(멀티선택)">
    <ul class="todo-list">
      <checkbox v-for="item in items" :item="item"></checkbox>
    </ul>
  </div>
</template>

<script>


  import Vue from 'vue'

  import { mapMutations } from 'vuex'

  import store from '../store'
  import checkbox from './CheckBox.vue'
  

  import { Indicator } from 'mint-ui'
  import 'mint-ui/lib/style.css'

  export default {
    name: 'itembox',
    components: { checkbox },
    store,
    data () {
      return {
        items: this.$store.getters.forms.components
      }
    },
    created () {
        Indicator.open()
        console.log(this.items);
        setTimeout(h => {
          Indicator.close()
      }, 500)
    },
    computed: {
      // components () {
      //   return this.$store.state.forms
      // }
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
      }
    }
  }
</script>
