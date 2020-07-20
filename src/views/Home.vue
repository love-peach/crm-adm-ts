<template>
  <div class="home">
    <el-button>按需引入 element 组件库</el-button>
    <img alt="Vue logo" src="../assets/logo.png" />
    <div class="variable" :style="{ color: variable.colorSucss }">全局样式变量</div>
    <div>
      <div class="left">float left</div>
      <div class="clear1">clear 1</div>
      <div class="left">float left</div>

      <div class="clear2">clear 2</div>

      <el-button @click="handleLogin">login</el-button>
      <el-button @click="handleLogOut">logout</el-button>
    </div>
  </div>
</template>

<script>
import variable from '@/styles/_variables.scss';
import { logout, login } from '@/api/login';

export default {
  name: 'Home',
  computed: {
    variable() {
      return variable;
    },
  },
  methods: {
    handleLogin() {
      login();
    },
    handleLogOut() {
      logout({ name: 'zhang' });
    },
  },
};
</script>

<style lang="scss">
.variable {
  color: $colorPrimary;
}
.left {
  float: left;
}
.clear1 {
  @include clearfix;
  // @extend %icon;
}
.clear2 {
  @include clearfix;
  // @extend %icon;
  @include mt(10%);
}
</style>
