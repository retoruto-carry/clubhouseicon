<template>
  <div class="container px-8 py-10 mx-auto">
    <div>
      <header>
        <h1 class="text-xl font-semibold text-center md:text-2xl">
          <span class="mr-2">👋 </span>{{ $t('title') }}
        </h1>
      </header>
      <main class="mt-8">
        <section>
          <label class="cursor-pointer hover:bg-blue">
            <SVGElement
              v-show="!url"
              name="selectPhoto"
              class="mx-auto iconFileInput"
            />
            <Icon
              v-show="url"
              ref="icon"
              :url="url"
              :text="text"
              :border-color="borderColor"
              :border-width="shouldShowBorder ? borderWidth : 0"
              :width="170"
              :icon-style="iconStyle"
              class="mx-auto"
            />
            <input
              class="hidden"
              type="file"
              accept="image/jpg,image/png,image/gif"
              @change="handleInputImage"
            />
          </label>
        </section>
        <section class="mt-6">
          <h2 class="heading"><span class="mr-2">✏</span> {{ $t('text') }}</h2>
          <input
            v-model="text"
            class="w-full h-10 px-3 mt-2 text-sm font-semibold text-gray-700 placeholder-gray-500 border rounded-lg focus:shadow-outline"
            type="text"
            :placeholder="$t('inputText')"
            @input="showStyle"
          />
          <div class="mt-2 overflow-x-auto whitespace-no-wrap">
            <AppSubButton
              v-for="suggestionText in suggestionTexts"
              :key="suggestionText"
              class="mr-2"
              :label="suggestionText"
              @click="handleUpdateText(suggestionText)"
            />
          </div>
        </section>
        <transition name="fade">
          <section v-if="shouldShowStyle" class="mt-8">
            <h2 class="heading">
              <span class="mr-2">🎨</span> {{ $t('style') }}
            </h2>
            <IconStyleSettingForm
              v-model="iconStyle"
              class="mt-2"
              :text="text"
              :url="url"
              :border-color="borderColor"
              :border-width="shouldShowBorder ? borderWidth : 0"
            />
          </section>
        </transition>
        <section class="mt-8">
          <h2 class="inline heading">
            <span class="mr-2">🖼</span> {{ $t('border') }}
          </h2>
          <AppSwitch v-model="shouldShowBorder" class="inline ml-2" />
          <template v-if="shouldShowBorder">
            <div class="mt-2">
              <h3 class="inline-block text-xs">{{ $t('color') }}</h3>
              <input v-model="borderColor" type="color" class="align-bottom" />
              <h3 class="inline-block ml-2 text-xs">{{ $t('width') }}</h3>
              <input
                :value="borderWidth"
                type="range"
                min="5"
                max="12"
                class="align-middle"
                @input="handleUpdateBorderWidth"
              />
            </div>
          </template>
        </section>
        <section class="mt-8 text-center">
          <AppButton
            :is-loading="isLoading"
            :label="$t('save')"
            @click="handleSaveImage"
          >
            <template v-slot:icon><span>💾 </span></template>
          </AppButton>
        </section>
      </main>
      <AppModal
        v-show="shouldShowResultModal"
        class="text-center"
        @close="handleResultModalClose"
      >
        <p class="text-lg font-semibold">
          <span class="mr-2">🎉</span>
          {{ $t('complete') }}
          <span class="ml-2">🎉</span>
        </p>
        <img :src="resultBase64Image" class="w-48 mx-auto mt-2" />
        <p class="mt-2 text-sm">
          👆 {{ $t('longPressOrRightClickOnTheImage') }}
        </p>
        <p class="mt-8 text-sm">
          ＼
          {{ $t('shareEveryoneAboutThisService') }}
          🙏 ／
        </p>
        <TwitterButton class="mt-2" />
      </AppModal>
    </div>
  </div>
</template>

<i18n>
{
  "ja": {
    "title": "Clubhouse アイコンメーカー",
    "text": "テキスト",
    "style": "スタイル",
    "border": "ボーダー",
    "color": "色",
    "width": "幅",
    "complete": "完成しました",
    "longPressOrRightClickOnTheImage": "画像を長押しまたは右クリックで画像を保存してください",
    "shareEveryoneAboutThisService": "みんなにこのサービスを教えてね",
    "save": "保存",
    "inputText": "テキストを入力"
  },
  "en": {
    "title": "Clubhouse Icon Maker",
    "text": "Text",
    "style": "Style",
    "border": "Border",
    "color": "Color",
    "width": "Width",
    "complete": "Completed",
    "longPressOrRightClickOnTheImage": "Long press or right click on the image",
    "shareEveryoneAboutThisService": "Share everyone about this service",
    "save": "Save",
    "inputText": "Input text"
  }
}
</i18n>

<script lang="ts">
import Vue from 'vue'
import { IconStyle } from '~/types/icon'

type HTMLInputEvent = Event & {
  target: HTMLInputElement & EventTarget
}
type LocalData = {
  url: string
  text: string
  borderColor: string
  borderWidth: number
  isLoading: boolean
  shouldShowBorder: boolean
  shouldShowStyle: boolean
  iconStyle: IconStyle
  shouldShowResultModal: boolean
  resultBase64Image: string | null
}

const suggestionTextsJa = [
  '聞き専',
  '離席中',
  '移動中',
  '作業中',
  '仕事中',
  '話しかけて',
  'お風呂中',
]

const suggestionTextsEn = ['Listening', 'Leaving', 'Moving', 'Working']

export default Vue.extend({
  data(): LocalData {
    return {
      url: '',
      text: '',
      borderColor: '#fafad2',
      borderWidth: 8,
      isLoading: false,
      shouldShowBorder: true,
      shouldShowStyle: false,
      iconStyle: {
        name: 'None',
        option: null,
      },
      shouldShowResultModal: false,
      resultBase64Image: null,
    }
  },
  computed: {
    suggestionTexts(): string[] {
      let suggestionTexts: string[] = []
      switch (((this as any).$i18n as any).locale) {
        case 'ja':
          suggestionTexts = suggestionTextsJa
          break
        case 'en':
          suggestionTexts = suggestionTextsEn
          break
      }
      return suggestionTexts
    },
  },
  methods: {
    handleInputImage(e: HTMLInputEvent) {
      if (!e.target.files?.length) {
        return
      }
      const file = e.target.files[0]
      const reader = new FileReader()
      const that: any = this
      reader.addEventListener(
        'load',
        function () {
          that.url = reader.result
        },
        false
      )

      if (file) {
        reader.readAsDataURL(file)
      }
    },
    async handleSaveImage() {
      this.isLoading = true
      const icon = this.$refs.icon as any
      this.resultBase64Image = await icon.downloadImage()
      this.isLoading = false
      this.shouldShowResultModal = true
    },
    showStyle() {
      if (this.shouldShowStyle) return
      this.shouldShowStyle = true
      this.iconStyle = {
        name: 'BlackFilterWhiteText',
        option: {
          fontColor: '#ffffff',
        },
      }
    },
    handleResultModalClose() {
      this.shouldShowResultModal = false
    },
    handleUpdateText(text: string) {
      this.text = text
      this.showStyle()
    },
    handleUpdateBorderWidth(event: HTMLInputEvent) {
      this.borderWidth = Number(event.target.value as string)
    },
  },
})
</script>

<style scoped>
.heading {
  @apply text-lg;
  @apply font-semibold;
}
.iconFileInput {
  width: 150px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
