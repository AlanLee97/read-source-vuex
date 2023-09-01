<template>
  <div>
    SimpleApp：<span @click="changeText">{{ hello }}</span>
  </div>
</template>

<script>
export default {
  name: 'SimpleApp',
  data () {
    return {

    }
  },
  computed: {
    hello () {
      return this.$store.state.hello
    }
  },
  created () {

  },
  mounted () {

  },
  methods: {
    changeText () {
      this.$store.commit('changeText', Math.random())
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
