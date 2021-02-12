<template>
  <div class="container px-8 py-8 mx-auto">
    <div>
      <header>
        <h1 class="text-xl md:text-2xl">
          <span class="mr-2">👋 </span>Clubhouse アイコンメーカー
        </h1>
        <p class="text-center text-xm">(現在開発中)</p>
      </header>
      <main class="mt-4">
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
              :width="150"
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
        <section class="mt-8">
          <h2 class="heading"><span class="mr-2">✏</span> テキスト</h2>
          <input
            v-model="text"
            class="w-full h-10 px-3 mt-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
            type="text"
            placeholder="聞き専"
          />
        </section>
        <section class="mt-8">
          <h2 class="heading"><span class="mr-2">🎨</span> スタイル</h2>
          <IconStyleSelector
            v-model="iconStyle"
            class="mt-2"
            :text="text"
            :url="url"
          />
        </section>
        <section class="mt-8">
          <h2 class="heading"><span class="mr-2">🖼</span> ボーダー</h2>
          <AppSwitch v-model="shouldShowBorder" />
          <template v-if="shouldShowBorder">
            <input v-model="borderColor" type="color" />
            <input v-model="borderWidth" type="range" min="5" max="12" />
          </template>
        </section>
        <section class="mt-8 text-center">
          <AppButton
            :is-loading="isLoading"
            :label="'保存'"
            @click="handleSaveImage"
          >
            <template v-slot:icon><span>💾 </span></template>
          </AppButton>
        </section>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { IconStyle } from '~/components/partial/Icon/Icon.vue'

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
  iconStyle: IconStyle
}

export default Vue.extend({
  data(): LocalData {
    return {
      url: '',
      text: '',
      borderColor: '#fafafa',
      borderWidth: 8,
      isLoading: false,
      shouldShowBorder: true,
      iconStyle: 'BlackFilterWhiteText',
    }
  },
  methods: {
    handleInputImage(e: HTMLInputEvent) {
      if (!e.target.files?.length) {
        return
      }
      const file = e.target.files[0]
      this.url = window.URL.createObjectURL(file)
    },
    async handleSaveImage() {
      this.isLoading = true
      const icon = this.$refs.icon as any
      await icon.downloadImage()
      this.isLoading = false
    },
  },
})
</script>

<style scoped>
.heading {
  @apply text-lg;
}
.iconFileInput {
  width: 150px;
}
</style>
