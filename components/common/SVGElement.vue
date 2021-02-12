<template>
  <component :is="svg" />
</template>

<script>
export default {
  name: 'SVGElement',
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  computed: {
    svg() {
      return () => import(`~/assets/images/${this.name}.svg`)
    },
  },
}
</script>
