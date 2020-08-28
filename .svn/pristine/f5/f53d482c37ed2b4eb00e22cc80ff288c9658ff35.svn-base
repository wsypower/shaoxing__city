<template>
  <div class="report">
    <GoBack></GoBack>
    <van-nav-bar title="问题上报" @click-left="goBack" class="header">
      <template #left><van-icon name="arrow-left" size="18"/></template>
    </van-nav-bar>
    <van-panel class="classification">
      <template #header>
        <van-cell title="问题分类" class="padding-8">
          <template #icon>
            <van-icon class-prefix="iconfont icon" name="shuxian" size="20" :style="{ color: '#306ce7' }" />
          </template>
        </van-cell>
      </template>
      <div class="sort">
        <div v-for="item in sorts" :key="item.id" :class="[item.active ? 'sort-active' : '']" @click="handleSort(item.id)">
          {{ item.label }}
        </div>
      </div>
      <van-notice-bar class="notice" left-icon="question" wrapable :scrollable="false" :text="sorts[sortIndex].notice" />
    </van-panel>
    <van-panel class="classification margin-top-12">
      <template #header>
        <van-cell class="padding-8">
          <template #title>
            <span class="card-title">地理位置</span>
          </template>
          <template #icon>
            <van-icon class-prefix="iconfont icon" name="shuxian" size="20" :style="{ color: '#306ce7' }" />
          </template>
        </van-cell>
      </template>
      <van-field
        v-model="address"
        type="textarea"
        left-icon="location"
        placeholder="定位地址"
        class="location"
        :border="false"
        autosize
        rows="1"
      />
      <div id="map" :style="{ margin: '10px', height: '255px' }"></div>
    </van-panel>
    <van-panel class="classification margin-top-12">
      <template #header>
        <van-cell class="padding-8">
          <template #title>
            <span class="card-title">问题描述</span>
          </template>
          <template #icon>
            <van-icon class-prefix="iconfont icon" name="shuxian" size="20" :style="{ color: '#306ce7' }" />
          </template>
        </van-cell>
      </template>
      <van-field
        v-model="eventdesc"
        rows="2"
        autosize
        type="textarea"
        maxlength="100"
        placeholder="请输入问题描述"
        show-word-limit
      />
    </van-panel>
    <van-panel class="classification margin-top-12">
      <template #header>
        <van-cell class="padding-8">
          <template #title>
            <span class="card-title">照片选择</span>
          </template>
          <template #icon>
            <van-icon class-prefix="iconfont icon" name="shuxian" size="20" :style="{ color: '#306ce7' }" />
          </template>
        </van-cell>
      </template>
      <div data-v-58f81ce1="" class="margin-top-12 margin-left-8 van-uploader">
        <div class="van-uploader__wrapper">
          <div class="van-uploader__preview" v-for="(item, index) in resultFile" :key="index">
            <div class="van-image van-uploader__preview-image" @click="showImagePreview(item)">
              <img :src="item" class="van-image__img" style="object-fit: cover;" />
            </div>
            <i class="van-icon van-icon-clear van-uploader__preview-delete" @click="deletePhoto(index)" />
          </div>
          <div class="van-uploader__upload" @click="showShare = true">
            <i class="van-icon van-icon-photograph van-uploader__upload-icon" />
          </div>
        </div>
      </div>
    </van-panel>
    <van-share-sheet v-model="showShare" :options="options" get-container="app" @select="handleSelect" />
    <van-row class="submit" @click="handleSubmit">
      <van-button type="info">上报</van-button>
    </van-row>
  </div>
</template>

<script>
import { Button, Cell, Field, Grid, Icon, ImagePreview, NavBar, NoticeBar, Panel, Row, ShareSheet, Uploader } from 'vant';
import coordtransform from 'coordtransform';
import GoBack from '@/components/GoBack/GoBack.vue';
import { report, uploadCaseImage } from '@/services/interfaces';
import { getAuthority } from '@/utils/authority';
import photograph from '@/assets/photograph.png';
import album from '@/assets/album.png';

export default {
  name: 'IssueReport',
  components: {
    GoBack,
    [Cell.name]: Cell,
    [Icon.name]: Icon,
    [Grid.name]: Grid,
    [Panel.name]: Panel,
    [Row.name]: Row,
    [NavBar.name]: NavBar,
    [NoticeBar.name]: NoticeBar,
    [Field.name]: Field,
    [Uploader.name]: Uploader,
    [Button.name]: Button,
    [ShareSheet.name]: ShareSheet,
  },
  data() {
    return {
      sorts: [
        {
          id: 1,
          label: '市容环境类',
          notice: '指垃圾满溢、河道污染、油烟污染、露天烧烤、私搭乱建、沿街乱挂等相关市容市貌类城市问题。',
          active: false,
        },
        {
          id: 2,
          label: '街面秩序类',
          notice: '指无照经营游商、流浪乞讨、占道经营、机动车乱停放等相关街面秩序类城市问题。',
          active: false,
        },
        {
          id: 3,
          label: '公共设施类',
          notice: '指井盖破损（丢失）、路灯异常、电线杆倾斜、指示牌破损、绿地护栏破损等公共设施类城市问题。',
          active: false,
        },
        {
          id: 4,
          label: '突发事件类',
          notice: '指供水管道破裂、燃气泄露、路面塌陷、火宅、山体滑坡等突发城市事件。',
          active: false,
        },
        {
          id: 5,
          label: '其他类',
          notice: '其他城市管理相关问题。',
          active: false,
        },
      ],
      sortIndex: 0,
      address: '',
      eventdesc: '',
      longitude: 0,
      latitude: 0,
      // 照片上传
      resultFile: [],
      showShare: false,
      options: [
        { id: 'photograph', name: '拍照', icon: photograph },
        { id: 'album', name: '相册', icon: album },
      ],
    };
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    handleSort(id) {
      for (let i = 0; i < this.sorts.length; i++) {
        const item = this.sorts[i];
        item.active = item.id === id;
        if (item.id === id) this.sortIndex = i;
      }
    },
    showImagePreview(url) {
      ImagePreview([url]);
    },
    deletePhoto(index) {
      this.resultFile.splice(index, 1);
    },
    handleSelect({ id }) {
      this.showShare = false;
      if (id === 'photograph') {
        this.$hesc.device.media.capture({
          custome: false, //true 自定义相机  false 系统相机
          compress: true, //true 进行压缩
          thumbnail: false, //true 优先返回缩略图base64，后台上传图片，false不需要缩略图，直接后台上传图片
          mediaUrl, //附件服务器地址
          onSuccess: result => {
            this.resultFile.push(result.pics[0].path);
          },
        });
      } else if (id === 'album') {
        this.$hesc.device.media.select({
          image: { multiple: false, compress: false, max: 1 }, //multiple true进行多选compress true进行压缩，max最多选9张，如果multiple设置为false，max默认赋值1
          thumbnail: false, //true 优先返回缩略图base64，后台上传图片，false不需要缩略图，直接后台上传图片
          mediaUrl, //附件服务器地址
          onSuccess: result => {
            this.resultFile.push(result.pics[0].path);
          },
        });
      }
    },
    handleSubmit() {
      if (!this.address) {
        this.$toast('地理位置不能为空');
        return;
      } else if (!this.eventdesc) {
        this.$toast('问题描述不能为空');
        return;
      } else if (!this.resultFile.length) {
        this.$toast('照片不能为空');
        return;
      }
      const bd09togcj02 = coordtransform.bd09togcj02(this.longitude, this.latitude);
      const gcj02towgs84 = coordtransform.gcj02towgs84(bd09togcj02[0], bd09togcj02[1]);
      this.$toast.loading({ duration: 0, message: '加载中...', forbidClick: true });
      report({
        phone: getAuthority('phone'),
        username,
        source: 7, // 定值
        x84: gcj02towgs84[0],
        y84: gcj02towgs84[1],
        eventdesc: `${this.sorts.filter(item => item.active)[0].label}：${this.eventdesc}`,
        address: this.address,
      }).then(({ code, msg, result }) => {
        this.$toast.clear();
        if (code !== '0') {
          this.$toast.fail(msg);
          return;
        }
        this.$toast.success('上报成功');
        uploadCaseImage({
          eventId: result.eventId,
          url: this.resultFile.map(item => item.replace('220.191.224.215', '10.75.5.56')).join(';'),
        }).then(({ code, msg, result }) => {
          if (code !== '0') this.$toast.fail('图片上传异常');
        });
        this.$router.back();
      });
    },
  },
  mounted() {
    this.sorts[0].active = true;
    this.sortIndex = 0;

    const setCoordinate = (longitude, latitude) => {
      this.longitude = longitude;
      this.latitude = latitude;
    };
    const setAddress = address => (this.address = address);

    const p = { x1: 0, y1: 0, x2: 0, y2: 0 };

    const map = new BMap.Map('map');
    const gc = new BMap.Geocoder();
    const geolocation = new BMap.Geolocation();
    geolocation.enableSDKLocation(); // 开启SDK辅助定位

    // const point = new BMap.Point(120.1277437202209, 30.285136108864272);
    // map.centerAndZoom(point, 19); // 用城市名设置地图中心点
    // map.addOverlay(new BMap.Marker(point)); // 将标注添加到地图中
    // map.panTo(point);
    // setCoordinate(point.lng, point.lat);
    // gc.getLocation(point, function(rs) {
    //   setAddress(rs.address);
    // });

    map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放

    /*
      map.addEventListener("click", ({ point }) => {
        // 用经纬度设置地图中心点
        setCoordinate(point.lng, point.lat);
        gc.getLocation(point, function(rs) {
          setAddress(rs.address);
        });
        map.clearOverlays();
        const new_point = new BMap.Point(point.lng, point.lat);
        const marker = new BMap.Marker(new_point); // 创建标注
        map.addOverlay(marker); // 将标注添加到地图中
        map.panTo(new_point);
      });
  */

    map.addEventListener('touchstart', function(evt) {
      p.x1 = p.x2 = evt.touches[0].clientX;
      p.y1 = p.y2 = evt.touches[0].clientY;
    });
    map.addEventListener('touchmove', function(evt) {
      p.x2 = evt.touches[0].clientX;
      p.y2 = evt.touches[0].clientY;
    });
    map.addEventListener('touchend', function(evt) {
      //如果x轴或者y轴移动超过10px，那么认为是拖动，而不是点击（touch），使用绝对值保证左右上下移动都可以计算正确
      if (Math.abs(p.x1 - p.x2) < 5 && Math.abs(p.y1 - p.y2) < 5) {
        setCoordinate(evt.point.lng, evt.point.lat);
        gc.getLocation(evt.point, function(rs) {
          setAddress(rs.address);
        });
        map.clearOverlays();
        const new_point = new BMap.Point(evt.point.lng, evt.point.lat);
        const marker = new BMap.Marker(new_point); // 创建标注
        map.addOverlay(marker); // 将标注添加到地图中
        map.panTo(new_point);
      }
    });

    const doMap = (lng, lat) => {
      const new_point = new BMap.Point(lng, lat);
      map.centerAndZoom(new_point, 19); // 用城市名设置地图中心点
      const marker = new BMap.Marker(new_point); // 创建标注
      map.clearOverlays();
      map.addOverlay(marker); // 将标注添加到地图中
      map.panTo(new_point);
    };

    this.$hesc.device.geolocation.get({
      key: '8730e769e5f114d59325884bf3b7a2e9',
      tiandi: true,
      poi: true,
      onSuccess: result => {
        setCoordinate(result.longitude, result.latitude);
        setAddress(result.address);
        doMap(result.longitude, result.latitude);
      },
      onFail: () => {
        this.$toast.fail('定位异常');
      },
    });
  },
};
</script>

<style scoped lang="less">
@import 'IssueReport';
.location {
  color: #fe2b2b;
  .van-field__control {
    border: 1px solid #aaaaaa;
    border-radius: 5px;
    padding: 0 5px;
  }
}
</style>
