<template>
  <section class="main">
    
    <template v-for="component in components" :component="component">
      
      <radiolist
        class="block"
        v-if="component.componentType=='radio'"
        :key="component.componentId"
        :component="component"></radiolist>

      <checklist 
        class="block"
        v-if="component.componentType=='checkbox'"
        :key="component.componentId"
        :component="component"></checklist>

      <singletext
        class="block"
        v-if="component.componentType=='single'" 
        :key="component.componentId"
        :component="component"></singletext>

      <multitext
        class="block"
        v-if="component.componentType=='multi'" 
        :key="component.componentId"
        :component="component"></multitext>

    </template>

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
  props: [
    'components'
  ],
  computed: {
  },
  
  methods: {
    MoveUp() {
    },
    MoveDown() {
    }
  }
}
</script>


<style>

.main .block {
  margin-top: 5px;
  border: 2px solid #C4DDDF;
}
.main .title {
  font-size: 20px;
}

</style>