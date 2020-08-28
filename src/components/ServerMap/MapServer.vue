<template>
  <div class="map-server">
    <div
      id="map"
      class="map"
      style="width: 100%;height: 100%;"
    ></div>
    <div class="scale">
      <div
        class="bigger"
        id="zoomIn"
        @click='zoomIn'
      >
        <img
          src="./image/bigger.png"
          alt=""
        >
      </div>
      <div
        class="smaller"
        id="zoomOut"
        @click='zoomOut'
      >
        <img
          src="./image/smaller.png"
          alt=""
        >
      </div>
    </div>
  </div>
</template>

<script>
import * as Map from './js/map';
export default {
  name: 'MapServe',
  props: {
    initMap: {
      type: String,
    },
  },
  data() {
    return {
      map: null,
    };
  },
  mounted() {
    const initMap = this.initMap;
    this.$hesc.device.geolocation.get({
      key: '8730e769e5f114d59325884bf3b7a2e9',
      tiandi: true,
      poi: true,
      onSuccess: (result) => {
        const { longitude, latitude } = result;
        Map.initBdMap(initMap).then((res) => {
          this.map = res;
          Map.getCurrentPosition(longitude, latitude);
          //   let point = new BMap.Point(longitude, latitude);
          //this.map.centerAndZoom('北京', 17);
        });
      },
      onFail: () => {
        this.$toast.fail('定位异常');
      },
    });
  },
  methods: {
    zoomIn() {
      this.map.zoomIn();
    },
    zoomOut() {
      this.map.zoomOut();
    },
  },
};
</script>

<style lang="less" scoped>
@import 'wc';
.map-server {
  width: 100%;
  height: 100%;
}
</style>