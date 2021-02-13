<template>
  <div>
    <IconStyleSelector
      :value="value"
      :icon-styles="iconStyles"
      class="mt-2"
      :text="text"
      :url="url"
      :border-color="borderColor"
      :border-width="borderWidth"
      @input="updateIconStyle"
    />
    <component
      :is="components[value.name]"
      :value="value.option"
      @input="handleUpdateOption"
    />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import BlackFilterWhiteTextIconStyleOptionForm from '~/components/partial/Icon/styles/BlackFilterWhiteText/IconStyleOptionForm.vue'
import WhiteFilterBlackTextIconStyleOptionForm from '~/components/partial/Icon/styles/WhiteFilterBlackText/IconStyleOptionForm.vue'
import { IconStyle, IconStyleName, IconStyleOption } from '~/types/icon'

type LocalData = {
  iconStyles: IconStyle[]
  components: {
    [key in IconStyleName]: any
  }
}

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
    borderColor: {
      type: String,
      default: '',
    },
    borderWidth: {
      type: Number,
      default: 0,
    },
  },
  data(): LocalData {
    return {
      components: {
        None: null,
        BlackFilterWhiteText: BlackFilterWhiteTextIconStyleOptionForm,
        WhiteFilterBlackText: WhiteFilterBlackTextIconStyleOptionForm,
      },
      iconStyles: [
        {
          name: 'None',
          option: null,
        },
        {
          name: 'BlackFilterWhiteText',
          option: {
            fontColor: '#000',
          },
        },
        {
          name: 'WhiteFilterBlackText',
          option: {
            fontColor: '#fff',
          },
        },
      ],
    }
  },
  methods: {
    updateIconStyle(iconStyle: IconStyle) {
      this.$emit('input', iconStyle)
    },
    handleUpdateOption(iconStyleOption: IconStyleOption) {
      const iconStyle = this.iconStyles.find(
        (iconStyle) => iconStyle.name === this.value.name
      )
      if (!iconStyle) return
      iconStyle.option = iconStyleOption
      this.$emit('input', iconStyle)
    },
  },
})
</script>
