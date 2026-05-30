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

        <el-form
          class="login_form"
          :model="loginForm"
          :rules="rules"
          ref="loginFormRef"
        >
          <!-- 用户名 -->
          <el-form-item prop="username">
            <el-input
              v-model="loginForm.username"
              placeholder="请输入用户名"
              clearable
              :prefix-icon="User"
            />
          </el-form-item>

          <!-- 密码 -->
          <el-form-item prop="password">
            <el-input
              v-model="loginForm.password"
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
              :loading="loading"
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
import { getTime } from '@/utils/time'
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { User, Lock } from '@element-plus/icons-vue'
import { useUserStore } from '@/store/modules/user'
import { useRouter,useRoute } from 'vue-router'
import { ElNotification } from 'element-plus'
const userStore = useUserStore()
const $router = useRouter()
let loading = ref(false)
let loginForm = ref({
  username: '',
  password: '',
})
//路由对象
let $route=useRoute();
let redirect:any=$route.query.redirect;
let loginFormRef = ref()
const login = async () => {
  //保证表单校验通过了才会继续往下走
  await loginFormRef.value?.validate()
  //开始加载
  loading.value = true
  if (!loginForm.value.username || !loginForm.value.password) {
    ElMessage.error('用户名或密码不能为空')
    return
  }
  //请求成功
  try {
    await userStore.userLogin({
      username: loginForm.value.username,
      password: loginForm.value.password,
    })
    ElNotification({
      type: 'success',
      title: '登录成功啦',
      message: `${getTime()}，欢迎回来！`,
    })
    loading.value = false
    $router.push({path:redirect||'/layout'})
  } catch (error) {
    //登录失败加载就结束了
    loading.value = false
    //登录失败的提示信息
    ElNotification({
      type: 'error',
      message: (error as Error).message,
    })
  }
  //请求失败
}
//定义一个表单校验需要的配置对象
// const rules = {
//   username: [
//     {
//       required: true,
//       min: 3,
//       max: 20,
//       message: '长度必须在 3 - 20 之间',
//       trigger: 'change',
//     },
//   ],
//   password: [
//     {
//       required: true,
//       min: 6,
//       max: 20,
//       message: '长度必须在 6 - 20 之间',
//       trigger: 'change',
//     },
//   ],
// }
const validatorUsername = (rule: any, value: any, callback: any) => {
  //rule为校验规则对象
  //value:为表单元素文本内容
  //callback
  //如果符合条件就会放行通过
  //不符合条件就会注入一个错误提示信息
  if (value.length >= 5) {
    callback() // 校验通过
  } else {
    callback(new Error('请输入5~10位数字,朝你吗'))
  }
}
const validatorPassword = (rule: any, value: any, callback: any) => {
  if (value.length >= 6) {
    callback() // 校验通过
  } else {
    callback(new Error('密码你给我输入好了啊,wokao，至少6位'))
  }
}
//用自定义规则来限制
const rules = {
  username: [
    {
      trigger: 'change',
      validator: validatorUsername,
    },
  ],
  password: [
    {
      trigger: 'change',
      validator: validatorPassword,
    },
  ],
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

  background: url('@/assets/images/1.jpg') no-repeat center center / cover;
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

  background: transparent;
  /* 改为透明 */
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
  background: transparent;
  /* 改为透明 */
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
