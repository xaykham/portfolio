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
                    <VueJsCounter end="18"></VueJsCounter>
                  </h3>
                  <span class="name">Years of<br />Success</span>
                </div>
              </div>
              <div class="numbers project">
                <div class="wrapper">
                  <h3 style="display: flex">
                    <VueJsCounter as="span" end="9"></VueJsCounter>K
                  </h3>
                  <span class="name">Total<br />Projects</span>
                </div>
              </div>
            </div>
          </div>
          <div class="right">
            <div class="title wow fadeInUp" data-wow-duration="1s">
              <span>I'm a Designer</span>
              <h3>I Can Design Anything You Want</h3>
            </div>
            <div class="text wow fadeInUp" data-wow-duration="1s">
              <p>
                Hello there! I'm a web designer, and I'm very passionate and
                dedicated to my work. With 20 years experience as a professional
                web developer, I have acquired the skills and knowledge
                necessary to make your project a success. I enjoy every step of
                the design process, from discussion and collaboration.
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
