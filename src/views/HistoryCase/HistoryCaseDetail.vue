<template>
  <div>
    <Header title="案卷详情" @on-click="onClose"></Header>
    <van-cell-group>
      <van-cell title="案件编号" :value="params.taskcode" />
      <van-cell title="问题状态">
        <template #default>
          <span :style="{ color: params.statusColor }">
            {{ params.newstatus }}
          </span>
        </template>
      </van-cell>
      <van-cell title="上报时间" :value="params.formatTime" />
      <van-panel class="panel-border-bottom">
        <template #header>
          <div class="panel-header">地理位置</div>
        </template>
        <van-cell
          icon="location"
          :border="false"
          :value="params.address"
          style="color: #fe2b2b;"
          class="content"
        />
        <div id="map" :style="{ margin: '0 10px', height: '200px' }"></div>
      </van-panel>
      <van-panel class="panel-border-bottom">
        <template #header>
          <div class="panel-header">问题描述</div>
        </template>
        <div class="content">{{ params.eventdesc }}</div>
      </van-panel>
      <van-panel class="panel-border-bottom">
        <template #header>
          <div class="panel-header">上传图片</div>
        </template>
        <div class="content">
          <van-uploader
            v-model="params.urls"
            :max-count="0"
            :deletable="false"
            :show-upload="false"
          />
        </div>
      </van-panel>
      <van-panel class="panel-border-bottom" v-if="params.afterurls.length">
        <template #header>
          <div class="panel-header">处置图片</div>
        </template>
        <div class="content">
          <van-uploader
            v-model="params.afterurls"
            :max-count="0"
            :deletable="false"
            :show-upload="false"
          />
        </div>
      </van-panel>
      <van-panel class="panel-border-bottom">
        <template #header>
          <div class="panel-header">处理状态</div>
        </template>
        <div class="steps">
          <van-steps
            direction="vertical"
            :active="params.processList.length"
            active-color="#306ce7"
          >
            <van-step
              v-for="(item, index) in params.processList"
              :key="index"
              class="step"
            >
              <template #inactive-icon>
                <i class="inactive">
                  <i class="inactive child"></i>
                </i>
              </template>
              <div>
                <span class="status">{{ item.pname }}</span>
                <span class="time">{{ item.formatTime }}</span>
              </div>
              <p class="text">
                {{ item.pdetail
                }}{{ item.pdealmsg ? `【处理意见：${item.pdealmsg}】` : "" }}
              </p>
            </van-step>
          </van-steps>
        </div>
      </van-panel>
    </van-cell-group>
  </div>
</template>

<script>
import {
  Button,
  Cell,
  CellGroup,
  Icon,
  NavBar,
  Panel,
  Step,
  Steps,
  Uploader
} from "vant";
import coordtransform from "coordtransform";
import Header from "@/components/Header/Header.vue";

export default {
  name: "HistoryCaseDetail",
  components: {
    Header,
    [NavBar.name]: NavBar,
    [Icon.name]: Icon,
    [Panel.name]: Panel,
    [Button.name]: Button,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Uploader.name]: Uploader,
    [Steps.name]: Steps,
    [Step.name]: Step
  },
  props: { params: Object },
  methods: {
    onClose() {
      this.$emit("close");
    }
  },
  mounted() {
    //wgs84转国测局坐标
    const wgs84togcj02 = coordtransform.wgs84togcj02(
      this.params.x84,
      this.params.y84
    );
    //国测局坐标转百度经纬度坐标
    const gcj02tobd09 = coordtransform.gcj02tobd09(
      wgs84togcj02[0],
      wgs84togcj02[1]
    );
    const map = new BMap.Map("map");
    const point = new BMap.Point(gcj02tobd09[0], gcj02tobd09[1]);
    map.centerAndZoom(point, 18);
    map.addOverlay(new BMap.Marker(point)); // 将标注添加到地图中
    map.panTo(point);
  }
};
</script>

<style scoped lang="less">
.panel-border-bottom {
  padding-bottom: 10px;
  border-bottom: 1px solid #ebedf0;
}
.content {
  padding: 0 16px;
}
.panel-header {
  padding: 10px 16px;
}
.steps {
  padding: 16px;
  background-color: #f7f7f7;
  .van-steps {
    background-color: transparent;
  }
}
.status {
  font-size: 16px;
  color: #306ce7;
}
.time {
  float: right;
  font-size: 14px;
  color: #666666;
}
.text {
  margin-top: 9px;
  font-size: 14px;
  color: #666666;
}
.inactive {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15px;
  height: 15px;
  background-color: rgba(#306ce7, 0.23);
  border-radius: 50%;
}
.child {
  width: 9px;
  height: 9px;
  background-color: #306ce7;
}
</style>
