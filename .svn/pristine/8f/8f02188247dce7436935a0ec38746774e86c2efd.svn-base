<template>
  <div class="modify-password">
    <Header title="修改密码" @on-click="goBack"></Header>
    <van-cell-group>
      <van-cell icon="shoujihao" icon-prefix="iconfont icon">
        <template #title>
          <template v-if="authorityId">{{ phone }}</template>
          <van-field v-model="phone" placeholder="请输入手机号" class="field v-code" v-else />
        </template>
      </van-cell>
      <van-cell icon="yanzhengma" icon-prefix="iconfont icon">
        <template #title>
          <van-field v-model="vcode" placeholder="请输入验证码" class="field v-code" />
        </template>
        <template #right-icon>
          <van-button plain type="info" size="mini" @click="getVCode" v-if="countDown === 0">
            获取验证码
          </van-button>
          <van-count-down :time="countDown" format="sss" @finish="handleFinish" v-else />
        </template>
      </van-cell>
      <van-cell icon="mima1" icon-prefix="iconfont icon">
        <template #title>
          <van-field v-model="password" placeholder="设置新密码" class="field" type="password" />
        </template>
      </van-cell>
      <van-cell icon="mima1" icon-prefix="iconfont icon">
        <template #title>
          <van-field v-model="confirm" placeholder="请再次输入新密码" class="field" type="password" />
        </template>
      </van-cell>
    </van-cell-group>
    <div class="submit">
      <van-button type="info" @click="handleSubmit">提 交</van-button>
    </div>
  </div>
</template>

<script>
import { Button, Cell, CellGroup, CountDown, Field, Icon } from 'vant';
import Header from '@/components/Header/Header.vue';
import { changePWD, getVCode } from '@/services/interfaces';
import { getAuthority } from '@/utils/authority';

export default {
  name: 'ModifyPassword',
  components: {
    Header,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Icon.name]: Icon,
    [Field.name]: Field,
    [Button.name]: Button,
    [CountDown.name]: CountDown,
  },
  data() {
    return {
      authorityId: getAuthority('id'),
      phone: getAuthority('phone') || '',
      vcode: '',
      countDown: 0,
      password: '',
      confirm: '',
    };
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    getVCode() {
      this.$toast.loading({
        duration: 0,
        message: '加载中...',
        forbidClick: true,
      });
      getVCode({ phone: this.phone, type: 1 }).then(({ code, msg }) => {
        this.$toast.clear();
        if (code !== '0') this.$toast.fail(msg);
        else this.countDown = 60 * 1000;
      });
    },
    handleFinish() {
      this.countDown = 0;
    },
    handleSubmit() {
      if (!this.vcode) {
        this.$toast('请输入六位验证码');
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
      changePWD({
        phone: this.phone,
        vcode: this.vcode,
        password: this.password,
      }).then(({ code, msg }) => {
        if (code !== '0') {
          this.$toast.fail(msg);
          return;
        }
        this.$toast.success(msg);
        this.$router.replace({ name: 'center' });
      });
    },
  },
};
</script>

<style scoped lang="less">
.modify-password {
  height: 100%;
}
.field {
  padding: 0;
}
.v-code {
  padding-right: 5px;
}
.submit {
  width: 80%;
  margin: 0 auto;
  margin-top: 30px;
  button {
    width: 100%;
    border-radius: 5px;
  }
}
</style>
