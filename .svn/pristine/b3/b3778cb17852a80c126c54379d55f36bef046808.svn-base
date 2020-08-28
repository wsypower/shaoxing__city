<template>
  <van-nav-bar :title="title" @click-left="onClose" class="header">
    <template #left><van-icon name="arrow-left" size="20"/></template>
  </van-nav-bar>
</template>

<script>
import { Icon, NavBar } from 'vant';

export default {
  name: 'Header',
  components: {
    [NavBar.name]: NavBar,
    [Icon.name]: Icon,
  },
  props: { title: String },
  methods: {
    onClose() {
      this.$emit('on-click');
    },
  },
};
</script>

<style scoped lang="less">
.header {
  background-color: #306ce7 !important;
  /deep/ .van-nav-bar__title,
  /deep/ .van-icon-arrow-left {
    color: #ffffff;
  }
}
</style>
