import Vue from 'vue'

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css'
import less from 'less'

import App from './App.vue'

Vue.use(Antd)
Vue.use(less)

Vue.config.productionTip = false

new Vue({
    render: h => h(App)
}).$mount('#app')