<template>
  <div>
    <h3 class="inline-block text-xs">{{ $t('textColor') }}</h3>
    <input
      class="align-bottom"
      :value="value.fontColor"
      type="color"
      @input="handleUpdateFontColor"
    />
    <h3 class="inline-block text-xs">{{ $t('outlineColor') }}</h3>
    <input
      class="align-bottom"
      :value="value.outlineColor"
      type="color"
      @input="handleUpdateOutlineColor"
    />
  </div>
</template>

<i18n>
{
  "ja": {
    "textColor": "文字の色",
    "outlineColor": "縁の色"
  },
  "en": {
    "textColor": "Text color",
    "outlineColor": "Outline Color"
  }
}
</i18n>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { OutlineTextIconStyleOption } from '~/types/icon'

type HTMLInputEvent = Event & {
  target: HTMLInputElement & EventTarget
}

export default Vue.extend({
  props: {
    value: {
      type: Object as PropType<OutlineTextIconStyleOption>,
      required: true,
    },
  },
  data() {
    return {
      localValue: this.value,
    }
  },
  methods: {
    handleUpdateOutlineColor(event: HTMLInputEvent) {
      this.localValue!.outlineColor = event.target.value as string
      this.$emit('input', this.localValue)
    },
    handleUpdateFontColor(event: HTMLInputEvent) {
      this.localValue!.fontColor = event.target.value as string
      this.$emit('input', this.localValue)
    },
  },
})
</script>
