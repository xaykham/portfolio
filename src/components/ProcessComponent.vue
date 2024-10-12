<template>
  <div class="dizme_tm_section" id="process">
    <div class="dizme_tm_process">
      <div class="container">
        <div class="list">
          <ul>
            <li class="wow fadeInUp" data-wow-duration="1s">
              <div class="list_inner">
                <div class="icon">
                  <span v-html="dark ? pixelPerfectDark : pixelPerfectLight">
                  </span>
                </div>
                <div class="title">
                  <h3>Pixel Perfect</h3>
                </div>
                <div class="text">
                  <p>
                    Most common methods for designing websites that work well on
                    desktop is responsive and adaptive design.
                  </p>
                </div>
              </div>
            </li>
            <li
              class="wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
            >
              <div class="list_inner">
                <div class="icon">
                  <span v-html="dark ? highQualityDark : highQualityLight">
                  </span>
                </div>
                <div class="title">
                  <h3>High Quality</h3>
                </div>
                <div class="text">
                  <p>
                    Most common methods for designing websites that work well on
                    desktop is responsive and adaptive design.
                  </p>
                </div>
              </div>
            </li>
            <li
              class="wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.4s"
            >
              <div class="list_inner">
                <div class="icon">
                  <span v-html="dark ? awesomeIdeaDark : awesomeIdeaLight">
                  </span>
                </div>
                <div class="title">
                  <h3>Awesome Idea</h3>
                </div>
                <div class="text">
                  <p>
                    Most common methods for designing websites that work well on
                    desktop is responsive and adaptive design
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  awesomeIdeaDark,
  awesomeIdeaLight,
  highQualityDark,
  highQualityLight,
  pixelPerfectDark,
  pixelPerfectLight,
} from "@/svg";
export default {
  name: "ProcessComponent",
  data() {
    return {
      pixelPerfectLight,
      highQualityDark,
      awesomeIdeaDark,
      pixelPerfectDark,
      awesomeIdeaLight,
      highQualityLight,
    };
  },
  components: {},
  props: {
    dark: { type: Boolean },
  },
};
</script>
