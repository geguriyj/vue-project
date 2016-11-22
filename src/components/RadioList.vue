<template>
  <div v-once>
    <label class="title" v-text="component.componentTitle.ko"></label>
    <ul class="todo-list">
      <radiobox v-for="choice in component.choices" :choice="choice"></radiobox>
    </ul>
  </div>
</template>

<script>

  import Vue from 'vue'

  import { mapMutations } from 'vuex'
  import { mapGetters } from 'vuex'

  import store from '../store'
  import radiobox from './RadioBox.vue'
  

  import { Indicator } from 'mint-ui'
  import 'mint-ui/lib/style.css'

  export default {
    name: 'radiolist',
    components: { radiobox },
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
