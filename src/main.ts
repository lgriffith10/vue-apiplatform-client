import { createApp } from 'vue'
import App from '@/App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// Router
import { router } from '@/router';

// Styles
import '@/styles/main.scss';

createApp(App)
    .use(ElementPlus)
    .use(router)
    .mount('#app');
