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
    <h2 v-show="components[value.name]" class="mt-2 text-sm">
      <span class="mr-2">🔧</span>設定
    </h2>
    <transition name="fade" mode="out-in">
      <component
        :is="components[value.name]"
        :value="value.option"
        @input="handleUpdateOption"
      />
    </transition>
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
        Label: null,
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
            fontColor: '#ffffff',
          },
        },
        {
          name: 'WhiteFilterBlackText',
          option: {
            fontColor: '#000000',
          },
        },
        {
          name: 'Label',
          option: {
            fontColor: '#cacaca',
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
      const iconStyle = this.find(this.value.name)
      if (!iconStyle) return
      iconStyle.option = iconStyleOption
      this.$emit('input', iconStyle)
    },
    find(name: string): IconStyle | null {
      const iconStyle = this.iconStyles.find(
        (iconStyle) => iconStyle.name === name
      )
      if (!iconStyle) return null
      return iconStyle
    },
  },
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
