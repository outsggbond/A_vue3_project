<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="layout_container">
    <!-- 左侧菜单 -->
    <div class="layout_slider">
      <!-- logo -->
      <Logo />

      <!-- 滚动菜单 -->
      <el-scrollbar class="scrollbar">
        <el-menu
          background-color="transparent"
          text-color="rgba(255,255,255,0.7)"
          active-text-color="#ffffff"
        >
          <!-- 动态菜单 -->
          <Menu :menuList="userStore.menuRouters" />
        </el-menu>
      </el-scrollbar>
    </div>

    <!-- 顶部导航 -->
    <div class="layout_tabbar">
      顶部导航区域
    </div>

    <!-- 内容区域 -->
    <div class="layout_main">
      内容展示区域
    </div>
  </div>
</template>

<script setup lang="ts">
// logo组件
import { useUserStore } from '@/store/modules/user';
import Logo from './logo/index.vue'

// menu组件
import Menu from './menu/index.vue'
const userStore = useUserStore();
</script>

<style lang="scss" scoped>
@use "sass:color";

.layout_container {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;

  // ================= 左侧菜单 =================
  .layout_slider {
    position: absolute;
    top: 0;
    left: 0;

    width: $menu-width;
    height: 100vh;

    background: $menu-bg-color;

    transition: all 0.3s;

    display: flex;
    flex-direction: column;

    // 滚动区域
    .scrollbar {
      flex: 1;

      // 默认隐藏滚动条
      :deep(.el-scrollbar__bar) {
        opacity: 0;
        transition: opacity 0.3s;
      }
    }

    // 鼠标移入显示滚动条
    &:hover {
      .scrollbar {
        :deep(.el-scrollbar__bar) {
          opacity: 1;
        }
      }
    }
  }

  // ================= 菜单整体 =================
  .el-menu {
    border-right: none;

    // Element Plus CSS变量覆盖
    --el-menu-bg-color: #{$menu-bg-color};

    // 普通菜单hover颜色
    --el-menu-hover-bg-color: rgba(255, 255, 255, 0.05);

    // ================= 子菜单 =================
    :deep(.el-sub-menu) {
      // 子菜单背景色
      .el-menu {
        --el-menu-bg-color: #{color.adjust(
            $menu-bg-color,
            $lightness: -4%
          )} !important;
      }

      // 子菜单标题hover
      .el-sub-menu__title:hover {
        background-color: rgba(255, 255, 255, 0.05) !important;
        color: #ffffff !important;
      }
    }

    // ================= 菜单项 =================
    :deep(.el-menu-item) {
      height: 46px;
      line-height: 46px;

      margin: 4px 12px;

      padding: 0 16px !important;

      border-radius: 4px;

      transition: all 0.2s ease;

      // hover效果
      &:hover {
        color: #ffffff !important;
      }

      // 激活菜单
      &.is-active {
        background-color: var(--el-color-primary) !important;

        color: #ffffff !important;

        font-weight: bold;
      }
    }
  }

  // ================= 顶部导航 =================
  .layout_tabbar {
    position: absolute;

    top: 0;
    left: $menu-width;

    width: calc(100% - $menu-width);

    height: $tabbar-height;

    background: #ffffff;

    border-bottom: 1px solid #f0f0f0;

    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

    display: flex;
    align-items: center;

    padding: 0 20px;

    box-sizing: border-box;
  }

  // ================= 主内容区 =================
  .layout_main {
    position: absolute;

    top: $tabbar-height;
    left: $menu-width;

    width: calc(100% - $menu-width);

    height: calc(100vh - $tabbar-height);

    padding: 20px;

    overflow: auto;

    background: #f5f7fa;

    box-sizing: border-box;
  }
}
</style>

<style lang="scss">
/* ================= 滚动条美化 ================= */

.layout_slider {
  .el-scrollbar__thumb {
    background-color: rgba(255, 255, 255, 0.15) !important;

    width: 5px !important;

    border-radius: 10px;

    transition: all 0.3s;

    &:hover {
      background-color: rgba(255, 255, 255, 0.3) !important;
    }
  }
}
</style>