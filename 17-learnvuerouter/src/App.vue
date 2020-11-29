<template>
  <div id="app">
    <h1>我是网站的标题</h1>
    <!-- <button @click="btnHomeClick">首页</button>
    <button @click="btnAboutClick">关于</button> -->
    <router-link to="/home" tag="button" replace>首页</router-link>
    <router-link to="/about" tag="button" replace>关于</router-link>
    <router-link :to="'/user/' + userId" tag="button" replace>用户</router-link>
    <router-link
      :to="{
        path: '/profile',
        query: {
          name: 'zhangsan',
          age: 18,
          height: 1.88,
        },
      }"
      tag="button"
      replace
      >档案</router-link
    >
    <router-view></router-view>
    <div>我是底部信息</div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      userId: "张三",
    };
  },
};
</script>

<style>
* {
  background: rgb(196, 255, 230);
}
</style>
