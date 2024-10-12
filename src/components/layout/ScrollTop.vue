<template>
  <!-- TOTOP -->
  <div class="progressbar">
    <a href="#"><span class="text" style="bottom: 152.688px">To Top</span></a>
    <span class="line"></span>
  </div>
  <!-- /TOTOP -->
</template>

<script>
import { scrollTop } from "@/utilits";

export default {
  name: "ScrollTop",
  mounted() {
    window.addEventListener("scroll", scrollTop);
  },
};
</script>
