import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import mdiVue from 'mdi-vue/v3'
import * as mdijs from '@mdi/js'
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import * as labsComponents from 'vuetify/labs/components'
// import { VCalendar } from 'vuetify/labs/VCalendar'
import { createStore } from 'vuex'
import { createI18n } from 'vue-i18n'


import { locale as en } from './common/config/i18n/en'
import { locale as tw } from './common/config/i18n/tw'

let messages = {}
messages = { ...messages, en, tw }
const lang = localStorage.getItem('language') || 'tw'
const i18n = createI18n({
  locale: lang,
  messages,
  
})



const store = createStore({
  state () {
    return {
      count: 0
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

const app = createApp(App)
const vuetify = createVuetify({                                                              
    components,
    directives,
    labsComponents,
  })


app.use(router)
app.use(vuetify)
app.use(mdiVue, {
    icons: mdijs
  })
app.use(store)
app.use(i18n)
app.mount('#app')
