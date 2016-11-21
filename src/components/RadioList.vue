<template>
  <div v-once>
    <label class="title" v-text="component.componentTitle.ko"></label>
    <ul class="todo-list">
      <radiobox v-for="choice in choiceList" :choice="choice"></radiobox>
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
      console.log('data // ', this.component.componentId)
      return {
        componentId: this.component.componentId
      }
    },
    created () {
        Indicator.open()

        console.log('created // ', this.componentId)

        this.$store.commit('currentComponent', { id: this.componentId}, { silent: false })

        setTimeout(h => {
          Indicator.close()
      }, 500)
    },
    // watch: {
    //   // whenever question changes, this function will run
    //   choiceList: function (newQuestion) {
    //     debugger;
    //   }
    // },
    computed: {
      // cache: false,
      ...mapGetters([
        'componentIdd',
        'choices'
      ]),
      // choices () {
      //   console.log('computed // ', this.componentId)
      //   //return this.$store.getters.choices;
      //   return this.choices;
      // },
      choiceList () {
        console.log('choiceList // ', this.componentId, this.choices)
        return this.choices
      }
    },
    methods: {

    }
  }
</script>
