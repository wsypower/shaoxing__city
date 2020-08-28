<template>
  <div class="user">
    <GoBack></GoBack>
    <div class="card">
      <p class="title">登录</p>
      <div class="form">
        <div class="form-item">
          <p class="label">手机号</p>
          <van-field clearable v-model="phone" placeholder="请输入手机号" />
        </div>
        <div class="form-item">
          <p class="label">密码</p>
          <van-field clearable v-model="password" type="password" placeholder="请输入密码" />
        </div>
      </div>
    </div>
    <div class="submit">
      <van-button round color="linear-gradient(0, #2c62e6, #4eb5f0)" :style="{ width: '100%' }" @click="handleLogin">
        登录
      </van-button>
    </div>
    <div class="tips">
      <span>还没有账号，</span>
      <span class="underline" @click="goToRegister">去注册</span>
    </div>
  </div>
</template>

<script>
import { Button, Field } from 'vant';
import GoBack from '@/components/GoBack/GoBack.vue';
import { login } from '@/services/interfaces';
import { isMobile } from '@/utils/utils';
import { setAuthority } from '@/utils/authority';

export default {
  name: 'Login',
  components: { GoBack, [Button.name]: Button, [Field.name]: Field },
  data() {
    return { phone: '', password: '' };
  },
  methods: {
    goToRegister() {
      this.$router.replace({ name: 'registration' });
    },
    handleLogin() {
      if (!isMobile(this.phone)) {
        this.$toast('请输入正确的手机号');
        return;
      } else if (!this.password) {
        this.$toast('请输入密码');
        return;
      }
      this.$toast.loading({
        duration: 0,
        message: '加载中...',
        forbidClick: true,
      });
      login({ phone: this.phone, password: this.password }).then(({ code, msg, result }) => {
        this.$toast.clear();
        if (code !== '0') {
          this.$toast.fail(msg);
          return;
        }
        setAuthority('id', result.id);
        setAuthority('name', result.name);
        setAuthority('password', result.password);
        setAuthority('phone', result.phone);
        setAuthority('sex', result.sex);
        setAuthority('status', result.status);
        this.$router.replace({ path: '/' });
      });
    },
  },
};
</script>

<style scoped lang="less">
@import 'User';
</style>
