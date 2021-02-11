<template>
  <div>
    <!-- クリップパス用SVG -->
    <svg width="0" height="0" style="position: absolute; top: 0; left: 0">
      <clipPath id="clip01">
        <path
          d="M100 50C100 85.7361 85.7361 100 50 100C14.2639 100 0 85.7361 0 50C0 14.2639 14.2639 0 50 0C85.7361 0 100 14.2639 100 50Z"
        />
      </clipPath>
    </svg>
    <!-- 実際の表示用SVG -->
    <svg width="300" height="300" viewBox="0 0 100 100">
      <image
        xlink:href="https://i.gyazo.com/94bcbe6f93fb521dec574bed7f919f6a.jpg"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid slice"
        clip-path="url(#clip01)"
      />
      <path
        fill="#000000"
        fill-opacity="0.3"
        d="M100 50C100 85.7361 85.7361 100 50 100C14.2639 100 0 85.7361 0 50C0 14.2639 14.2639 0 50 0C85.7361 0 100 14.2639 100 50Z"
      />
      <text
        x="50"
        y="50"
        text-anchor="middle"
        dominant-baseline="central"
        style="font-size: 20px; fill: #fff"
      >
        聞き専
      </text>
    </svg>
    <canvas id="canvas"></canvas>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  methods: {
    download() {
      // TODO
    },
  },
})
</script>

<style scoped>
.preview {
  width: 100px;
  height: 100px;
}
</style>
