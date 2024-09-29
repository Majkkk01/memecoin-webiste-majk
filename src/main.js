import './assets/main.css'
import { createApp } from 'vue';
import App from './App.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faXTwitter, faTelegram } from '@fortawesome/free-brands-svg-icons';  // Import ikon pro značky
import { faMapPin, faClock, faAddressBook, faPhone, faEnvelope, faBars } from '@fortawesome/free-solid-svg-icons'; // Načteme ikonu mapového pinu

library.add(faXTwitter, faTelegram, faMapPin, faClock, faAddressBook, faPhone, faEnvelope, faBars );

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)  // Zaregistruje komponentu font-awesome-icon
  .mount('#app');
