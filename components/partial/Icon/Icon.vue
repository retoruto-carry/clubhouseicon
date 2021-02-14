<template>
  <svg
    id="svg"
    ref="icon"
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="width"
    viewBox="0 0 100 100"
    @click="handleClicked"
  >
    <defs>
      <path
        id="ellipse-path"
        d="M100 50C100 85.7361 85.7361 100 50 100C14.2639 100 0 85.7361 0 50C0 14.2639 14.2639 0 50 0C85.7361 0 100 14.2639 100 50Z"
      />
      <clipPath id="ellipse-clip">
        <use xlink:href="#ellipse-path" />
      </clipPath>
    </defs>
    <use xlink:href="#ellipse-path" :fill="borderColor" />
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
        clip-path="url(#ellipse-clip)"
      />
      <component
        :is="innerImageLayer"
        :text="text"
        :style-option="iconStyle.option"
      />
    </svg>
    <component :is="topLayer" :text="text" :style-option="iconStyle.option" />
  </svg>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import BlackFilterWhiteTextInnerImageLayer from '~/components/partial/Icon/styles/BlackFilterWhiteText/InnerImageLayer.vue'
import BlackFilterWhiteTextTopLayer from '~/components/partial/Icon/styles/BlackFilterWhiteText/TopLayer.vue'
import WhiteFilterBlackTextInnerImageLayer from '~/components/partial/Icon/styles/WhiteFilterBlackText/InnerImageLayer.vue'
import WhiteFilterBlackTextTopLayer from '~/components/partial/Icon/styles/WhiteFilterBlackText/TopLayer.vue'
import LabelInnerImageLayer from '~/components/partial/Icon/styles/Label/InnerImageLayer.vue'
import LabelTopLayer from '~/components/partial/Icon/styles/Label/TopLayer.vue'
import OutlineTextInnerImageLayer from '~/components/partial/Icon/styles/OutlineText/InnerImageLayer.vue'
import OutlineTextTopLayer from '~/components/partial/Icon/styles/OutlineText/TopLayer.vue'
import { IconStyle } from '~/types/icon'
import { saveSvgAsPng } from '~/utils/saveSvgAsPng'

export default Vue.extend({
  components: {
    BlackFilterWhiteTextTopLayer,
    BlackFilterWhiteTextInnerImageLayer,
  },
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
    iconStyle: {
      type: Object as PropType<IconStyle>,
      required: true,
    },
  },
  computed: {
    innerImageLayer() {
      let innerImageLayer
      const name = (this.iconStyle as IconStyle).name
      switch (name) {
        case 'BlackFilterWhiteText':
          innerImageLayer = BlackFilterWhiteTextInnerImageLayer
          break
        case 'WhiteFilterBlackText':
          innerImageLayer = WhiteFilterBlackTextInnerImageLayer
          break
        case 'Label':
          innerImageLayer = LabelInnerImageLayer
          break
        case 'OutlineText':
          innerImageLayer = OutlineTextInnerImageLayer
          break
        case 'None':
          innerImageLayer = null
          break
      }
      return innerImageLayer
    },
    topLayer() {
      let topLayer
      const name = (this.iconStyle as IconStyle).name
      switch (name) {
        case 'BlackFilterWhiteText':
          topLayer = BlackFilterWhiteTextTopLayer
          break
        case 'WhiteFilterBlackText':
          topLayer = WhiteFilterBlackTextTopLayer
          break
        case 'Label':
          topLayer = LabelTopLayer
          break
        case 'OutlineText':
          topLayer = OutlineTextTopLayer
          break
        case 'None':
          topLayer = null
          break
      }
      return topLayer
    },
  },
  methods: {
    async downloadImage() {
      const elm = document.getElementById('svg') as HTMLCanvasElement
      if (!elm) return
      // HACK: SafariでHEICファイル形式の場合、下記を実行することで画像がレンダリングされないことを回避している
      // @see https://github.com/exupero/saveSvgAsPng/issues/223 (これが関係あるかは不明)
      for (let i = 0; i < 10; i++) {
        await saveSvgAsPng(elm, 1000, 1000)
      }
      const base64Url = await saveSvgAsPng(elm, 1000, 1000)
      return base64Url
    },
    handleClicked() {
      this.$emit('click')
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
