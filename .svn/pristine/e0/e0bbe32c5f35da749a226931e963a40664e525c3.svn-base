<template>
  <div :style="{ position: 'relative' }">
    <div class="overlay">
      <img width="100%" src="@/assets/login-background.jpg" alt="" />
    </div>
    <van-row class="header" type="flex" align="bottom" justify="center">
      <div class="logo">
        <van-icon
          class-prefix="iconfont icon"
          name="city"
          size="70"
          :style="{ color: '#4eb5f0' }"
        />
      </div>
    </van-row>
    <div :style="{ position: 'relative' }">
      <router-view />
    </div>
  </div>
</template>

<script>
import { Row, Col, Icon } from "vant";

export default {
  name: "BasicLayout",
  components: { [Icon.name]: Icon, [Row.name]: Row, [Col.name]: Col }
};
</script>

<style scoped lang="less">
@import "UserLayout";
</style>
