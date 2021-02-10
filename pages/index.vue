<template>
  <div class="container mx-auto py-8 px-8">
    <div>
      <header>
        <h1 class="text-4xl text-center">👋 Clubhouse アイコンメーカー</h1>
      </header>
      <main class="mt-8">
        <section>
          <h2 class="heading">✏ テキスト</h2>
          <input
            class="w-full h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline mt-2"
            type="text"
            placeholder="睡眠中"
          />
        </section>
        <section class="mt-8">
          <h2 class="heading">🎨 スタイル</h2>
        </section>
        <section class="mt-8">
          <h2 class="heading">🖼 ボーダー</h2>
        </section>
        <section class="mt-12 text-center">
          <button
            class="rounded-full bg-brand-accent text-white py-4 px-12 text-xl"
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
  @apply text-2xl;
}
</style>
