import { createApp } from 'vue'
import App from './App.vue'
import mycomp from '../packages/index'
createApp(App).use(mycomp).mount('#app')
