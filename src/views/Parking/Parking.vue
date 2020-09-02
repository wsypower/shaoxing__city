<!--
 * @Description: 
 * @Author: huacong
 * @Date: 2020-08-27 17:28:07
 * @LastEditTime: 2020-08-31 18:52:56
 * @LastEditors: huacong
-->
<template>
  <div class="parking">
    <header>
      <Header
        title="停车诱导"
        @on-click="goBack"
      ></Header>
    </header>
    <main>
      <iframe
        src="https://h5.xinwen4.com/sfxt/map.html"
        width="100%"
        height="100%"
        frameborder="0"
        allow="geolocation"
      ></iframe>
    </main>
  </div>
</template>

<script>
import Header from '@/components/Header/Header.vue';
export default {
  name: 'parking',
  components: {
    Header,
  },
  mounted() {},
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped lang="less" >
.parking {
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