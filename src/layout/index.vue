<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="layout_container">
    <!-- 左侧菜单 -->
    <div class="layout_slider" :class="{ fold: layoutStore.fold }">
      <!-- logo 包裹容器，防止变形 -->
      <div class="logo-wrapper">
        <Logo />
      </div>

      <!-- 滚动菜单 -->
      <el-scrollbar class="scrollbar">
        <el-menu
          background-color="transparent"
          text-color="rgba(255,255,255,0.7)"
          active-text-color="#ffffff"
          router
          :default-active="$route.path"
          :collapse="layoutStore.fold"
        >
          <Menu :menuList="userStore.menuRouters" />
        </el-menu>
      </el-scrollbar>
    </div>

    <!-- 顶部导航 -->
    <div class="layout_tabbar" :class="{ fold: layoutStore.fold }">
      <Tabbar></Tabbar>
    </div>

    <!-- 内容区域 -->
    <div class="layout_main" :class="{ fold: layoutStore.fold }">
      <Main></Main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store/modules/user'
import Logo from './logo/index.vue'
import Menu from './menu/index.vue'
import { useRoute } from 'vue-router'
import Main from './main/index.vue'
import Tabbar from './tabbar/index.vue'

defineOptions({ name: 'Layout' })

import useLayoutSettingStore from '@/store/modules/setting'

const userStore = useUserStore()
const $route = useRoute()
const layoutStore = useLayoutSettingStore()
</script>

<style lang="scss" scoped>
@use 'sass:color';

// 折叠后的侧边栏宽度
$fold-menu-width: 64px;

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
    transition: width 0.3s ease;
    display: flex;
    flex-direction: column;
    z-index: 10;

    // Logo 容器：始终居中，防止变形
    .logo-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      transition: height 0.3s ease;
      height: $tabbar-height; // 展开时的高度（与顶栏一致）

      :deep(img) {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
      }
    }

    // 折叠状态
    &.fold {
      width: $fold-menu-width;

      .logo-wrapper {
        height: 50px; // 折叠后 Logo 区域高度适当减小
      }

      .scrollbar {
        :deep(.el-menu-item),
        :deep(.el-sub-menu__title) {
          justify-content: center;
          margin-left: 0;
          margin-right: 0;
        }

        :deep(.el-sub-menu__icon-arrow) {
          display: none;
        }

        :deep(.el-scrollbar__bar) {
          display: none !important;
        }

        :deep(.el-scrollbar__wrap) {
          overflow-x: hidden;
        }
      }
    }

    // 滚动区域
    .scrollbar {
      flex: 1;
      overflow: hidden;

      :deep(.el-scrollbar__bar) {
        opacity: 0;
        transition: opacity 0.3s;
      }
    }

    &:hover {
      .scrollbar {
        :deep(.el-scrollbar__bar) {
          opacity: 1;
        }
      }
    }
  }

  // ================= 菜单整体样式 =================
  .el-menu {
    border-right: none;

    --el-menu-bg-color: #{$menu-bg-color};
    --el-menu-hover-bg-color: rgba(255, 255, 255, 0.05);

    :deep(.el-sub-menu) {
      .el-menu {
        --el-menu-bg-color: #{color.adjust($menu-bg-color, $lightness: -4%)} !important;
      }

      .el-sub-menu__title:hover {
        background-color: rgba(255, 255, 255, 0.05) !important;
        color: #ffffff !important;
      }
    }

    // 统一左右内边距，保证图标对齐
    :deep(.el-menu-item),
    :deep(.el-sub-menu__title) {
      padding-left: 20px !important;
      padding-right: 20px !important;
    }

    :deep(.el-menu-item) {
      height: 46px;
      line-height: 46px;
      margin: 4px 12px;
      border-radius: 4px;
      transition: all 0.2s ease;

      &:hover {
        color: #ffffff !important;
      }

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
    width: calc(100% - #{$menu-width});
    height: $tabbar-height;
    background: #ffffff;
    border-bottom: 1px solid #f0f0f0;
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
    display: flex;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;
    transition:
      left 0.3s ease,
      width 0.3s ease;

    // 折叠时通过自身 fold 类同步位置
    &.fold {
      left: $fold-menu-width;
      width: calc(100% - #{$fold-menu-width});
    }
  }

  // ================= 主内容区 =================
  .layout_main {
    position: absolute;
    top: $tabbar-height;
    left: $menu-width;
    width: calc(100% - #{$menu-width});
    height: calc(100vh - #{$tabbar-height});
    padding: 20px;
    overflow: auto;
    background: #f5f7fa;
    box-sizing: border-box;
    transition:
      left 0.3s ease,
      width 0.3s ease;

    // 折叠时通过自身 fold 类同步位置
    &.fold {
      left: $fold-menu-width;
      width: calc(100% - #{$fold-menu-width});
    }
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

/* ================= 折叠后弹出的子菜单背景统一深色 ================= */
.el-menu--popup {
  // 使用与侧边栏相同的背景色（根据你的 $menu-bg-color 变量值调整）
  background-color: #{$menu-bg-color} !important; // 如果 $menu-bg-color 未定义，直接用色值如 #304156
  border: none !important;

  // 弹出菜单中的文字颜色
  .el-menu-item,
  .el-sub-menu__title {
    color: rgba(255, 255, 255, 0.7) !important;

    &:hover {
      background-color: rgba(255, 255, 255, 0.05) !important;
      color: #ffffff !important;
    }

    &.is-active {
      background-color: var(--el-color-primary) !important;
      color: #ffffff !important;
    }
  }

  // 弹出菜单中的子菜单背景也设为深色
  .el-menu {
    background-color: transparent;
  }
}
</style>
