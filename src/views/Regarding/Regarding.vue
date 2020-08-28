<template>
  <div class="regarding">
    <Header title="关于城市管家" @on-click="goBack"></Header>
    <div class="flex">
      <div class="logo">
        <img src="@/assets/regarding.png" alt="" width="100%" />
      </div>
      <p class="title">城市管家 V{{ versionName }}</p>
      <p class="footer">绍兴市城市管理行政执法局</p>
    </div>
  </div>
</template>

<script>
import { Image } from 'vant';
import Header from '@/components/Header/Header.vue';

export default {
  name: 'Regarding',
  components: { Header, [Image.name]: Image },
  data() {
    return { versionName: '1.0' };
  },
  methods: {
    goBack() {
      this.$router.back();
    },
  },
  mounted() {
    this.$hesc.soft.version({ onSuccess: ({ versionName }) => (this.versionName = versionName) });
  },
};
</script>

<style scoped lang="less">
.regarding {
  height: 100%;
  .flex {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    .logo {
      margin-top: 50%;
      width: 50%;
    }
    .title {
      margin-top: 20px;
      font-size: 20px;
      color: #4d4d4d;
    }
    .footer {
      position: absolute;
      bottom: 5%;
      font-size: 16px;
      color: #4d4d4d;
    }
  }
}
</style>
