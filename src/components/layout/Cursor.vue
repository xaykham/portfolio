<template>
  <!-- CURSOR -->
  <div class="mouse-cursor cursor-outer"></div>
  <div class="mouse-cursor cursor-inner"></div>
  <!-- /CURSOR -->
</template>

<script>
import { customCursor } from "@/utilits";

export default {
  name: "CursorVue",
  mounted() {
    customCursor();
  },
};
</script>
