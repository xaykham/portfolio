<template>
  <PreLoader />
  <div class="dizme_tm_all_wrap" data-magic-cursor="show">
    <div class="dizme_tm_intro">
      <div class="dizme_tm_intro_fixed_price">
        <span class="anim"></span>
        <span class="anim"></span>
        <span class="anim"></span>
        <a href="#" target="_blank" class="pricing-info anim">-20%</a>
      </div>

      <div class="short_info">
        <img src="img/logo/logo.png" alt="" />
        <h3>Personal Portfolio Template</h3>
      </div>
      <span class="intro_line"></span>
      <span class="intro_line_2"></span>
      <span class="intro_line_3"></span>
      <div class="demos">
        <div class="left">
          <div class="desc">
            <img src="img/intro/light.png" alt="" />
            <h3 class="title">Light Demo</h3>
          </div>
          <a class="intro_link" href="/" target="_blank"></a>
        </div>
        <div class="right">
          <div class="desc">
            <img src="img/intro/dark.png" alt="" />
            <h3 class="title">Dark Demo</h3>
          </div>
          <a class="intro_link" href="/dark" target="_blank"></a>
        </div>
      </div>
    </div>
    <Cursor />
  </div>
</template>

<script>
export default {
  name: "IntroView",
  components: {},
};
</script>

<style scoped>
@import "../../public/css/intro.css";
</style>
