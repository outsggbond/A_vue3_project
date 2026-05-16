<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class ="login_container">
    <el-row>
      <el-col :span="12" :xs="0">站的位置</el-col>
      <el-col :span="12" :xs="24">第二个位置</el-col>
        <el-forw>
          <h1>hello</h1>
          <h1>欢迎来到我的世界</h1>
          <el-form>
            <el-form-item>
              <el-input type="login"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input type="password"></el-input>
            </el-form-item>
          </el-form>
        </el-forw>
    </el-row>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.login_container{
  width:100%;
  height:100vh;
  background:url('@/assets/images/1.jpg') no-repeat center / cover;
}

</style>
