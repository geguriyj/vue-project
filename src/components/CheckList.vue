<template>
  <div>
    <label class="title" v-text="component.componentTitle.ko"></label>
    <ul class="todo-list">
      <checkbox v-for="choice in component.choices" :choice="choice"></checkbox>
    </ul>
  </div>
</template>

<script>

  import Vue from 'vue'

  import { mapMutations } from 'vuex'
  import { mapGetters } from 'vuex'

  import store from '../store'
  import checkbox from './CheckBox.vue'


  import { Indicator } from 'mint-ui'
  import 'mint-ui/lib/style.css'

  export default {
    name: 'checklist',
    components: { checkbox },
    store,
    props: ['component'],
    data () {
      return {
        componentId: this.component.componentId
      }
    },
    created () {
        Indicator.open()
        setTimeout(h => {
          Indicator.close()
      }, 500)
    },
    computed: {
    },
    methods: {

    }
  }

  
</script>
