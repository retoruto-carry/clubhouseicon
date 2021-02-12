<template>
  <div>
    <SelectableIconStyle
      v-for="iconStyle in iconStyles"
      :key="iconStyle"
      ref="icon"
      value="selectedIconStyle"
      class="inline mr-2"
      :icon-style="iconStyle"
      :url="url"
      :text="text"
      @input="$emit('input', $event)"
    />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { IconStyle } from '~/components/partial/Icon/Icon.vue'

type LocalData = {
  selectedIconStyle: IconStyle
  iconStyles: IconStyle[]
}

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
  },
  data(): LocalData {
    return {
      selectedIconStyle: 'BlackFilterWhiteText',
      iconStyles: ['BlackFilterWhiteText', 'WhiteFilterBlackText'],
    }
  },
})
</script>
