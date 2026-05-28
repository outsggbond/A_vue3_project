<template>
  <div class="breadcrumb-container">
    <el-icon @click="changeIcon">
      <component :is="layoutStore.fold ? Fold : Expand" />
    </el-icon>
    <el-breadcrumb :separator-icon="ArrowRight">
      <el-breadcrumb-item>权限管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
defineOptions({ name: 'Breadcrumb' })
import { ArrowRight, Fold, Expand } from '@element-plus/icons-vue'
import useLayoutSettingStore from '@/store/modules/setting'

const layoutStore = useLayoutSettingStore()

const changeIcon = () => {
  layoutStore.fold = !layoutStore.fold
}
</script>

<style scoped lang="scss">
/* 样式保持不变 */
.breadcrumb-container {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: nowrap;
  white-space: nowrap;
  overflow-x: auto;

  :deep(.el-breadcrumb) {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    flex: 1;
    min-width: 0;
  }

  :deep(.el-breadcrumb__item) {
    white-space: nowrap;
  }
}
</style>