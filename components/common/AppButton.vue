<template>
  <button
    class="rounded-full bg-brand-accent text-white py-2 px-8 text-md"
    :disabled="isLoading"
    :class="{ 'opacity-50': isLoading }"
    @click="handleClicked"
  >
    <LoadingCircle v-show="isLoading" class="inline mr-2 animate-spin" />
    <span class="mr-2">
      <slot name="icon"> </slot>
    </span>
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
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleClicked() {
      this.$emit('click')
    },
  },
})
</script>
