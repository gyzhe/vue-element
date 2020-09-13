<template>
  <!-- 左侧导航 -->
  <el-aside :width="isCollapse? '64px':'200px'">
    <div class="home_button el-icon-menu" @click="toggleCollapse"></div>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#5998ea"
      text-color="#fff"
      active-text-color="#ffd04b"
      :collapse="isCollapse"
      :unique-opened ='true' 
      :default-active="activePath"
      router
    >
      <!-- 一级菜单 -->
      <el-submenu :index="item.id+''" v-for="item in userList" :key="item.id">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>{{item.authName}}</span>
        </template>

        <el-menu-item
          :index="'/'+item.path"
          v-for="item in item.children"
          :key="item.id" @click="saveNavState('/'+item.path)"
        >{{item.authName}}</el-menu-item>
      </el-submenu>
    </el-menu>
  </el-aside>
  <!-- 主体 -->
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false,
      //保持链接的激活状态
      activePath:''
    }
  },
  created(){
    this.activePath=window.sessionStorage.getItem('activePath')
  },
  props: ['userList'],
  created() {},
  methods: {
    //折叠
    toggleCollapse() {
      this.isCollapse = !this.isCollapse
    },
    //保存链接的激活状态
    saveNavState(activePath){
       window.sessionStorage.setItem('activePath',activePath)
       this.activePath=activePath
    }
  }
}
</script>

<style lang="scss" scoped>
.el-aside {
  background-color: #5998ea;
  .home_button {
    width: 100%;
    text-align: center;
    line-height: 40px;
    height: 40px;
    font-size: 24px;
    border-top: 1px solid #ccc;
  }
  .el-submenu__title i {
    color: #fff;
  }

  .el-menu {
    border: none;
  }
}
</style>
