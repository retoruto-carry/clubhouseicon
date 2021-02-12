<template>
  <Icon
    ref="icon"
    :url="url"
    :text="text"
    :border-width="0"
    :width="60"
    :icon-style="iconStyle"
    @click="handleClicked"
  />
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { IconStyle } from '~/components/partial/Icon/Icon.vue'

export default Vue.extend({
  props: {
    value: {
      type: String as PropType<IconStyle>,
      required: true,
    },
    text: {
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
    iconStyle: {
      type: String as PropType<IconStyle>,
      required: true,
    },
  },
  computed: {
    selected(): boolean {
      return this.value === this.iconStyle
    },
  },
  methods: {
    handleClicked() {
      this.$emit('input', this.iconStyle)
    },
  },
})
</script>
