import { createApp } from '/node_modules/.vite/deps/vue.js?v=c0b88bc4'
import { createPinia } from '/node_modules/.vite/deps/pinia.js?v=c0b88bc4'

import router from '/src/router.js?t=1659625743773';
import App from '/src/App.vue'

import '/src/index.css?t=1659625743773'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
