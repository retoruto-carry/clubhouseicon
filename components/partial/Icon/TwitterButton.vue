<template>
  <button
    class="w-full px-8 py-2 text-white bg-blue-500 rounded-full text-md"
    @click="handleClicked"
  >
    <span class="mr-2" />
    {{ $t('tweet') }}
  </button>
</template>

<i18n>
{
  "ja": {
    "tweet": "Twitterでつぶやく",
    "title": "Clubhouseアイコンメーカー",
    "shareText": "Clubhouseアイコンメーカーでアイコンを作りました！みんなも使ってみよう！\r\rClubhouseアイコンメーカー｜枠線や文字付きのアイコンが簡単につくれます"
  },
  "en": {
    "tweet": "Tweet",
    "title": "Clubhouse Icon Maker",
    "shareText": "I made an icon with Clubhouse Icon Maker! Let's try it!\r\rClubhouse Icon Maker｜Easy to make icons with border and text"
  }
}
</i18n>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  computed: {
    twitterShareUrl(): string {
      return (
        'https://twitter.com/intent/tweet?url=' +
        encodeURIComponent(
          `${process.env.BASE_URL}?lang=${this.$i18n.locale}`
        ) +
        '&hashtags=' +
        encodeURIComponent(`${this.$t('title')}`) +
        '&text=' +
        encodeURIComponent(`${this.$t('shareText')}`)
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
