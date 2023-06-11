import VirtualList from './components/VirtualList.vue'
import { createApp } from 'vue'
import App from '../example/index.vue'

createApp(App).mount('#app')

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.component('VirtualList', VirtualList)
}

VirtualList.install = function(Vue){
    Vue.component(VirtualList.name, VirtualList)
}

export default VirtualList;