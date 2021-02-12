<template>
  <div
    class="inline-flex items-center w-12 h-6 p-1 duration-300 ease-in-out bg-gray-300 rounded-full"
    :class="{ 'bg-brand-accent': value }"
    @click="handleToggle"
  >
    <div
      class="w-4 h-4 duration-300 ease-in-out transform bg-white rounded-full shadow-md"
      :class="{ 'translate-x-6': value }"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleToggle() {
      this.$emit('input', !this.value)
    },
  },
})
</script>
