<template>
  <div class="breadcrumb-container">
    <el-icon><Expand /></el-icon>
    <el-breadcrumb :separator-icon="ArrowRight">
      <el-breadcrumb-item>promotion list</el-breadcrumb-item>
      <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import { ArrowRight } from '@element-plus/icons-vue';
</script>

<style scoped lang="scss">
.breadcrumb-container {
  display: flex;
  align-items: center;
  gap: 8px;               // 图标和面包屑之间的间距
  flex-wrap: nowrap;      // 强制不换行
  white-space: nowrap;    // 内部文字不换行
  overflow-x: auto;       // 如果内容超出，允许横向滚动（或添加省略号）

  // 可选：面包屑内部文字超出时显示省略号
  :deep(.el-breadcrumb) {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    flex: 1;
    min-width: 0;
  }

  // 可选：每个面包屑项也可以限制换行
  :deep(.el-breadcrumb__item) {
    white-space: nowrap;
  }
}
</style>