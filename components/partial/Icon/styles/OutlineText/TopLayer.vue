<template>
  <svg>
    <text
      ref="measurementTextBox"
      x="50"
      y="50"
      text-anchor="middle"
      dominant-baseline="central"
      :style="`font-size: 22px; fill: #000; font-weight: bold; opacity: 0`"
      font-family="sans-serif"
    >
      {{ text }}
    </text>
    <defs>
      <text
        id="outText"
        x="50"
        y="50"
        text-anchor="middle"
        dominant-baseline="central"
        font-family="sans-serif"
        :style="baseStyle"
      >
        {{ text }}
      </text>
    </defs>
    <use
      ref="showTextBox"
      xlink:href="#outText"
      :style="outlineTextStyle"
    ></use>
    <use xlink:href="#outText" :style="innerTextStyle"></use>
  </svg>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { OutlineTextIconStyleOption } from '~/types/icon'

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
      type: Object as PropType<OutlineTextIconStyleOption>,
      required: true,
    },
  },
  data(): LocalData {
    return {
      fontSize: 20,
    }
  },
  computed: {
    baseStyle(): string {
      return `font-weight: bold; font-size: ${this.fontSize}px; stroke: ${this.styleOption.outlineColor}; fill: ${this.styleOption.fontColor}; letter-spacing: 0.2rem;`
    },
    outlineTextStyle(): string {
      return `stroke-width: ${
        this.fontSize / 4
      }px; paint-order: stroke; stroke-linejoin: round; font-size: ${
        this.fontSize
      }px;`
    },
    innerTextStyle(): string {
      return `stroke-width: 0; font-size: ${this.fontSize}px;`
    },
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
      if (measurementTextBoxBBox.width > 96) {
        if (showTextBoxBBox.width > 96) this.fontSize = this.fontSize - 2
      } else {
        this.fontSize = 20
      }
    },
  },
})
</script>
