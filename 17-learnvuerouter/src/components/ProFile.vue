<template>
  <div class="content">
    <h2>我是profile的标题</h2>
    <div>我是profile的内容，嘻嘻嘻</div>
    <h2>{{ $route.query }}</h2>
    <h2>{{ $route.query.name }}</h2>
    <h2>{{ $route.query.age }}</h2>
    <h2>{{ $route.query.height }}</h2>
  </div>
</template>

<script>
export default {
  name: "profile",
  data() {
    return {};
  },
};
</script>

<style scoped>
.content {
  color: yellow;
}
</style>
