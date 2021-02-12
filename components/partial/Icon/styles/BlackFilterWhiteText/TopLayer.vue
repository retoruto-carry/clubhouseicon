<template>
  <text
    x="50"
    y="50"
    text-anchor="middle"
    dominant-baseline="central"
    style="font-size: 20px; fill: #fff; font-weight: bold"
    font-family="sans-serif"
  >
    {{ text }}
  </text>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    text: {
      type: String,
      default: '',
    },
  },
})
</script>
