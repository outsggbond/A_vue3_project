<!-- eslint-disable vue/multi-word-component-names -->

<template>
  <div class="logo" v-if="setting.logoHidden">
    <img class="image" :src="setting.logo" alt="logo">
    <p>{{ setting.title }}</p>
  </div>
</template>

<script setup lang="ts">
// 引入设置的标题和这个logo
import setting from '@/setting';
</script>

<style scoped lang="scss">
.logo {
  width: 100%;
  height: $base-menu-logo-height;
  display: flex;
  align-items: center;    /* 让图片和文字在垂直方向上完美居中 */
  padding: 0 20px;        /* 左右内边距，让内容自带呼吸感 */
  box-sizing: border-box;

  .image {
    width: 40px;
    height: 40px;
    border-radius: 50%;   /* ✨ 核心：确保图片呈现完美的圆形 */
    object-fit: cover;    /* 防止非正方形图片拉伸变形 */
    flex-shrink: 0;       /* 防止在 Flex 布局下被挤压变形 */
  }

  p {
    font-size: $base-logo-title-fontSize;
    color: #ffffff;       /* 深色侧边栏下，Logo 文字建议使用纯白或浅色 */
    margin-left: 12px;    /* 文字与圆形 Logo 的间距 */
    
    /* 防溢出处理：系统标题过长时自动显示省略号 */
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>