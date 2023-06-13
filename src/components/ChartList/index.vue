<template>
  <div class="chart-list" v-loading="loading">
    <el-card class="chart-card" v-for="item in chartList" :key="item.cid" @click.native="turn(item.cid)">
      <div slot="header">
        <span>{{item.name}}</span>
      </div>
      <div>
        <img :src="require('../../assets/images' + item.img)" alt="">
      </div>
    </el-card>
    <el-empty description="暂无示例" v-show="chartList.length === 0" class="no-data"></el-empty>
  </div>
</template>

<script>
    import chartData from "../../mock/chartData";
    export default {
        name: "index",
        data() {
            return {
                chartList: [],
                loading: false
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            init() {
                this.loading = true
                setTimeout(()=> {
                    this.chartList = chartData
                    this.loading = false
                }, 500)
            },
            turn(cid) {
                this.$router.push({
                    path: '/ChartDetail',
                    query: {cid}
                })
            },
            changeType(value) {
                if (value) {
                    this.loading = true
                    setTimeout(()=> {
                        this.chartList = chartData.filter(item=> item.type === value)
                        this.loading = false
                    }, 500)
                } else {
                    this.init()
                }
            }
        }
    }
</script>

<style scoped lang="scss">
 .chart-list {
   margin-top: 16px;
   display: flex;
   width: calc(100% - 20px);
   flex-wrap: wrap;

   .chart-card {
      width: calc(20% - 16px);
      margin: 8px;
      cursor: pointer;

     &:nth-child(5n) {
       margin-right: 0;
     }

     &:nth-child(5n - 4) {
       margin-left: 0;
     }

     ::v-deep .el-card__body, .el-main {
       padding: 0;
     }

     img {
       width: 100%;
     }
   }

   .no-data {
     position: relative;
     left: 50%;
     top: 50%;
     margin-top: 100px;
   }
 }
</style>
