<template>
    <dv-loading v-if="loading1"></dv-loading>
    <div ref="refecharts" class="interior" v-else>
    </div>
</template>

<script lang="ts">
import { info3 } from "./api"
import { ref, onMounted, nextTick, watch } from "vue"
import * as echarts from 'echarts';

export default {
    setup() {
        const loading1 = ref(true)
        const refecharts = ref()
        const echartsfun = ({data}: any) => {
     
            const myChart = echarts.init(refecharts.value);
            const option = {
                xAxis: {
                    type: 'category',
                    data: Object.keys(data)
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        data: Object.values(data),
                        type: 'bar'
                    }
                ]
            };

            option && myChart.setOption(option);
        }
        const getdata = async () => {
            const { data } = await info3()
            if (data.code == 200) {
                loading1.value = false
                nextTick(() => {  //当loadging切换时，dom变化，执行nexttick函数
                    if (refecharts.value) {  //判断是否获取到dom，如果没有获取到就不执行，只执行onmounted里的getdata，防止调试时因为获取不到dom而报错
                        echartsfun(data)
                    }
                })

            }

        }

        onMounted(() => {
            setInterval(() => {
                getdata()
            }, 360000)
            getdata()
        })

        return {
            refecharts, loading1
        }
    }
}
</script>

<style scoped>
.interior {
    height:380px;
    width: 461.25px
}
</style>