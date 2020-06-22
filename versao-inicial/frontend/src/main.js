import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'
import store from './config/store'
import './config/msgs'
import router from './config/router'
// import axios from 'axios'
import './config/bootstrap.js'

Vue.config.productionTip = false

// console.log(axios.defaults.headers.common);
// require('axios').defaults.header.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NiwibmFtZSI6IkFkbWluIiwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNTkxNjI0NzIzLCJleHAiOjE1OTE4ODM5MjN9.GQTh0zPYcZ2LGU5nmbxsQy5gYJwslpZs56vBy-vV5B0'
// require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NiwibmFtZSI6IkFkbWluIiwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNTkyODUwMDIwLCJleHAiOjE1OTMxMDkyMjB9.n5OZUfLJbsawSHxnJ3cYNl8VFocBJcik-TaV5R50TCY'
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')