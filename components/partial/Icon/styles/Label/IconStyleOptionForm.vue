<template>
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
      console.log(this.localValue)
    },
  },
})
</script>
