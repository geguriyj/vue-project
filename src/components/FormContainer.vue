<template>
  <section class="main">
    <checklist>aa{{item}}</checklist>
  </section>
</template>

<script>

import checklist from './CheckList.vue'
import radiolist from './RadioList.vue'
import singletext from './SingleText.vue'
import multitext from './MultiText.vue'
import picker from './DatePicker.vue'


export default {
  name: 'formContainer',
  components: {
    checklist, radiolist, singletext, multitext, picker
  },
  props: ['item'],
  
  methods: {
    MoveUp() {
    },
    MoveDown() {
    }
  }
}
</script>
