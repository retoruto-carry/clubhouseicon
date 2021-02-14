<template>
  <div>
    <div>
      <h3 class="inline-block text-xs">文字の色</h3>
      <input
        class="align-bottom"
        :value="value.fontColor"
        type="color"
        @input="handleUpdateFontColor"
      />
      <h3 class="inline-block ml-2 text-xs">ラベルの色</h3>
      <input
        class="align-bottom"
        :value="value.labelColor"
        type="color"
        @input="handleUpdateLabelColor"
      />
    </div>
    <div>
      <h3 class="inline-block text-xs">サイズ</h3>
      <input
        class="w-24 align-bottom"
        :value="value.labelSize"
        type="range"
        min="30"
        max="90"
        @input="handleUpdateLabelSize"
      />
      <h3 class="inline-block ml-2 text-xs">位置</h3>
      <input
        class="w-24 align-bottom"
        :value="value.labelY"
        type="range"
        min="0"
        max="90"
        @input="handleUpdateLabelY"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { LabelIconStyleOption } from '~/types/icon'

type HTMLInputEvent = Event & {
  target: HTMLInputElement & EventTarget
}

export default Vue.extend({
  props: {
    value: {
      type: Object as PropType<LabelIconStyleOption>,
      required: true,
    },
  },
  data() {
    return {
      localValue: this.value,
    }
  },
  methods: {
    handleUpdateFontColor(event: HTMLInputEvent) {
      this.localValue!.fontColor = event.target.value as string
      this.$emit('input', this.localValue)
    },
    handleUpdateLabelColor(event: HTMLInputEvent) {
      this.localValue!.labelColor = event.target.value as string
      this.$emit('input', this.localValue)
    },
    handleUpdateLabelSize(event: HTMLInputEvent) {
      this.localValue!.labelSize = Number(event.target.value as string)
      this.$emit('input', this.localValue)
    },
    handleUpdateLabelY(event: HTMLInputEvent) {
      this.localValue!.labelY = Number(event.target.value as string)
      this.$emit('input', this.localValue)
    },
  },
})
</script>
