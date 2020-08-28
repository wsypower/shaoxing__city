<template>
  <div class="parking">
    <header>
      <Header
        :title="title"
        @on-click="goBack"
      ></Header>
    </header>
    <main>
      <MapServer :initMap='initMap'></MapServer>
    </main>
  </div>
</template>

<script>
import Header from '@/components/Header/Header.vue';
import MapServer from '@/components/ServerMap/MapServer.vue';
export default {
  name: 'MapServe',
  props: {
    title: {
      type: String,
    },
    initMap: {
      type: String,
    },
  },
  mounted() {},
  components: {
    Header,
    MapServer,
  },
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