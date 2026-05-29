<template>
  <div class="breadcrumb-container">
    <el-icon @click="changeIcon">
      <component :is="layoutStore.fold ? Fold : Expand" />
    </el-icon>
    <el-breadcrumb :separator-icon="ArrowRight">

      <!-- 面包屑展示路由的标题 -->
      <el-breadcrumb-item v-for="(item, index) in $route.matched" :key="index" v-show="item.meta.title" :to="item.path">
        <!-- 图标 -->
        <el-icon>
          <component :is="item.meta.icon"></component>
        </el-icon>
        <span>{{ item.meta.title }}</span>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
defineOptions({ name: 'Breadcrumb' })
import { ArrowRight, Fold, Expand } from '@element-plus/icons-vue'
import useLayoutSettingStore from '@/store/modules/setting'
import { useRoute } from 'vue-router'
const layoutStore = useLayoutSettingStore()
let $route = useRoute();
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
