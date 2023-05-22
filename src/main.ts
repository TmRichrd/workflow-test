import { createApp } from 'vue'
import './style.css'
// import App from './App'
import Home from './Home'
import i18n from "./i18n/index.ts"
const app = createApp(Home)
app.use(i18n)
app.mount('#yjzz-app')
