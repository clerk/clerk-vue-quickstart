import { createApp } from 'vue'
import './styles.css'
import App from './App.vue'
import { clerkPlugin } from '@clerk/vue'

const app = createApp(App)
app.use(clerkPlugin, {
  publishableKey: import.meta.env.VITE_CLERK_PUBLISHABLE_KEY,
})
app.mount('#app')
