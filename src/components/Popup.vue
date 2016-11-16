<template>
  <section class="main">
    <mt-popup
      v-model="popupVisible"
      position="bottom">
    </mt-popup>
    <ul class="filters">
        <li>
          <a :href="'#/'" @click="openPop()">openPop</a>
        </li>
      </ul>
  </section>
</template>

<script>

import Vue from 'vue'

import { Popup } from 'mint-ui';

Vue.component(Popup.name, Popup);

export default {
  methods: {
    openPop() {
      this.popupVisible = true;
    }
  },
  data() {
    return {
      popupVisible: false
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

