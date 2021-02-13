<template>
  <svg>
    <text
      ref="measurementTextBox"
      x="50"
      y="50"
      text-anchor="middle"
      dominant-baseline="central"
      :style="`font-size: 20px; fill: #000; font-weight: bold; opacity: 0`"
      font-family="sans-serif"
    >
      {{ text }}
    </text>
    <svg :x="20" :y="15" :width="60" :height="100" viewBox="0 0 100 100">
      <rect
        width="100"
        :height="fontSize + 14"
        preserveAspectRatio="xMidYMid slice"
        x="0"
        y="0"
        rx="8"
        fill="black"
        fill-opacity="0.6"
      />
      <text
        ref="showTextBox"
        x="50"
        :y="(fontSize + 14) / 2"
        text-anchor="middle"
        dominant-baseline="central"
        :style="`font-size: ${fontSize}px; fill: #fff; font-weight: bold;`"
        font-family="sans-serif"
      >
        {{ text }}
      </text>
    </svg>
  </svg>
</template>

<script lang="ts">
import Vue from 'vue'

type LocalData = {
  fontSize: number
}

export default Vue.extend({
  props: {
    text: {
      type: String,
      default: '',
    },
  },
  data(): LocalData {
    return {
      fontSize: 16,
    }
  },
  mounted() {
    this.adjustFontSize()
  },
  updated() {
    this.adjustFontSize()
  },
  methods: {
    adjustFontSize() {
      if (this.text === '') return
      const measurementTextBox = this.$refs.measurementTextBox as any
      const showTextBox = this.$refs.showTextBox as any
      const measurementTextBoxBBox = measurementTextBox.getBBox()
      const showTextBoxBBox = showTextBox.getBBox()
      if (measurementTextBoxBBox.width > 98) {
        if (showTextBoxBBox.width > 98) this.fontSize = this.fontSize - 2
      } else {
        this.fontSize = 20
      }
    },
  },
})
</script>
