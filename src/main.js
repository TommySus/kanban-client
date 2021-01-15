import Vue from "vue"
import App from "./App.vue"
import GoogleAuth from 'vue-google-oauth2'

new Vue ({
    render: h => h(App)
}).$mount('#app')

const gauthOption = {
    clientId: '772405945328-qba5tdrijj0k8mjd6j50dgq8k2oi8ihq.apps.googleusercontent.com',
    scope: 'profile email',
    prompt: 'select_account'
  }
Vue.use(GoogleAuth, gauthOption)