<template>
  <div>
    SimpleApp：<span @click="changeText">{{ $store.state.hello }}</span>
  </div>
</template>

<script>
export default {
  name: 'SimpleApp',
  methods: {
    changeText () {
      this.$store.commit('changeText', Math.random())
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
