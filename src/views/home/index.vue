<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <h1>我是home,username:{{ userStore.username }}</h1>
  </div>
</template>

<script setup lang="ts">
//引入组合式api函数：生命周期函数
import {onMounted} from 'vue'
//获取仓库
import { useUserStore } from '@/store/modules/user';

let userStore =useUserStore();
onMounted(()=>{
  userStore.userInfo();
})
</script>

<style></style>
