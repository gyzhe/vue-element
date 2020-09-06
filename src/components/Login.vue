<template>
  <div class="login_container">
    <div class="login_box">
      <div class="avator_box">
        <img src alt />
      </div>
      <!-- 表单 -->
      <el-form :label-position="labelPosition" label-width="80px"
      :model="form" :rules="loginFormRules" ref="loginFromRef">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="form.username" type="text"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="form.password" type="password"></el-input>
        </el-form-item>
        <el-form-item class="form_btn">
          <el-button type="primary" @click="login">登录</el-button>
           <el-button type="info" @click="resetForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
    data() {
      return {
        labelPosition: 'right',
        form: {
          username: '',
          password: ''
        },
        loginFormRules:{
          username:[
             { required: true, message: '请输入名称', trigger: 'blur' },
            { min: 3, max: 10, message: '长度在 3 到 10个字符', trigger: 'blur' }
          ],
          password:[
             { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
          ]
        }
      }
    },
    methods:{
      resetForm(){
        this.$refs.loginFromRef.resetFields();
      },
      login(){
        this.$refs.loginFromRef.validate(async valid=>{
         if (valid) {
            await this.$axios.post('login',this.form).then((res)=>{
              //console.log(res)
              const data=res.data.meta
              //console.log('pppp'+res.data.data.token)
              if(data.status!==200){
                this.$message.error('登录失败')
              }else{
                this.$message.success('登录成功')
                window.sessionStorage.setItem('token',res.data.data.token)
                this.$router.push('/home')
              }
            })
          } else {
            //console.log()
            return false
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
.login_container {
  background-color: purple;
  height: 100%;
  position: relative;
  .login_box {
    width: 450px;
    height: 300px;
    background-color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .avator_box{
      margin-bottom: 30px;
    }
    .el-input{
      width: 85%;
    }
    .form_btn{
      position: absolute;
      right: 15%;
      bottom: 10%;
    }
  }
}
</style>
