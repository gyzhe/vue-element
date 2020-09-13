<template>
  <div>
    <!-- 面包屑 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>活动管理</el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片 -->
    <el-card class="box-card">
      <el-row>
        <el-col :span="6">
          <el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="input21"></el-input>
        </el-col>
        <el-col :span="2">
          <el-button type="primary" @click="getUserList">添加用户</el-button>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>
<script>
export default {
  data(){
    return{
      //获取用户列表参数对象
      queryInfo:{
         query:'',
         pagenum:1,
         pagesize:2
      }
    }
  },
  created(){
    this.getUserList()
  },
  methods:{
    getUserList(){
      this.$axios.get('users',{params:this.queryInfo}).then(res=>{
        console.log('users'+res)
      })
    }
  }
}
</script>
<style scoped lang='scss'>
.el-breadcrumb {
  font-size: 20px;
  margin-bottom: 20px;
}
.el-col-2 {
    margin-left: 20px !important;
  }
.box_card {
  
}
</style>