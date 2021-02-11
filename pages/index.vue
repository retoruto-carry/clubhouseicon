<template>
  <div class="container mx-auto py-8 px-8">
    <div>
      <header>
        <h1 class="md:text-2xl text-xl">
          <span class="mr-2">👋 </span>Clubhouse アイコンメーカー
        </h1>
        <p class="text-xm text-center">(現在開発中)</p>
      </header>
      <main class="mt-4">
        <section>
          <Icon
            ref="icon"
            :url="url"
            :text="text"
            :border-color="borderColor"
            :border-width="8"
            :width="150"
            class="mx-auto"
          />
          <input
            class="mt-4"
            type="file"
            accept="image/jpg,image/png,image/gif"
            @change="handleInputImage"
          />
        </section>
        <section class="mt-8">
          <h2 class="heading"><span class="mr-2">✏</span> テキスト</h2>
          <input
            v-model="text"
            class="w-full h-10 px-3 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline mt-2"
            type="text"
            placeholder="聞き専"
          />
        </section>
        <section class="mt-8">
          <h2 class="heading"><span class="mr-2">🎨</span> スタイル</h2>
          Coming soon...
        </section>
        <section class="mt-8">
          <h2 class="heading"><span class="mr-2">🖼</span> ボーダー</h2>
          <input v-model="borderColor" type="color" />
        </section>
        <section class="mt-8 text-center">
          <button
            class="rounded-full bg-brand-accent text-white py-2 px-8 text-md"
            @click="handleSaveImage"
          >
            <span class="mr-2">💾 </span>保存
          </button>
        </section>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

type HTMLInputEvent = Event & {
  target: HTMLInputElement & EventTarget
}
type LocalData = {
  url: string
  text: string
  borderColor: string
}

export default Vue.extend({
  data(): LocalData {
    return {
      url: '',
      text: '',
      borderColor: '#fafafa',
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
    handleSaveImage() {
      const icon = this.$refs.icon as any
      icon.downloadImage()
    },
  },
})
</script>

<style scoped>
.heading {
  @apply text-lg;
}
</style>
