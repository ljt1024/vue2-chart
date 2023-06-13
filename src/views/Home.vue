<template>
  <div class="home-container">
    <el-radio-group v-model="typeValue" @input="changeType">
      <el-radio-button
        v-for="item in chartTypeList"
        :label="item.value">
        {{item.label}}
      </el-radio-button>
    </el-radio-group>
    <ChartList ref="chartList"/>
  </div>
</template>

<script>
  import ChartList from '@/components/ChartList'
  export default {
    components: {
        ChartList
    },
    data() {
      return {
          typeValue: 0,
          chartTypeList: [
              { label: '全部', value: 0 },
              { label: '折线图', value: 1 },
              { label: '饼图', value: 2 },
              { label: '柱状图', value: 3 },
              { label: '象形柱图', value: 4 },
              { label: '雷达图', value: 5 },
              { label: '散点图', value: 6 },
              { label: '地图', value: 7 },
          ]
      };
    },
    methods: {
        changeType(value) {
            this.$refs.chartList.changeType(value)
        }
    }
  };
</script>

<style scoped lang="scss">
  .home-container {
      padding: 10px;
  }
</style>
