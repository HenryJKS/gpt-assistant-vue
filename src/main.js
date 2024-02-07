import './index.css'
import { createApp } from 'vue'
import App from './App.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFile, faDollar } from '@fortawesome/free-solid-svg-icons'


library.add(faFile, faDollar)

createApp(App).component('font-awesome-icon',FontAwesomeIcon).mount('#app')

