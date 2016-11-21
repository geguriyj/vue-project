<template>
  <li class="todo">
    <input class="toggle" type="radio" :name="'rdo_group_'+componentId">
    <label>{{choice.choiceDescription.ko}}</label>
  </li>
</template>

<script>

  import Vue from 'vue'

  import { mapMutations } from 'vuex'

  export default {
    name: 'radiobox',
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
