<template>
  <footer class="px-8 py-8 mt-32 text-sm text-center text-gray-600 font-base">
    <p class="font-medium">©︎ 2021 {{ $t('title') }}</p>
    <p class="mt-4">Made by</p>
    <p>
      <img
        src="/images/authors/retoruto_carry.png"
        class="inline-block w-4 h-4 rounded-full"
      />
      <a href="https://twitter.com/retoruto_carry" class="underline"
        >@retoruto_carry</a
      >
      <span class="mx-2">&amp;</span>
      <img
        src="/images/authors/AsukaOkochi.jpg"
        class="inline-block w-4 h-4 border border-gray-500 rounded-full"
      />
      <a href="https://twitter.com/AsukaOkochi" class="underline"
        >@AsukaOkochi</a
      >
    </p>
  </footer>
</template>

<i18n>
{
  "ja": {
    "title": "Clubhouse アイコンメーカー"
  },
  "en": {
    "title": "Clubhouse Icon Maker"
  }
}
</i18n>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>
