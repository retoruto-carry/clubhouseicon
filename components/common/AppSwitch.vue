<template>
  <div
    class="w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 duration-300 ease-in-out"
    :class="{ 'bg-brand-accent': value }"
    @click="handleToggle"
  >
    <div
      class="bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out"
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
