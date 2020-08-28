<template>
  <div class="center">
    <GoBack></GoBack>
    <div class="overlay"></div>
    <div class="header">
      <van-row type="flex" justify="center" class="padding-12">
        <van-col class="title">个人中心</van-col>
      </van-row>
    </div>
    <div class="card">
      <template>
        <van-row type="flex" align="center" class="register" v-if="!isLogin">
          <van-icon class-prefix="iconfont icon" name="ren" :style="{ color: '#306ce7' }" />
          <span @click="goTo('registration')">注册</span>
        </van-row>
        <van-image round width="2rem" height="2rem" :src="cover" class="logo" />
        <div class="tips">
          <template v-if="!isLogin">
            <span>已有账号，</span>
            <span class="underline" @click="goTo('login')">去登录</span>
          </template>
          <template v-else>
            {{ username }}
          </template>
        </div>
        <img src="@/assets/userInfo.png" alt="" class="userInfo" />
      </template>
      <template></template>
    </div>
    <van-cell-group>
      <van-cell :title="item.title" is-link v-for="(item, index) in list" :key="index" @click="handleItem(item)">
        <template #icon>
          <van-icon
            class-prefix="iconfont icon"
            :name="item.icon"
            size="18"
            class="cell-icon"
            :style="{ 'background-color': item.backColor }"
          />
        </template>
      </van-cell>
    </van-cell-group>
    <van-row class="logout" @click="logout" v-if="isLogin">
      <van-button type="danger">注销</van-button>
    </van-row>
  </div>
</template>

<script>
import { Button, Cell, CellGroup, Col, Dialog, Icon, Image, Row } from 'vant';
import GoBack from '@/components/GoBack/GoBack.vue';
import { getAuthority } from '@/utils/authority';
import cover from '@/assets/cover.png';

export default {
  name: 'Center',
  components: {
    GoBack,
    [Button.name]: Button,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Icon.name]: Icon,
    [Row.name]: Row,
    [Col.name]: Col,
    [Image.name]: Image,
    [Dialog.Component.name]: Dialog.Component,
  },
  data() {
    return {
      list: [
        {
          title: '修改密码',
          icon: 'mima',
          backColor: '#4ec7ff',
          link: 'modify-password',
          authority: 0,
        },
        // { title: "通用设置", icon: "tubiao01", backColor: "#00bfa3", link: "" },
        {
          title: '关于城市管家',
          icon: 'guanyu',
          backColor: '#fda271',
          link: 'regarding',
        },
      ],
      isLogin: !!getAuthority('id'),
      username: getAuthority('name') || '登录',
      cover,
    };
  },
  methods: {
    goTo(name) {
      this.$router.push({ name });
    },
    logout() {
      localStorage.clear();
      this.$router.replace({ path: '/' });
    },
    handleItem(item) {
      const { title, link, authority } = item;
      if (!link) {
        this.$toast({ duration: 500, message: '功能建设中' });
        return;
      }
      if (authority && !getAuthority('id')) {
        Dialog.confirm({
          title: '温馨提示',
          message: `${title}需先登录，是否去登录？`,
        })
          .then(() => this.$router.push({ name: 'login' }))
          .catch(() => {});
        return;
      }
      this.$router.push({ name: link });
    },
  },
};
</script>

<style scoped lang="less">
@import 'Center';
</style>
