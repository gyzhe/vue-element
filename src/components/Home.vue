<template>
  <el-container>
    <!-- 头部 -->
    <el-header>
      <div class="home_title">后台管理系统</div>
      <el-button type="info" round @click="layout">退出</el-button>
    </el-header>
    <el-container>
      <!-- 左侧导航 -->
      <menusList :userList="menuList"></menusList>
      <!-- 主体 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import menusList from '@/common/menusList'
export default {
  data() {
    return {
      //左侧用户列表
      menuList: [
        {
          id: 101,
          authName: '商品管理11',
          path: null,
          children: [
            {
              id: 104,
              authName: '商品列表',
              path: 'user',
              children: [],
            },
          ],
        },
      ]
    }
  },
  created() {
    this.getMenuList()
  },
  components: {
    menusList
  },
  methods: {
    layout() {
      window.sessionStorage.clear('token')
      this.$router.push('/login')
    },
    //获取左侧列表数据
    async getMenuList() {
      await this.$axios.get('menus').then((res) => {
        console.log(res)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.el-container {
  height: 100%;

  .el-header {
    background-color: #5998ea;
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    .home_title {
      color: #fff;
      font-size: 30px;
    }
  }
  .el-main {
    background-color: #e9eef3;
  }
}
</style>
