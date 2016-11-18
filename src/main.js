import Vue from 'vue'
import App from './App.vue'
import store from './store'
import { getForm } from './store/actions'


// Vue.config.debug = true

getForm(store);

new Vue({
    el: '#app',
    store,
    render: h => h(App)
})


