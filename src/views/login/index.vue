<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="login_container">
    <div class="login_box">

      <!-- 左侧 -->
      <div class="left_box">
        <h1>WELCOME</h1>
        <p>欢迎来到我的 Vue3 商业后台管理系统</p>
      </div>

      <!-- 右侧 -->
      <div class="right_box">
        <h1 class="title">用户登录</h1>

        <el-form class="login_form">

          <!-- 用户名 -->
          <el-form-item>
            <el-input
              v-model="username"
              placeholder="请输入用户名"
              clearable
              :prefix-icon="User"
            />
          </el-form-item>

          <!-- 密码 -->
          <el-form-item>
            <el-input
              v-model="password"
              type="password"
              placeholder="请输入密码"
              show-password
              :prefix-icon="Lock"
            />
          </el-form-item>

          <!-- 按钮 -->
          <el-form-item>
            <el-button
              type="primary"
              class="login_btn"
              @click="login"
            >
              登录
            </el-button>
          </el-form-item>

        </el-form>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { User, Lock } from '@element-plus/icons-vue'
import { useUserStore } from '@/store/modules/user'
const userStore = useUserStore()
const username = ref('')
const password = ref('')

const login = () => {
  if (!username.value || !password.value) {
    ElMessage.error('用户名或密码不能为空')
    return
  }
  //请求成功
  //请求失败
  userStore.userLogin({
    username:username.value,
    password: password.value
  } )
  ElMessage.success('登录成功')
}
</script>

<style scoped lang="scss">
/* 整体页面 */
.login_container {
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background: url('@/assets/images/1.jpg')
    no-repeat center center / cover;
}

/* 登录盒子 */
.login_box {
  width: 900px;
  height: 500px;

  display: flex;

  border-radius: 20px;
  overflow: hidden;

  background: rgba(255, 255, 255, 0.15);

  backdrop-filter: blur(10px);

  box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);
}

/* 左侧区域 */
.left_box {
  flex: 1;

  color: white;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: rgba(0, 0, 0, 0.3);

  h1 {
    font-size: 50px;
    margin-bottom: 20px;
  }

  p {
    font-size: 20px;
  }
}

/* 右侧区域 */
.right_box {
  flex: 1;

  background: transparent;  /* 改为透明 */
  /* 或者 background: rgba(255,255,255,0); */

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 0 60px;
}

/* 标题 */
.title {
  text-align: center;
  margin-bottom: 40px;

  font-size: 32px;
  color: #333;
}

/* 表单 */
.login_form {
  width: 100%;
}

/* 输入框 */
:deep(.el-input__wrapper) {
    background: transparent;  /* 改为透明 */
  /* 或者 background: rgba(255,255,255,0); */
  height: 45px;
  border-radius: 10px;
}

/* 按钮 */
.login_btn {
  width: 100%;
  height: 45px;

  font-size: 18px;
  border-radius: 10px;
}
</style>