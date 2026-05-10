<template>
  <div>
    <el-button type="primary" size="default" :icon="Plus"> 搜索</el-button>
    <el-button type="success" size="default" :icon="Edit"> 编辑</el-button>
    <el-button type="danger" size="default" :icon="Delete"> 删除</el-button>
  </div>
  <div>
   <svg-icon name="kiss" width="200" height="200" ></svg-icon>
  </div>
</template>

<script setup lang="ts">
import { Plus, Edit, Delete } from '@element-plus/icons-vue'
import SvgIcon from './components/SvgIcon/index.vue'
</script>
console.log(8888888)
<style>

</style>
