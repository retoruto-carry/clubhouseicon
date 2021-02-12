<template>
  <div>
    <IconStyleSelector
      :value="iconStyle"
      :icon-styles="iconStyles"
      class="mt-2"
      :text="text"
      :url="url"
      :border-color="borderColor"
      :border-width="borderWidth"
      @input="updateIconStyle"
    />
    <component
      :is="iconStyleOptionForms[iconStyle]"
      v-for="(form, key) in iconStyleOptionForms"
      :key="key"
      :value="form.option"
      @input="updateIconStyleOption"
    />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { IconStyle } from '~/components/partial/Icon/Icon.vue'
import BlackFilterWhiteTextIconStyleOptionForm, {
  Option as BlackFilterWhiteTextIconStyleOption,
} from '~/components/partial/Icon/styles/BlackFilterWhiteText/IconStyleOptionForm.vue'

export type IconStyleOption = BlackFilterWhiteTextIconStyleOption

type LocalData = {
  iconStyles: IconStyle[]
  iconStyleOptionForms: {
    [key in IconStyle]: {
      component: any // FIXME
      option: IconStyleOption
    }
  }
}

export default Vue.extend({
  props: {
    iconStyle: {
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
      iconStyles: ['None', 'BlackFilterWhiteText', 'WhiteFilterBlackText'],
      iconStyleOptionForms: {
        None: {
          component: BlackFilterWhiteTextIconStyleOptionForm,
          option: {
            fontColor: '#000',
          },
        },
        BlackFilterWhiteText: {
          component: BlackFilterWhiteTextIconStyleOptionForm,
          option: {
            fontColor: '#000',
          },
        },
        WhiteFilterBlackText: {
          component: BlackFilterWhiteTextIconStyleOptionForm,
          option: {
            fontColor: '#000',
          },
        },
      },
    }
  },
  methods: {
    updateIconStyle(iconStyle: IconStyle) {
      this.$emit('updateIconStyle', iconStyle)
    },
    updateIconStyleOption(iconStyleOption: IconStyleOption) {
      this.$emit('updateIconStyleOption', iconStyleOption)
    },
  },
})
</script>
