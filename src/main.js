import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import pinia from "./stores/index";
import i18n from "./locales/i18n";
import Varlet from '@varlet/ui'

import "./styles/index.scss";
import '@varlet/ui/es/style'

const app = createApp(App);

app.use(Varlet);
app.use(pinia);
app.use(router);
app.use(i18n);

app.mount("#app");
