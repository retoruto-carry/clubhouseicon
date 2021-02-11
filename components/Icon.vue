<template>
  <svg
    id="svg"
    ref="icon"
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="width"
    viewBox="0 0 100 100"
  >
    <defs>
      <path
        id="path01"
        d="M100 50C100 85.7361 85.7361 100 50 100C14.2639 100 0 85.7361 0 50C0 14.2639 14.2639 0 50 0C85.7361 0 100 14.2639 100 50Z"
      />
      <clipPath id="clip01">
        <use xlink:href="#path01" />
      </clipPath>
    </defs>
    <use xlink:href="#path01" :fill="borderColor" />
    <svg
      :x="borderWidth"
      :y="borderWidth"
      :width="100 - borderWidth * 2"
      :height="100 - borderWidth * 2"
      viewBox="0 0 100 100"
    >
      <image
        class="image"
        :xlink:href="url"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid slice"
        clip-path="url(#clip01)"
      />
      <use xlink:href="#path01" fill="#000000" fill-opacity="0.25" />
    </svg>
    <text
      x="50"
      y="50"
      text-anchor="middle"
      dominant-baseline="central"
      style="font-size: 20px; fill: #fff; font-weight: bold"
      font-family="sans-serif"
    >
      {{ text }}
    </text>
  </svg>
</template>

<script lang="ts">
import Vue from 'vue'
const ssap = require('save-svg-as-png')

export default Vue.extend({
  props: {
    text: {
      type: String,
      default: '',
    },
    borderColor: {
      type: String,
      default: '',
    },
    url: {
      type: String,
      default: '',
    },
    width: {
      type: Number,
      default: 100,
    },
    borderWidth: {
      type: Number,
      default: 8,
    },
  },
  methods: {
    async downloadImage() {
      await ssap.saveSvgAsPng(this.$refs.icon, 'download.png', {
        scale: 10,
      })
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
