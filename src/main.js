import './index.css'
import { createApp } from 'vue'
import App from './App.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFile, faDollar, faNoteSticky, faThumbsDown, faLanguage } from '@fortawesome/free-solid-svg-icons'


library.add(faFile, faDollar, faNoteSticky, faThumbsDown, faLanguage)

createApp(App).component('font-awesome-icon',FontAwesomeIcon).mount('#app')

