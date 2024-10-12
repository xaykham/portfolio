<template>
  <div class="dizme_tm_section">
    <div class="dizme_tm_partners">
      <div class="container">
        <div class="partners_inner">
          <ul>
            <li class="wow fadeIn" data-wow-duration="1s">
              <div class="list_inner">
                <img
                  :src="`/img/partners/${dark ? 'light' : 'dark'}/1.png`"
                  alt=""
                />
                <a class="dizme_tm_full_link" a href="#"></a>
              </div>
            </li>
            <li class="wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s">
              <div class="list_inner">
                <img
                  :src="`/img/partners/${dark ? 'light' : 'dark'}/2.png`"
                  alt=""
                />
                <a class="dizme_tm_full_link" a href="#"></a>
              </div>
            </li>
            <li class="wow fadeIn" data-wow-duration="1s" data-wow-delay="0.4s">
              <div class="list_inner">
                <img
                  :src="`/img/partners/${dark ? 'light' : 'dark'}/3.png`"
                  alt=""
                />
                <a class="dizme_tm_full_link" a href="#"></a>
              </div>
            </li>
            <li class="wow fadeIn" data-wow-duration="1s" data-wow-delay="0.6s">
              <div class="list_inner">
                <img
                  :src="`/img/partners/${dark ? 'light' : 'dark'}/4.png`"
                  alt=""
                />
                <a class="dizme_tm_full_link" a href="#"></a>
              </div>
            </li>
            <li class="wow fadeIn" data-wow-duration="1s">
              <div class="list_inner">
                <img
                  :src="`/img/partners/${dark ? 'light' : 'dark'}/5.png`"
                  alt=""
                />
                <a class="dizme_tm_full_link" a href="#"></a>
              </div>
            </li>
            <li class="wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s">
              <div class="list_inner">
                <img
                  :src="`/img/partners/${dark ? 'light' : 'dark'}/6.png`"
                  alt=""
                />
                <a class="dizme_tm_full_link" a href="#"></a>
              </div>
            </li>
            <li class="wow fadeIn" data-wow-duration="1s" data-wow-delay="0.4s">
              <div class="list_inner">
                <img
                  :src="`/img/partners/${dark ? 'light' : 'dark'}/7.png`"
                  alt=""
                />
                <a class="dizme_tm_full_link" a href="#"></a>
              </div>
            </li>
            <li class="wow fadeIn" data-wow-duration="1s" data-wow-delay="0.6s">
              <div class="list_inner">
                <img
                  :src="`/img/partners/${dark ? 'light' : 'dark'}/8.png`"
                  alt=""
                />
                <a class="dizme_tm_full_link" a href="#"></a>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="brush_1 wow fadeInLeft" data-wow-duration="1s">
        <img src="/img/brushes/partners/1.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PartnersComponent",
  components: {},
  props: {
    dark: { type: Boolean },
  },
};
</script>
