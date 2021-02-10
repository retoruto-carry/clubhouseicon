<template>
  <div class="container mx-auto py-8 px-8">
    <div>
      <header>
        <h1 class="md:text-2xl text-xl">
          <span class="mr-2">👋 </span>Clubhouse アイコンメーカー
        </h1>
      </header>
      <main class="mt-8">
        <section>
          <h2 class="heading"><span class="mr-2">✏</span> テキスト</h2>
          <input
            class="w-full h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline mt-2"
            type="text"
            placeholder="睡眠中"
          />
        </section>
        <section class="mt-8">
          <h2 class="heading"><span class="mr-2">🎨</span> スタイル</h2>
        </section>
        <section class="mt-8">
          <h2 class="heading"><span class="mr-2">🖼</span> ボーダー</h2>
        </section>
        <section class="mt-12 text-center">
          <button
            class="rounded-full bg-brand-accent text-white py-2 px-8 text-md"
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

export default Vue.extend({})
</script>

<style scoped>
.heading {
  @apply text-lg;
}
</style>
