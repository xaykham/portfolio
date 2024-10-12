<template>
  <div
    class="mfp-bg mfp-fade mfp-ready"
    style="overflow: hidden"
    @click="close"
    :style="{
      display: modal ? 'block' : 'none',
    }"
  ></div>
  <div
    class="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-fade mfp-ready"
    :style="{
      display: modal ? 'block' : 'none',
    }"
  >
    <div
      class="mfp-container mfp-iframe-holder"
      :class="` ${name == 'img' ? 'mfp-img-container' : ''}`"
    >
      <div class="mfp-content">
        <div class="mfp-iframe-scaler">
          <iframe
            v-if="name === 'vimeo'"
            class="mfp-iframe"
            :src="`//player.vimeo.com/video/${src}?autoplay=1`"
            frameBorder="0"
            allowFullScreen
          />
          <iframe
            v-else-if="name === 'soundcloud'"
            class="mfp-iframe"
            :src="`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${src}&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`"
            frameBorder="0"
            allowFullScreen
          />
          <iframe
            v-else-if="name === 'youtube'"
            class="mfp-iframe"
            :src="`//www.youtube.com/embed/${src}?autoplay=1`"
            frameBorder="0"
            allowFullScreen
          />
          <img v-else-if="name === 'img'" class="mfp-img" :src="src" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MagnificPopUp",
  props: {
    name: { type: String },
    src: { type: String },
    modal: { type: Boolean },
    close: { type: Function },
  },
};
</script>
