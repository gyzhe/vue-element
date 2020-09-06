<template>
  <div>
    <el-button type="info" round @click="layout">退出</el-button>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  methods:{
    layout(){
      window.sessionStorage.clear('token')
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
