<template>
  <div>
    <input class="new-todo"
           autofocus
           autocomplete="off"
           placeholder="질문을 입력하세요.(서술식)">
    <textarea class="new-todo"
           placeholder="답변을 입력하세요."/>
  </div>
</template>

<script>

import Vue from 'vue'

export default {
  name: 'multitext',
  methods: {
    
  },
  data() {
    return {
      text: 'multitext'
    }
  }
}

</script>

<style>



</style>

