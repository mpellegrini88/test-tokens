import { App } from 'vue';
import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Dialog from 'primevue/dialog';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import Card from 'primevue/card';
import Dropdown from 'primevue/dropdown';

// Qui aggiungi tutti i componenti che ti servono
export default {
  install(app: App) {
    app.use(PrimeVue);
    app.use(ToastService);
    
    // Registra i componenti globalmente
    app.component('Button', Button);
    app.component('Card', Card);
    app.component('InputText', InputText);
    app.component('Dialog', Dialog);
    app.component('Toast', Toast);
    app.component('Dropdown', Dropdown);
  }
};
