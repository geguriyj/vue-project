<template>
  <li class="todo">
    <input class="toggle" type="checkbox">
    <label>{{choice.choiceDescription.ko}}</label>
  </li>
</template>

<script>

  import Vue from 'vue'

  import { mapMutations } from 'vuex'

  export default {
    name: 'checkbox',
    props: ['choice'],
    data () {
      return {
        componentId: this.$store.state.forms.componentId
      }
    },
    methods: {
      
    }
  }
</script>
