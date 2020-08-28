<template>
  <div class="case">
    <van-popup
      v-model="show"
      position="right"
      :style="{ width: '100%', height: '100%' }"
    >
      <HistoryCaseDetail
        :params="target"
        @close="onClose"
        v-if="target.id"
      ></HistoryCaseDetail>
    </van-popup>
    <Header title="历史案卷" @on-click="goBack"></Header>
    <van-search
      v-model="value"
      placeholder="搜索案卷编号或案卷描述"
      @search="handleSearch"
    />
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <div
        v-for="(item, index) in list"
        :key="item.id"
        class="cell"
        @click="intoDetail(item)"
      >
        <div class="cell-header">
          <span class="case-code">案件编号：{{ item.taskcode }}</span>
          <span class="case-status" :style="{ color: item.statusColor }">
            {{ item.newstatus }}
          </span>
        </div>
        <div class="cell-center">
          <van-swipe :autoplay="3000" class="carousel" :height="130">
            <van-swipe-item v-for="(child, i) in list[index].urls" :key="i">
              <img width="100%" :src="child.url" />
              <!--        v-lazy 出现第一张图高度没有自动匹配宽度的问题-->
            </van-swipe-item>
          </van-swipe>
          <div class="case-detail">
            <div>
              <van-icon
                name="location"
                size="17"
                :style="{ color: '#306ce7' }"
              />
              <div class="ellipsis">{{ item.address }}</div>
            </div>
            <div>
              <van-icon name="clock" :style="{ color: '#306ce7' }" />
              <van-field :value="item.formatTime" readonly class="text" />
            </div>
            <div style="align-items: flex-start;">
              <van-icon
                class-prefix="iconfont icon"
                name="wendang"
                size="15"
                :style="{ color: '#306ce7' }"
              />
              <div class="ellipsis-2">{{ item.eventdesc }}</div>
            </div>
          </div>
        </div>
      </div>
    </van-list>
  </div>
</template>

<script>
import {
  Cell,
  CellGroup,
  Col,
  Field,
  Icon,
  Image,
  List,
  NavBar,
  Popup,
  Row,
  Search,
  Swipe,
  SwipeItem
} from "vant";
import HistoryCaseDetail from "./HistoryCaseDetail";
import { getEventList } from "@/services/interfaces";
import { getAuthority } from "@/utils/authority";
import Header from "@/components/Header/Header.vue";

export default {
  name: "HistoryCase",
  components: {
    Header,
    HistoryCaseDetail,
    [NavBar.name]: NavBar,
    [Icon.name]: Icon,
    [Search.name]: Search,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Row.name]: Row,
    [Col.name]: Col,
    [Image.name]: Image,
    [List.name]: List,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Field.name]: Field,
    [Popup.name]: Popup
  },
  data() {
    return {
      value: "",
      list: [],
      loading: false,
      finished: false,
      curpage: 0,
      pagesize: 10,
      target: {},
      show: false
    };
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    handleSearch() {
      this.curpage = 1;

      this.$toast.loading({
        duration: 0,
        message: "加载中...",
        forbidClick: true
      });
      this.onSearch().then(result => {
        this.$toast.clear();
        this.list = result;
        if (result.length < 10) this.finished = true;
      });
    },
    onSearch() {
      return getEventList({
        userId: getAuthority("id"),
        searchvalue: this.value,
        curpage: this.curpage,
        pagesize: this.pagesize
      }).then(({ code, msg, result }) => {
        if (code !== "0") {
          this.$toast.fail(msg);
          return;
        }
        for (const item of result) {
          item.afterurls = item.afterurls
            ? item.afterurls.split(";").map(target => ({ url: target }))
            : [];
          item.urls = item.urls
            ? item.urls.split(";").map(target => ({ url: target }))
            : [];
          item.processList.reverse();
          for (const goal of item.processList) {
            if (goal.ptime) {
              goal.formatTime = new Date(goal.ptime).format(
                "yyyy-MM-dd hh:mm:ss"
              );
            }
          }
          if (item.createtime) {
            if (item.createtime) {
              item.formatTime = new Date(item.createtime).format(
                "yyyy-MM-dd hh:mm:ss"
              );
            }
          }
          if (item.newstatusNum === "1") item.statusColor = "#f00000";
          else if (item.newstatusNum === "2") item.statusColor = "#02a543";
          else if (item.newstatusNum === "3") item.statusColor = "#808080";
          else if (item.newstatusNum === "4") item.statusColor = "#306ce7";
        }
        return result;
      });
    },
    onLoad() {
      this.curpage += 1;
      this.onSearch().then(result => {
        this.list = this.list.concat(result);
        this.loading = false;
        // 数据全部加载完成
        if (result.length < 10) this.finished = true;
      });
    },
    intoDetail(item) {
      this.target = item;
      this.show = true;
    },
    onClose() {
      this.show = false;
      this.target = {};
    }
  }
};
</script>

<style scoped lang="less">
@import "HistoryCase";
</style>
