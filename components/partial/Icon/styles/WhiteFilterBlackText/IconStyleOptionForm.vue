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

type HTMLInputEvent = Event & {
  target: HTMLInputElement & EventTarget
}

export type Option = {
  fontColor: string
}

export default Vue.extend({
  props: {
    value: {
      type: Object as PropType<Option>,
      required: true,
    },
  },
  data() {
    return {
      data: this.value,
    }
  },
  methods: {
    handleUpdateFontColor(event: HTMLInputEvent) {
      this.data.fontColor = event.target.value as string
      this.$emit('input', this.data)
    },
  },
})
</script>
