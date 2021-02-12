<template>
  <div>
    <SelectableIconStyle
      v-for="iconStyle in iconStyles"
      :key="iconStyle"
      :value="value"
      :icon-style="iconStyle"
      :url="url"
      :text="text"
      :border-color="borderColor"
      :border-width="borderWidth"
      @input="$emit('input', $event)"
    />
  </div>
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
    iconStyles: {
      type: Array as PropType<IconStyle[]>,
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
    borderColor: {
      type: String,
      default: '',
    },
    borderWidth: {
      type: Number,
      default: 0,
    },
  },
})
</script>
