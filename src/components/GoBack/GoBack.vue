<template>
  <i class="iconfont icon-arrow-left" @click="goBack"></i>
</template>

<script>
export default {
  name: 'GoBack',
  methods: {
    goBack() {
      this.$router.back();
    },
  },
};
</script>

<style lang="less" scoped>
i {
  position: fixed;
  top: 10px;
  left: 10px;
  z-index: 1;
  font-size: 20px;
  color: white;
}
</style>
