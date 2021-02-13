<template>
  <div>
    <h3 class="inline-block text-xs">文字の色</h3>
    <input
      class="align-bottom"
      :value="value.fontColor"
      type="color"
      @input="handleUpdateFontColor"
    />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { WhiteFilterBlackTextIconStyleOption } from '~/types/icon'

type HTMLInputEvent = Event & {
  target: HTMLInputElement & EventTarget
}

export default Vue.extend({
  props: {
    value: {
      type: Object as PropType<WhiteFilterBlackTextIconStyleOption>,
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
  },
})
</script>
