import "swiper/css";
// import "swiper/css/pagination";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "/public/css/custom.css";
import "/public/css/dark.css";
import "/public/css/plugins.css";
import "/public/css/style.css";

createApp(App).use(router).mount("#app");
