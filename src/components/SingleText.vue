<template>
  <div>
    <input class="new-todo"
           autocomplete="off"
           placeholder="질문을 입력하세요.(단답식)">
    <input class="new-todo"
           autocomplete="off"
           placeholder="답변을 입력하세요.">
  </div>
</template>

<script>

import Vue from 'vue'

export default {
  name: 'singletext',
  methods: {
    
  },
  data() {
    return {
      text: 'singletext'
    }
  }
}

</script>

<style>



</style>

