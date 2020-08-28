<template>
  <div class="user">
    <GoBack></GoBack>
    <div class="card">
      <p class="title">注册</p>
      <div class="form">
        <div class="form-item">
          <p class="label">手机号</p>
          <van-field clearable v-model="phone" placeholder="请输入手机号" />
        </div>
        <div class="form-item">
          <p class="label">手机验证码</p>
          <van-field clearable v-model="vcode" placeholder="请输入手机验证码">
            <template #button>
              <van-button size="small" hairline @click="getVCode" v-if="countDown === 0">
                发送验证码
              </van-button>
              <van-count-down :time="countDown" format="ss" @finish="handleFinish" v-else />
            </template>
          </van-field>
        </div>
        <div class="form-item">
          <p class="label">用户名</p>
          <van-field clearable v-model="name" placeholder="请输入用户名" />
        </div>
        <div class="form-item">
          <p class="label">密码</p>
          <van-field clearable v-model="password" type="password" placeholder="请输入密码" />
        </div>
        <div class="form-item">
          <p class="label">确认密码</p>
          <van-field clearable v-model="confirm" placeholder="请确认密码" />
        </div>
      </div>
    </div>
    <div class="submit">
      <van-button round color="linear-gradient(0, #2c62e6, #4eb5f0)" :style="{ width: '100%' }" @click="handleRegister">
        注册
      </van-button>
    </div>
    <div class="tips">
      <span>已有账号，</span>
      <span class="underline" @click="goToLogin">去登录</span>
    </div>
  </div>
</template>

<script>
import { Button, CountDown, Field } from 'vant';
import GoBack from '@/components/GoBack/GoBack.vue';
import { getVCode, register } from '@/services/interfaces';
import { isMobile } from '@/utils/utils';

export default {
  name: 'registration',
  components: { GoBack, [Button.name]: Button, [CountDown.name]: CountDown, [Field.name]: Field },
  data() {
    return {
      phone: '',
      vcode: '',
      countDown: 0,
      name: '',
      password: '',
      confirm: '',
    };
  },
  methods: {
    goToLogin() {
      this.$router.replace({ name: 'login' });
    },
    getVCode() {
      if (!isMobile(this.phone)) {
        this.$toast('请输入正确的手机号');
        return;
      }
      this.$toast.loading({
        duration: 0,
        message: '加载中...',
        forbidClick: true,
      });
      getVCode({ phone: this.phone, type: 0 }).then(({ code, msg, result }) => {
        this.$toast.clear();
        if (code !== '0') this.$toast.fail(msg);
        else this.countDown = 60 * 1000;
      });
    },
    handleFinish() {
      this.countDown = 0;
    },
    handleRegister() {
      if (!isMobile(this.phone)) {
        this.$toast('请输入正确的手机号');
        return;
      } else if (!this.vcode) {
        this.$toast('请输入六位验证码');
        return;
      } else if (!this.name) {
        this.$toast('请输入用户名');
        return;
      } else if (!this.password) {
        this.$toast('请输入密码');
        return;
      } else if (!this.confirm) {
        this.$toast('请输入确认密码');
        return;
      } else if (!(this.password === this.confirm)) {
        this.$toast('密码不一致');
        return;
      }
      this.$toast.loading({
        duration: 0,
        message: '加载中...',
        forbidClick: true,
      });
      register({
        phone: this.phone,
        vcode: this.vcode,
        name: this.name,
        password: this.password,
      }).then(({ code, msg, result }) => {
        this.$toast.clear();
        if (code !== '0') {
          this.$toast.fail(msg);
          return;
        }
        let second = 3;
        const toast = this.$toast.loading({
          duration: 0,
          forbidClick: true,
          message: `注册成功， ${second} 秒后跳转登录页`,
        });
        const timer = setInterval(() => {
          second--;
          if (second) toast.message = `注册成功， ${second} 秒后跳转登录页`;
          else {
            clearInterval(timer);
            this.$toast.clear();
            this.goToLogin();
          }
        }, 1000);
      });
    },
  },
};
</script>

<style scoped lang="less">
@import 'User';
</style>
