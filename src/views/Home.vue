<template>
  <div class="home">
    <el-button>按需引入 element 组件库</el-button>
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div class="variable" :style="{ color: variable.colorSucss }">全局样式变量</div>
    <div>
      <div class="left">float left</div>
      <div class="clear1">clear 1</div>
      <div class="left">float left</div>

      <div class="clear2">clear 2</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import variable from '@/styles/_variables.scss';

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
  computed: {
    variable() {
      return variable;
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
