<template>
  <template v-for="(item, index) in menuList" :key="item.path">
    <!-- 没有子孩子 -->
    <template v-if="!item.children">
      <el-menu-item :index="item.path" v-if="!item.meta.hidden">
        <el-icon>
          <component :is="item.meta.icon"></component>
        </el-icon>
        <template #title>
          <span>{{ item.meta.title }}</span>
        </template>
      </el-menu-item>
    </template>

    <!-- 有一个子孩子 -->
    <template v-if="item.children && item.children.length === 1">
      <el-menu-item :index="item.children[0].path" v-if="!item.children[0].meta.hidden">
        <template #title>
          <el-icon>
            <component :is="item.meta.icon"></component>
          </el-icon>
          <span>{{ item.children[0].meta?.title }}</span>
        </template>
      </el-menu-item>
    </template>

    <!-- 有两个及以上的子孩子 -->
    <el-sub-menu v-if="item.children && item.children.length > 1" :index="item.path">
      <template #title>
        <el-icon>
          <component :is="item.meta.icon"></component>
        </el-icon>
        <span>{{ item.meta?.title }}</span>
      </template>
      <Menu :menuList="item.children" />
    </el-sub-menu>
  </template>
</template>

<script setup lang="ts">
// 接收父组件传递的动态路由列表
defineProps(['menuList'])
</script>

<script lang="ts">
export default {
  // 【核心修复】组件的 name 改为大写 'Menu'，与上面的组件递归标签保持一致
  name: 'Menu',
}
</script>

<style scoped>
/* 这里可以写你的菜单专属样式 */
</style>
