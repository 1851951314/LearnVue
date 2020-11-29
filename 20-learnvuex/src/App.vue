<template>
  <div id="app">
    <!-- <h2>===========================app=======================</h2>
    <h2>{{ $store.state.count }}</h2>
    <button @click="addition">+1</button>
    <button @click="subtraction">-1</button>
    <h2>==========================app getters==================</h2>
    <h2>{{ $store.getters.powerCount }}</h2>
    <h2>{{ $store.getters.greatAgesCount }}</h2>
    <h2>{{ $store.getters.greatAgesLength }}</h2>
    <test></test> -->
    <h2>我的个人信息：{{ info }}</h2>
    <button @click="updateMsg">更新个人信息</button>
  </div>
</template>

<script>
// import Test from "./components/Test.vue";
export default {
  name: "App",
  computed: {
    info() {
      return this.$store.state.info;
    },
  },
  methods: {
    updateMsg() {
      this.$store.commit("updateMsg", { height: 1.88 });
    },
    // addition: function () {
    //   this.$store.commit("increment");
    // },
    // subtraction: function () {
    //   this.$store.commit("decrement");
    // },
  },
  // components: {
  //   Test,
  // },
};
</script>

<style>
</style>
