<template>
  <div>
    <el-button type="primary" size="default" :icon="Plus"> 搜索</el-button>
    <el-button type="success" size="default" :icon="Edit"> 编辑</el-button>
    <el-button type="danger" size="default" :icon="Delete"> 删除</el-button>
    <hello-world></hello-world>
  </div>
</template>

<script setup lang="ts">
import { Plus, Edit, Delete } from '@element-plus/icons-vue'
import helloWorld from './components/helloWorld.vue';

</script>

<style>

</style>
