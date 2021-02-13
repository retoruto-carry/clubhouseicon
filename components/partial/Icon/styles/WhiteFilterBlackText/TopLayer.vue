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
    <text
      ref="showTextBox"
      x="50"
      y="50"
      text-anchor="middle"
      dominant-baseline="central"
      :style="`font-size: ${fontSize}px; fill: #000; font-weight: bold; opacity: 0.7`"
      font-family="sans-serif"
    >
      {{ text }}
    </text>
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
      fontSize: 20,
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
