<template>
  <div class="waste">
    <header>
      <Header
        title="垃圾分类指南"
        @on-click="goBack"
      ></Header>
    </header>
    <main>
      <iframe
        src="https://url.cn/m91ILd2Y"
        width="100%"
        height="100%"
        frameborder="0"
      ></iframe>
    </main>
  </div>
</template>

<script>
import Header from '@/components/Header/Header.vue';
export default {
  name: 'Waste',
  components: {
    Header,
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped lang="less" >
.waste {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  header {
    // flex: none;
    height: auto;
  }
  main {
    // flex: auto;
    width: 100%;
    height: calc(100% - 1.22667rem);
  }
}
</style>