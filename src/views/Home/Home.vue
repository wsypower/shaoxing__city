<template>
  <div :style="{ position: 'relative' }">
    <div class="overlay"></div>
    <div class="header">
      <van-row
        type="flex"
        align="center"
        justify="space-between"
        class="padding-12"
      >
        <van-col
          span="6"
          class="location"
        >
          <!--<van-icon name="location" />
          杭州市-->
        </van-col>
        <van-col
          span="12"
          class="title"
        >绍兴城市管家</van-col>
        <van-col
          span="6"
          class="user-info"
          @click="goToCenter"
        >
          <van-icon
            class-prefix="iconfont icon"
            name="yonghudianji"
          />
          个人中心
        </van-col>
      </van-row>
    </div>
    <van-swipe
      :autoplay="3000"
      class="margin-horizontal-12 swipe"
    >
      <van-swipe-item
        v-for="(image, index) in images"
        :key="index"
      >
        <img
          width="100%"
          :src="image"
        />
        <!--        v-lazy 出现第一张图高度没有自动匹配宽度的问题-->
      </van-swipe-item>
    </van-swipe>
    <van-panel class="margin-top-12">
      <template #header></template>
      <van-row
        type="flex"
        align="center"
        justify="space-around"
        class="padding-12"
      >
        <van-col
          class="temperature"
          span="6"
        >{{ meteorology.tem }}℃</van-col>
        <van-col
          span="4"
          class="flex-column"
        >
          <img
            :src="meteorology.picture"
            width="70%"
          />
        </van-col>
        <van-col
          span="4"
          class="flex-column"
        >
          <p class="situation">{{ meteorology.wea }}</p>
          <van-tag
            :color="quality(+meteorology.air)"
            :style="{ color: '#333333' }"
            class="margin-top-4"
          >
            {{ meteorology.air_level }}
          </van-tag>
        </van-col>
        <van-col
          class="date"
          span="10"
        >
          <p>农历{{ meteorology.LC }}</p>
          <p>{{ meteorology.week }} {{ meteorology.date }}</p>
        </van-col>
      </van-row>
    </van-panel>
    <van-panel class="margin-top-12">
      <template #header>
        <van-cell
          title="城事大家管"
          class="padding-8"
        >
          <template #icon>
            <van-icon
              class-prefix="iconfont icon"
              name="shuxian"
              size="20"
              :style="{ color: '#306ce7' }"
            />
          </template>
        </van-cell>
      </template>
      <van-grid :border="false">
        <van-grid-item
          icon-prefix="iconfont icon"
          :icon="item.icon"
          :text="item.text"
          :style="{ color: item.color }"
          @click="handleLink(item)"
          v-for="(item, index) in grid1"
          :key="index"
        />
      </van-grid>
    </van-panel>
    <van-panel class="margin-top-12">
      <template #header>
        <van-cell
          title="便民服务"
          class="padding-8"
        >
          <template #icon>
            <van-icon
              class-prefix="iconfont icon"
              name="shuxian"
              size="20"
              :style="{ color: '#306ce7' }"
            />
          </template>
        </van-cell>
      </template>
      <van-grid :border="false">
        <van-grid-item
          icon-prefix="iconfont icon"
          :icon="item.icon"
          :text="item.text"
          :style="{ color: item.color }"
          @click="handleLink(item)"
          v-for="(item, index) in grid2"
          :key="index"
        />
      </van-grid>
    </van-panel>
  </div>
</template>

<script>
import { Cell, Col, Dialog, Field, Grid, GridItem, Icon, Panel, Row, Swipe, SwipeItem, Tag } from 'vant';
import { stringify } from 'qs';
import banner1 from '@/assets/banner1.png';
import banner2 from '@/assets/banner2.png';
import banner3 from '@/assets/banner3.png';
import cloudy from '@/assets/weather/cloudy.png';
import downpour from '@/assets/weather/downpour.png';
import hail from '@/assets/weather/hail.png';
import misty from '@/assets/weather/misty.png';
import overcast from '@/assets/weather/overcast.png';
import duststorm from '@/assets/weather/duststorm.png';
import snowy from '@/assets/weather/snowy.png';
import sunny from '@/assets/weather/sunny.png';
import thunderyStorm from '@/assets/weather/thundery-storm.png';
import { getAuthority } from '@/utils/authority';
import { getLunarDay } from '@/utils/utils';
import { getMeteorology } from '@/services/interfaces';

export default {
  name: 'Home',
  components: {
    [Cell.name]: Cell,
    [Icon.name]: Icon,
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Panel.name]: Panel,
    [Row.name]: Row,
    [Col.name]: Col,
    [Tag.name]: Tag,
    [Dialog.Component.name]: Dialog.Component,
    [Field.name]: Field,
  },
  data() {
    return {
      isLogin: !!getAuthority('id'),
      username: getAuthority('name') || '登录',
      images: [banner1, banner2, banner3],
      meteorology: { wea: '', tem: '', week: '', date: '' },
      grid1: [
        { text: '问题上报', icon: 'wenti', color: '#ff5b59', link: 'issue-report' },
        { text: '历史案卷', icon: 'lishidingdan', color: '#02d298', link: 'history-case' },
        // { text: '优秀案卷', icon: 'anjiandangan', color: '#637bff', link: '' },
        // { text: '曝光台', icon: 'puguangtai', color: '#fe9132', link: '' },
      ],
      grid2: [
        { text: '养犬管理', icon: 'gou', color: '#fe9132', link: 'dogs' },
        { text: '自行车', icon: 'bike', color: '#637bff', link: 'MapServeBike' },
        { text: '找公厕', icon: 'weishengjian', color: '#fe9132', link: 'MapServeWc' },
        { text: '停车诱导', icon: 'tingchechang', color: '#02d298', link: 'parking' },
        // { text: '违停查询', icon: 'weizhang', color: '#ff5b59', link: '' },
        { text: '市长热线', icon: 'show_dianhua_full', color: '#02d298', link: '057512345', phone: '057512345' },
        { text: '报警110', icon: 'zuoyebaojing', color: '#ff5b59', link: '110', phone: '110' },
        { text: '垃圾分类指南', icon: 'lajigarbage8', color: '#fe9132', link: 'Waste' },
        // { text: '机构分布', icon: 'jigou', color: '#637bff', link: '' },
      ],
    };
  },
  methods: {
    quality(t) {
      if (t > 0 && t < 50) return '#04e501';
      else if (t > 51 && t < 100) return '#ffff01';
      else if (t > 101 && t < 150) return '#ff7a01';
      else if (t > 151 && t < 200) return '#f60403';
      else if (t > 201 && t < 300) return '#9c024b';
      else return '#780124';
    },
    goToCenter() {
      this.$router.push({ name: 'center' });
    },
    handleLink(item) {
      const { text, link, phone } = item;
      if (!link) {
        this.$toast({ duration: 500, message: '功能建设中' });
        return;
      }
      if (link === 'MapServeBike' || link === 'MapServeWc') {
        this.$router.push({ name: link });
        return;
      }
      if (link === 'parking') {
        window.open('https://h5.xinwen4.com/sfxt/map.html');
        return;
      }
      if (link === 'Waste') {
        window.open('https://url.cn/m91ILd2Y');
        return;
      }
      if (phone) {
        this.$hesc.biz.telephone.call({
          phone: phone, //电话号码
          onSuccess() {},
          onFail() {},
        });
        return;
      }
      if (!getAuthority('id')) {
        Dialog.confirm({ title: '温馨提示', message: `${text}需先登录，是否去登录？` })
          .then(() => this.$router.push({ name: 'login' }))
          .catch(() => {});
        return;
      }
      if (link === 'dogs') {
        window.open(`${dogLink}?${stringify({ userid: getAuthority('id') })}`, '_self');
        return;
      }
      this.$router.push({ name: link });
    },
  },
  mounted() {
    getMeteorology().then(res => {
      this.meteorology = res;
      const D = new Date();
      const yy = D.getFullYear();
      const mm = D.getMonth() + 1;
      const dd = D.getDate();
      this.meteorology.LC = getLunarDay(yy, mm, dd);
      const sWeek = new Array('星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六');
      this.meteorology.week = sWeek[D.getDay()];
      this.meteorology.date = D.format('yyyy-MM-dd');
      const dict = {
        xue: snowy,
        lei: thunderyStorm,
        shachen: duststorm,
        wu: misty,
        bingbao: hail,
        yun: cloudy,
        yu: downpour,
        yin: overcast,
        qing: sunny,
      };
      this.meteorology.picture = dict[this.meteorology.wea_img];
    });
  },
};
</script>

<style scoped lang="less">
@import 'Home';
p {
}
</style>
