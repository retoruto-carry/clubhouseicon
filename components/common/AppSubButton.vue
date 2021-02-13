<template>
  <button
    class="px-2 py-1 text-xs text-gray-700 bg-white rounded"
    @click="handleClicked"
  >
    {{ label }}
  </button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    label: {
      type: String,
      default: '',
    },
  },
  methods: {
    handleClicked() {
      this.$emit('click')
    },
  },
})
</script>
