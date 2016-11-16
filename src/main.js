import Vue from 'vue'


import store from './store'
import App from './components/App.vue'

new Vue({
    store, // inject store to all children
    el: '#inputbox',
    render: h => h(App)
})



import Picker from './components/DatePicker.vue'
new Vue({
    el: '#datepicker',
    render: h => h(Picker)
})

import Popup from './components/Popup.vue'
new Vue({
    el: '#bottomPop',
    render: h => h(Popup)
})
