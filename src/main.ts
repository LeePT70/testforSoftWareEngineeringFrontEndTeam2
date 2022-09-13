import { createApp } from 'vue'
import './style.css'
import "virtual:windi.css"
import App from './App.vue'
import router from "./router/index"
import PrimeVue from 'primevue/config';
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext'
import Menubar from 'primevue/menubar';
import ToastService from "primevue/toastservice";
import Message from 'primevue/message';
import Button from 'primevue/button';

import "primeflex/primeflex.css";
import "primevue/resources/themes/lara-light-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

const app = createApp(App);
app.component('InputText', InputText);
app.component('Menubar', Menubar);
app.component('Dialog', Dialog);
app.component('ToastService', ToastService);
app.component('Message', Message);
app.component('Button', Button);

app.use(PrimeVue).use(router).mount("#app");
app.use(ToastService);