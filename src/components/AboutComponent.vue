<template>
  <div class="dizme_tm_section" id="about">
    <div class="dizme_tm_about">
      <div class="container">
        <div class="wrapper">
          <div class="left">
            <div class="image">
              <img :src="`/img/about/${dark ? 2 : 1}.jpg`" alt="" />
              <div class="numbers year">
                <div class="wrapper">
                  <h3>
                    <VueJsCounter end="11"></VueJsCounter>
                  </h3>
                  <span class="name">Years of<br />Success</span>
                </div>
              </div>
              <div class="numbers project">
                <div class="wrapper">
                  <h3 style="display: flex">
                    <VueJsCounter as="span" end="40"></VueJsCounter>
                  </h3>
                  <span class="name">Total<br />Projects</span>
                </div>
              </div>
            </div>
          </div>
          <div class="right">
            <div class="title wow fadeInUp" data-wow-duration="1s">
              <span>Hi, I’m Xaykham</span>
              <h3>Your Partner in Creative Design.</h3>
            </div>
            <div class="text wow fadeInUp" data-wow-duration="1s">
              <p>
                With a passion for design and a commitment to bringing fresh ideas to life, I’m here to help your brand make a lasting impression. Whether you’re looking to develop a new identity or revamp your digital presence, I combine strategy, creativity, and technical skills to deliver results that matter.
              </p>
            </div>
            <div class="title wow fadeInUp" data-wow-duration="1s">
              <h4>What Drives My Work</h4>
            </div>
            <div class="text wow fadeInUp" data-wow-duration="1s">
              <p>
                I believe great design tells a story and connects people. My goal is to help you share your story with clarity and creativity, making your brand both memorable and meaningful.
              </p>
            </div>
            <div class="dizme_tm_button wow fadeInUp" data-wow-duration="1s">
              <a class="anchor" href="#contact"><span>Hire Me</span></a>
            </div>
          </div>
        </div>
      </div>
      <div class="brush_1 wow fadeInLeft" data-wow-duration="1s">
        <img src="/img/brushes/about/1.png" alt="" />
      </div>
      <div class="brush_2 wow fadeInRight" data-wow-duration="1s">
        <img src="/img/brushes/about/2.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import VueJsCounter from "vue-js-counter";
export default {
  name: "AboutComponent",
  components: { VueJsCounter },
  props: {
    dark: { type: Boolean },
  },
};
</script>
