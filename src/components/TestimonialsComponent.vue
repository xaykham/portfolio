<template>
  <div class="dizme_tm_section">
    <div class="dizme_tm_testimonials">
      <div class="dizme_tm_main_title" data-align="center">
        <span>Testimonials</span>
        <h3>What My Clients Say</h3>
        <p>
          Most common methods for designing websites that work well on desktop
          is responsive and adaptive design
        </p>
      </div>
      <div class="list_wrapper">
        <div class="total">
          <div class="in">
            <swiper
              :pagination="{ clickable: true, el: '.owl-dots' }"
              :modules="modules"
              class="owl-carousel owl-theme"
            >
              <swiper-slide>
                <div class="icon" v-html="testimonialIcon"></div>
                <div class="text">
                  <p>
                    I rarely like to write reviews, but the Marketify team truly
                    deserve a standing ovation for their customer support,
                    customisation and most importantly, friendliness and
                    professionalism. Many thanks once again for everything and
                    hope that I get to deal with you again in the near future.
                  </p>
                </div>
                <div class="short">
                  <div class="image">
                    <div
                      class="main"
                      data-img-url="/img/testimonials/4.jpg"
                    ></div>
                  </div>
                  <div class="detail">
                    <h3>Mike Anderson</h3>
                    <span>Vivaco Studio</span>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="icon" v-html="testimonialIcon"></div>
                <div class="text">
                  <p>
                    Really the Code Quality, Customer Support, and design are
                    awesome and its good support they are giving. They give an
                    instant solution to our needs. Really awesome. I will
                    strongly recommend to my friends. Simply amazing team and
                    amazing theme! Thank you from United States of America!
                  </p>
                </div>
                <div class="short">
                  <div class="image">
                    <div
                      class="main"
                      data-img-url="/img/testimonials/3.jpg"
                    ></div>
                  </div>
                  <div class="detail">
                    <h3>Keita Smith</h3>
                    <span>ABC Group</span>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="icon" v-html="testimonialIcon"></div>
                <div class="text">
                  <p>
                    Loved the template design, documentation, customizability
                    and the customer support from Marketify team! I am a noob in
                    programming with very little knowledge about coding but the
                    Marketify team helped me to launch my resume website
                    successfully. Much recommended!
                  </p>
                </div>
                <div class="short">
                  <div class="image">
                    <div
                      class="main"
                      data-img-url="/img/testimonials/6.jpg"
                    ></div>
                  </div>
                  <div class="detail">
                    <h3>Alan Walker</h3>
                    <span>Web Designer</span>
                  </div>
                </div>
              </swiper-slide>
            </swiper>
            <div class="owl-dots"></div>
          </div>
          <div class="left_details">
            <div
              class="det_image one wow fadeIn"
              data-wow-duration="1s"
              data-img-url="/img/testimonials/2.jpg"
            ></div>
            <div
              class="det_image two wow fadeIn"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
              data-img-url="/img/testimonials/1.jpg"
            ></div>
            <div
              class="det_image three wow fadeIn"
              data-wow-duration="1s"
              data-wow-delay="0.4s"
              data-img-url="/img/testimonials/3.jpg"
            ></div>
            <div
              class="det_image four wow fadeIn"
              data-wow-duration="1s"
              data-wow-delay="0.6s"
              data-img-url="/img/testimonials/4.jpg"
            ></div>
            <span class="circle green animPulse"></span>
            <span class="circle yellow animPulse"></span>
            <span class="circle border animPulse"></span>
          </div>
          <div class="right_details">
            <div
              class="det_image one wow fadeIn"
              data-wow-duration="1s"
              data-img-url="/img/testimonials/5.jpg"
            ></div>
            <div
              class="det_image two wow fadeIn"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
              data-img-url="/img/testimonials/6.jpg"
            ></div>
            <div
              class="det_image three wow fadeIn"
              data-wow-duration="1s"
              data-wow-delay="0.4s"
              data-img-url="/img/testimonials/7.jpg"
            ></div>
            <span class="circle yellow animPulse"></span>
            <span class="circle purple animPulse"></span>
            <span class="circle border animPulse"></span>
          </div>
        </div>
      </div>
      <div class="brush_1 wow fadeInRight" data-wow-duration="1s">
        <img src="/img/brushes/testimonials/1.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import { testimonialIcon } from "@/svg";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
export default {
  name: "TestimonialsComponent",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      testimonialIcon,
    };
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
};
</script>
