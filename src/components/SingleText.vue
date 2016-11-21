<template>
  <div>
    <label class="title" v-text="component.componentTitle.ko"></label>
    <input class="new-todo"
           autocomplete="off"
           placeholder="답변을 입력하세요.">
  </div>
</template>

<script>

import Vue from 'vue'

import store from '../store'

import { Indicator } from 'mint-ui'
import 'mint-ui/lib/style.css'

export default {
  name: 'singletext',
  store,
  props: ['component'],
  data () {
    return {
      componentId: this.component.componentId
    }
  },
  created () {
      Indicator.open()

      this.$store.commit('currentComponent', { id: this.componentId})

      setTimeout(h => {
        Indicator.close()
    }, 500)
  },
  methods: {
    
  }
}

</script>

<style>



</style>

