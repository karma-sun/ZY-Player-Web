import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import messages from '@intlify/vite-plugin-vue-i18n/messages'
import {
  ElContainer,
  ElHeader,
  ElMain,
  ElRow,
  ElCol,
  ElIcon,
  ElButton,
  ElInput,
} from 'element-plus'

const i18n = createI18n({
  locale: 'en',
  messages
})

const app = createApp(App)
app.use(i18n)
app.use(ElContainer).use(ElHeader).use(ElMain).use(ElRow).use(ElCol).use(ElIcon).use(ElButton).use(ElInput)
app.mount('#app')