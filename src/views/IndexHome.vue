<template>
  <AdaptiveView>
    <dv-border-box11 title="香蕉麻花皮测试" :title-width="400" :animate="false" class="box-title">
      <!-- 上部分 -->
      <div class="box">
        <div>
          <dv-border-box1 class="frame1">
            <dv-loading v-if="loading1"></dv-loading>
            <IndexData1 :data="data1.list" v-else></IndexData1>
          </dv-border-box1>
        </div>
        <div>
          <dv-border-box2 class="frame2">
            <IndexData2></IndexData2>
          </dv-border-box2>
        </div>
        <div>
          <dv-border-box3 class="frame3">
            <IndexData3></IndexData3>
          </dv-border-box3>
        </div>
      </div>
      <!-- 中部分 -->
      <div class="box">
        <div class="left">
          <div>
            <dv-border-box4 class="frame4">
              <IndexData4></IndexData4>
            </dv-border-box4>
          </div>
          <div>
            <dv-border-box5 class="frame5">
              <IndexData5></IndexData5>
            </dv-border-box5>
          </div>
        </div>
        <div class="right">
          <div>
            <dv-border-box6 class="frame6">
              <IndexData6></IndexData6>
            </dv-border-box6>
          </div>
        </div>


      </div>
      <!-- 下部分 -->
      <div class="box">
        <div>
          <dv-border-box7 class="frame7">
            <IndexData7></IndexData7>
          </dv-border-box7>
        </div>
        <div>
          <dv-border-box8 class="frame8">
            <IndexData8></IndexData8>
          </dv-border-box8>
        </div>
        <div>
          <dv-border-box9 class="frame9">
            <IndexData9></IndexData9>
          </dv-border-box9>
        </div>
        <div>
          <dv-border-box10 class="frame10">
            <IndexData9></IndexData9>
          </dv-border-box10>
        </div>
      </div>
    </dv-border-box11>
  </AdaptiveView>
</template>

<script lang="ts" setup>
import { ref, onMounted, reactive } from "vue";
import IndexData1 from './IndexData1.vue';
import IndexData2 from './IndexData2.vue';
import IndexData3 from './IndexData3.vue';
import IndexData4 from './IndexData4.vue';
import IndexData5 from './IndexData5.vue';
import IndexData6 from './IndexData6.vue';
import IndexData7 from './IndexData7.vue';
import IndexData8 from './IndexData8.vue';
import IndexData9 from './IndexData9.vue';
import AdaptiveView from '@/components/AdaptiveView.vue';
import { info } from './api';

// 定义响应式数据
const loading1 = ref(true);
let data1: any = reactive({
  list: ""
});

// 异步函数获取数据
async function getData() {
  const { data } = await info();
  console.log(123);
  loading1.value = false;
  data1.list = data.data;
}

// 在 mounted 时调用 getData
onMounted(() => {
  // 第一次获取数据
  getData();

  // 每隔 6 分钟获取一次数据
  setInterval(() => {
    getData();
  }, 360000);
});

</script>

<style scoped>
.box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.frame1 {
  height: 230px;
  width: 615px;
  margin-top: 10px;
}

.frame2 {
  height: 230px;
  width: 615px;
  margin-top: 10px;
}

.frame3 {
  height: 230px;
  width: 615px;
  margin-top: 10px;
}
.left{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.frame4 {
  height: 190px;
  width: 615px;
  margin-top: 10px;
}

.frame5 {
  height: 190px;
  width: 615px;
  margin-top: 10px;
}

.frame6 {
  height: 380px;
  width: 1230px;
  margin-top: 10px;
}

.frame7,.frame8 ,.frame9 ,.frame10  {
  height: 380px;
  width: 461.25px;
  margin-top: 10px;
}
 

.box-title {
  padding-top: 40px;
  padding-left: 20px;
  padding-right: 20px;
  box-sizing: border-box;
}
</style>