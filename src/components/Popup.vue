<template>
  <section class="main">
    <mt-actionsheet
      :actions="actions"
      v-model="sheetVisible">
    </mt-actionsheet>
    <ul class="filters">
        <li>
          <a :href="'#/'" @click="openPop()">openPop</a>
        </li>
      </ul>
  </section>
</template>

<script>

import Vue from 'vue'

import { Actionsheet } from 'mint-ui';

Vue.component(Actionsheet.name, Actionsheet);

export default {
  methods: {
    openPop() {
      this.sheetVisible = true
    },
    callback(type) {
      alert(type);
    }
  },
  data() {
    return {
      cancelText: "CANCEL",
      sheetVisible : false,
      actions: [
        { name: "MENU 1", method: (n) => { this.callback(0) } }, 
        { name: "MENU 2", method: () => { this.callback(1)  } },
        { name: "MENU 3", method: () => { this.callback(2) } }
      ]
    }
  }
}

</script>

<style>


.picker-slot .hipen{
  width: 10px;
}
.picker-item .date {
  width: 150px;
}
.picker-item .hour {
  width: 70px;
}
.picker-item .min {
  width: 70px;
}

</style>

