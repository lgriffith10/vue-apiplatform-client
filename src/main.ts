import { createApp } from 'vue'
import App from '@/App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// Router
import { router } from '@/router';

// Styles
import '@/styles/main.scss';

// Store
import { createPinia } from 'pinia';
import { useValorantStore } from './store';

const pinia = createPinia();

const app = createApp(App)
    .use(ElementPlus)
    .use(router)
    .use(pinia)


router.afterEach((to, from) => {
    const valorantStore = useValorantStore();

    if (to.path !== '/login') {
        return;
    }

    valorantStore.setAgents();
})
    
app.mount('#app');
