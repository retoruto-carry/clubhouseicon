<template>
  <input
    :value="value.fontColor"
    type="color"
    class="block"
    @input="handleUpdateFontColor"
  />
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { IconStyleOption } from '~/types/icon'

type HTMLInputEvent = Event & {
  target: HTMLInputElement & EventTarget
}

export default Vue.extend({
  props: {
    value: {
      type: Object as PropType<IconStyleOption>,
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
