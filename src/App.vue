<template>
  <PreLoader />
  <router-view />
  <Cursor />
</template>

<script>
import Cursor from "./components/layout/Cursor.vue";
import PreLoader from "./components/layout/PreLoader.vue";
import {
  dataImage,
  portfolioHover,
  scroll_,
  stickyNav,
  wowJsAnimation,
} from "./utilits";

export default {
  name: "App",
  data() {
    return { dark: false };
  },
  mounted() {
    wowJsAnimation();
    window.addEventListener("scroll", stickyNav);
    window.addEventListener("scroll", scroll_);
    setTimeout(() => {
      dataImage();
      portfolioHover();
    }, 100);
  },
  components: { PreLoader, Cursor },
};
</script>
