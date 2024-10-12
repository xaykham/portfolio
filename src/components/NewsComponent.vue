<template>
  <div class="dizme_tm_section" id="blog">
    <div class="dizme_tm_news">
      <div class="container">
        <div class="dizme_tm_main_title" data-align="center">
          <span>From My Blog</span>
          <h3>Our Recent Updates, Blog, Tips, Tricks &amp; More</h3>
        </div>
        <div class="news_list">
          <ul>
            <li class="wow fadeInUp" data-wow-duration="1s">
              <div class="list_inner">
                <div class="image">
                  <img src="/img/thumbs/42-29.jpg" alt="" />
                  <div class="main" data-img-url="/img/news/1.jpg"></div>
                  <div class="date">
                    <h3>23</h3>
                    <span>Dec</span>
                  </div>
                  <a
                    class="dizme_tm_full_link"
                    href="#"
                    @click.prevent="active = 1"
                  ></a>
                </div>
                <div class="details">
                  <span class="category"
                    ><a href="#" @click.prevent="active = 1"
                      >Web Development</a
                    ></span
                  >
                  <h3 class="title">
                    <a href="#" @click.prevent="active = 1"
                      >Jim Morisson Says when the musics over turn off the
                      light</a
                    >
                  </h3>
                </div>
              </div>
            </li>
            <li
              class="wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
            >
              <div class="list_inner">
                <div class="image">
                  <img src="/img/thumbs/42-29.jpg" alt="" />
                  <div class="main" data-img-url="/img/news/2.jpg"></div>
                  <div class="date">
                    <h3>23</h3>
                    <span>Dec</span>
                  </div>
                  <a
                    class="dizme_tm_full_link"
                    href="#"
                    @click.prevent="active = 2"
                  ></a>
                </div>
                <div class="details">
                  <span class="category"
                    ><a href="#" @click.prevent="active = 2">Branding</a></span
                  >
                  <h3 class="title">
                    <a href="#" @click.prevent="active = 2"
                      >How to be appreciated for your hard work as a
                      developer</a
                    >
                  </h3>
                </div>
              </div>
            </li>
            <li
              class="wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.4s"
            >
              <div class="list_inner">
                <div class="image">
                  <img src="/img/thumbs/42-29.jpg" alt="" />
                  <div class="main" data-img-url="/img/news/3.jpg"></div>
                  <div class="date">
                    <h3>23</h3>
                    <span>Dec</span>
                  </div>
                  <a
                    class="dizme_tm_full_link"
                    href="#"
                    @click.prevent="active = 3"
                  ></a>
                </div>
                <div class="details">
                  <span class="category"
                    ><a href="#" @click.prevent="active = 3"
                      >Social Media</a
                    ></span
                  >
                  <h3 class="title">
                    <a href="#" @click.prevent="active = 3"
                      >How designers and developers can collaborate better</a
                    >
                  </h3>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="brush_1 wow zoomIn" data-wow-duration="1s">
        <img src="/img/brushes/news/1.png" alt="" />
      </div>
      <div class="brush_2 wow zoomIn" data-wow-duration="1s">
        <img src="/img/brushes/news/2.png" alt="" />
      </div>
    </div>
  </div>
  <div :class="active == 1 ? '' : 'news_hidden_details'">
    <ModalBox :close="close">
      <div class="news_popup_informations">
        <div class="image">
          <img src="img/thumbs/4-2.jpg" alt="" />
          <div
            class="main"
            data-img-url="img/news/1.jpg"
            style="background-image: url('img/news/1.jpg')"
          ></div>
        </div>
        <div class="details">
          <h3>Jim Morisson Says when the musics over turn off the light</h3>
          <span><a href="#">Web Development</a></span>
          <div></div>
        </div>
        <div class="text">
          <p>
            Dizme is a leading web design agency with an award-winning design
            team that creates innovative, effective websites that capture your
            brand, improve your conversion rates, and maximize your revenue to
            help grow your business and achieve your goals.
          </p>
          <p>
            In today’s digital world, your website is the first interaction
            consumers have with your business. That's why almost 95 percent of a
            user’s first impression relates to web design. It’s also why web
            design services can have an immense impact on your company’s bottom
            line.
          </p>
          <p>
            That’s why more companies are not only reevaluating their website’s
            design but also partnering with Kura, the web design agency that’s
            driven more than $2.4 billion in revenue for its clients. With over
            50 web design awards under our belt, we're confident we can design a
            custom website that drives sales for your unique business.
          </p>
        </div>
      </div>
    </ModalBox>
  </div>
  <div :class="active == 2 ? '' : 'news_hidden_details'">
    <ModalBox :close="close">
      <div class="news_popup_informations">
        <div class="image">
          <img src="img/thumbs/4-2.jpg" alt="" />
          <div
            class="main"
            data-img-url="img/news/2.jpg"
            style="background-image: url('img/news/2.jpg')"
          ></div>
        </div>
        <div class="details">
          <h3>How to be appreciated for your hard work as a developer</h3>
          <span><a href="#">Branding</a></span>
          <div></div>
        </div>
        <div class="text">
          <p>
            Dizme is a leading web design agency with an award-winning design
            team that creates innovative, effective websites that capture your
            brand, improve your conversion rates, and maximize your revenue to
            help grow your business and achieve your goals.
          </p>
          <p>
            In today’s digital world, your website is the first interaction
            consumers have with your business. That's why almost 95 percent of a
            user’s first impression relates to web design. It’s also why web
            design services can have an immense impact on your company’s bottom
            line.
          </p>
          <p>
            That’s why more companies are not only reevaluating their website’s
            design but also partnering with Kura, the web design agency that’s
            driven more than $2.4 billion in revenue for its clients. With over
            50 web design awards under our belt, we're confident we can design a
            custom website that drives sales for your unique business.
          </p>
        </div>
      </div>
    </ModalBox>
  </div>
  <div :class="active == 3 ? '' : 'news_hidden_details'">
    <ModalBox :close="close">
      <div class="news_popup_informations">
        <div class="image">
          <img src="img/thumbs/4-2.jpg" alt="" />
          <div
            class="main"
            data-img-url="img/news/3.jpg"
            style="background-image: url('img/news/3.jpg')"
          ></div>
        </div>
        <div class="details">
          <h3>How designers and developers can collaborate better</h3>
          <span><a href="#">Social Media</a></span>
          <div></div>
        </div>
        <div class="text">
          <p>
            Dizme is a leading web design agency with an award-winning design
            team that creates innovative, effective websites that capture your
            brand, improve your conversion rates, and maximize your revenue to
            help grow your business and achieve your goals.
          </p>
          <p>
            In today’s digital world, your website is the first interaction
            consumers have with your business. That's why almost 95 percent of a
            user’s first impression relates to web design. It’s also why web
            design services can have an immense impact on your company’s bottom
            line.
          </p>
          <p>
            That’s why more companies are not only reevaluating their website’s
            design but also partnering with Kura, the web design agency that’s
            driven more than $2.4 billion in revenue for its clients. With over
            50 web design awards under our belt, we're confident we can design a
            custom website that drives sales for your unique business.
          </p>
        </div>
      </div>
    </ModalBox>
  </div>
</template>

<script>
import ModalBox from "./popup/ModalBox.vue";
export default {
  name: "NewsComponent",
  components: { ModalBox },
  data() {
    return {
      active: 0,
    };
  },
  methods: {
    close() {
      this.active = 0;
    },
  },
};
</script>
