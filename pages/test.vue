<template>
  <div>
    <svg id="svg" width="300" height="300" viewBox="0 0 100 100">
      <defs>
        <path
          id="path01"
          d="M100 50C100 85.7361 85.7361 100 50 100C14.2639 100 0 85.7361 0 50C0 14.2639 14.2639 0 50 0C85.7361 0 100 14.2639 100 50Z"
        />
        <clipPath id="clip01">
          <use xlink:href="#path01" />
        </clipPath>
      </defs>
      <image
        :href="url"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid slice"
        clip-path="url(#clip01)"
      />
      <use xlink:href="#path01" fill="#000000" fill-opacity="0.3" />
      <text
        x="50"
        y="50"
        text-anchor="middle"
        dominant-baseline="central"
        style="font-size: 20px; fill: #fff"
      >
        {{ text }}
      </text>
    </svg>
    <input
      type="file"
      accept="image/jpg,image/png,image/gif"
      @change="handleInputImage"
    />
    <input v-model="text" />
    <button
      class="rounded-full bg-brand-accent text-white py-2 px-8 text-md"
      @click="downloadImage"
    >
      <span class="mr-2">💾 </span>保存
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

type HTMLInputEvent = Event & {
  target: HTMLInputElement & EventTarget
}
type LocalData = {
  url: string
  text: string
}

const ssap = require('save-svg-as-png')

export default Vue.extend({
  data(): LocalData {
    return {
      url: '',
      text: '',
    }
  },
  methods: {
    downloadImage() {
      ssap.saveSvgAsPng(document.getElementById('svg'), 'download.png')
    },
    handleInputImage(e: HTMLInputEvent) {
      if (!e.target.files?.length) {
        return
      }
      const file = e.target.files[0]
      this.url = window.URL.createObjectURL(file)
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
