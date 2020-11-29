<template>
  <div class="content">
    <h2>我是用户界面嘿嘿嘿</h2>
    <div>我是用户界面的内容</div>
    <h2>{{ $route.params.userId }}</h2>
  </div>
</template>

<script>
export default {
  name: "User",
  data() {
    return {};
  },
};
</script>

<style scoped>
.content {
  color: purple;
}
</style>
