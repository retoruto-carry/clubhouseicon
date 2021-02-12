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
    <component
      :is="form.component"
      v-for="(form, key) in iconStyleOptionForms"
      :key="key"
      v-model="form.option"
    />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { IconStyle } from '~/components/partial/Icon/Icon.vue'
import BlackFilterWhiteTextIconStyleOptionForm, {
  Option as BlackFilterWhiteTextIconStyleOption,
} from '~/components/partial/Icon/styles/BlackFilterWhiteText/IconStyleOptionForm.vue'

type IconStyleOption = BlackFilterWhiteTextIconStyleOption

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
})
</script>
