<template>
  <button
    class="w-full px-8 py-2 text-white bg-blue-500 rounded-full text-md"
    @click="handleClicked"
  >
    <span class="mr-2" />
    Twitterでつぶやく
  </button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  computed: {
    twitterShareUrl(): string {
      return (
        'https://twitter.com/intent/tweet?url=' +
        encodeURIComponent(`${process.env.BASE_URL}`) +
        '&hashtags=' +
        encodeURIComponent('Clubhouseアイコンメーカー') +
        '&text=' +
        encodeURIComponent(
          `Clubhouseアイコンメーカーでアイコンを作りました！みんなも使ってみよう！\r\rClubhouseアイコンメーカー｜枠線や文字付きのアイコンが簡単につくれます`
        )
      )
    },
  },
  methods: {
    handleClicked() {
      window.open(this.twitterShareUrl)
    },
  },
})
</script>
