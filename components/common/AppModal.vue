<template>
  <aside class="fixed top-0 left-0 w-full h-full">
    <div class="flex items-center justify-center w-full h-full px-4 py-8">
      <div
        class="relative z-30 w-full max-w-sm max-h-full px-8 pt-12 pb-8 overflow-y-scroll bg-white rounded-xl"
      >
        <span
          class="absolute top-0 right-0 mt-4 mr-4 text-2xl hover:cursor-pointer"
          @click="handleClose"
        >
          ✖
        </span>
        <slot />
      </div>
    </div>
    <button
      class="fixed inset-0 z-10 w-full h-full bg-black opacity-50 cursor-default"
      @click="handleClose"
    />
  </aside>
</template>

<script>
export default {
  methods: {
    handleClose() {
      this.$emit('close')
    },
  },
}
</script>
