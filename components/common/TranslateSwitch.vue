<template>
  <div class="text-xs text-center text-gray-600">
    <a
      :class="$i18n.locale === 'en' ? 'text-gray-900' : null"
      class="cursor-pointer"
      @click.prevent.stop="$i18n.setLocale('en')"
    >
      English
    </a>
    <a
      :class="$i18n.locale === 'ja' ? 'text-gray-900' : null"
      class="ml-4 cursor-pointer"
      @click.prevent.stop="$i18n.setLocale('ja')"
    >
      日本語
    </a>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>
