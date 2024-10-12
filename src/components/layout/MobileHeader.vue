<template>
  <div class="dizme_tm_mobile_menu">
    <div class="mobile_menu_inner">
      <div class="mobile_in">
        <div class="logo">
          <a href="#"
            ><img :src="`img/logo/${dark ? 'dark' : 'logo'}.png`" alt=""
          /></a>
        </div>
        <div class="trigger" @click="activeToggle()">
          <div
            class="hamburger hamburger--slider"
            :class="active ? 'is-active' : ''"
          >
            <div class="hamburger-box">
              <div class="hamburger-inner"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="dropdown" :style="{ display: active ? 'block' : 'none' }">
      <div class="dropdown_inner">
        <ul class="anchor_nav">
          <li class="current"><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#service">Service</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#contact">Contact</a></li>
          <li class="download_cv">
            <a href="img/cv/1.jpg" download><span>Download CV</span></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MobileHeader",
  data() {
    return {
      active: false,
    };
  },
  methods: {
    activeToggle() {
      this.active = !this.active;
    },
  },
  props: {
    dark: { type: Boolean },
  },
};
</script>
