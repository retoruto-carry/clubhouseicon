<template>
  <Icon
    ref="icon"
    :class="selected ? 'border-2 shadow	border-white rounded' : ''"
    class="inline mr-2"
    :url="url"
    :text="text"
    :width="70"
    :icon-style="iconStyle"
    :border-color="borderColor"
    :border-width="borderWidth"
    @click="handleClicked"
  />
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { IconStyle } from '~/types/icon'

export default Vue.extend({
  props: {
    value: {
      type: Object as PropType<IconStyle>,
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
      type: Object as PropType<IconStyle>,
      required: true,
    },
    borderColor: {
      type: String,
      default: '',
    },
    borderWidth: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    selected(): boolean {
      return this.value.name === this.iconStyle.name
    },
  },
  methods: {
    handleClicked() {
      this.$emit('input', this.iconStyle)
    },
  },
})
</script>
