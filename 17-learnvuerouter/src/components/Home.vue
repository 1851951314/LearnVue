<template>
  <div class="content">
    <h2>我是首页的标题</h2>
    <div>我是首页的内容</div>
    <router-link to="/home/news" tag="button" replace>新闻</router-link>
    <router-link to="/home/message" tag="button" replace>信息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "home",
};
</script>

<style scoped>
.content {
  color: pink;
}
</style>
