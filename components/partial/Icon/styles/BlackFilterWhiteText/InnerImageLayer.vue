<template>
  <svg>
    <use xlink:href="#ellipse-path" fill="#000000" fill-opacity="0.2" />
    <text
      ref="measurementTextBox"
      x="50"
      y="50"
      text-anchor="middle"
      dominant-baseline="central"
      :style="`font-size: 25px; fill: #fff; font-weight: bold; opacity: 0`"
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
      :style="`font-size: ${fontSize}px; fill: ${styleOption.fontColor}; font-weight: bold`"
      font-family="sans-serif"
    >
      {{ text }}
    </text>
  </svg>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { BlackFilterWhiteTextIconStyleOption } from '~/types/icon'

type LocalData = {
  fontSize: number
}

export default Vue.extend({
  props: {
    text: {
      type: String,
      default: '',
    },
    styleOption: {
      type: Object as PropType<BlackFilterWhiteTextIconStyleOption>,
      required: true,
    },
  },
  data(): LocalData {
    return {
      fontSize: 25,
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
        this.fontSize = 25
      }
    },
  },
})
</script>
