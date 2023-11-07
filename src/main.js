import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import store from '@/stores/store'
import vSelect from "vue-select";

const app = createApp(App)
app.component("v-select", vSelect)
app.use(PrimeVue)
app.use(store)
app.use(router)

router.isReady().then(() => {
  app.mount("#app");
});
