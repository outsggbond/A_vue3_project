<template>
    <div class="layout_container">
        <div class="layout_slider">
            <logo></logo>
            <el-scrollbar class="scrollbar">
                <el-menu text-color="rgba(255, 255, 255, 0.7)" active-text-color="#ffffff">
                    <el-menu-item index="1">首页</el-menu-item>
                    <el-menu-item index="2">数据大屏</el-menu-item>

                    <el-sub-menu index="3">
                        <template #title>
                            <span>权限管理</span>
                        </template>
                        <el-menu-item index="3-1">用户管理</el-menu-item>
                        <el-menu-item index="3-2">角色管理</el-menu-item>
                        <el-menu-item index="3-3">菜单管理</el-menu-item>
                    </el-sub-menu>
                </el-menu>
            </el-scrollbar>
        </div>

        <div class="layout_tabbar">
            466
        </div>

        <div class="layout_main">
            789
        </div>
    </div>
</template>

<script setup lang="ts">
import logo from './logo/index.vue'
</script>

<style lang="scss" scoped>
.layout_container {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: relative;

    .layout_slider {
        top: 0;
        left: 0;
        position: absolute;
        width: $menu-width;
        height: 100vh;
        background: $menu-bg-color;
        transition: all 0.3s;
        display: flex;
        flex-direction: column;

        .scrollbar {
            width: 100%;
            height: calc(100vh - #{$base-menu-logo-height});

            :deep(.el-scrollbar__bar) {
                opacity: 0;
                transition: opacity 0.3s ease;
            }
        }

        &:hover {
            .scrollbar :deep(.el-scrollbar__bar) {
                opacity: 1;
            }
        }
    }

    /* ==================== ✨ 菜单色彩定制核心 ==================== */
    .el-menu {
        border-right: none;
        /* 移除右侧刺眼的白边线 */

        // 穿透覆盖 Element Plus 官方 CSS 变量
        --el-menu-bg-color: #{$menu-bg-color};
        --el-menu-hover-bg-color: rgba(255, 255, 255, 0.05);
        /* 鼠标悬浮在普通菜单项上的微白透明底色 */

        // 专门针对折叠子菜单背景做穿透定制
        :deep(.el-sub-menu) {
            .el-menu {
                // 当展开子菜单时，让内部包裹的子项背景比主菜单略微深一点点，突出层级深度
                --el-menu-bg-color: #{darken($menu-bg-color, 4%)} !important;
            }

            // 修复折叠菜单标题悬浮时的背景色
            .el-sub-menu__title:hover {
                background-color: rgba(255, 255, 255, 0.05) !important;
                color: #ffffff !important;
            }
        }
    }

    // 后台现代风：小卡片圆角菜单样式
    :deep(.el-menu-item) {
        height: 46px;
        line-height: 46px;
        margin: 4px 12px;
        padding: 0 16px !important;
        border-radius: 4px;
        transition: all 0.2s ease;

        &:hover {
            color: #ffffff !important;
        }

        // 菜单项被点击激活后的样式
        &.is-active {
            background-color: var(--el-color-primary) !important;
            /* 使用系统默认蓝，也可以直接写固定色号如 #1677ff */
            color: #ffffff !important;
            font-weight: bold;
        }
    }

    /* ============================================================ */

    .layout_tabbar {
        position: absolute;
        width: calc(100% - $menu-width);
        height: $tabbar-height;
        top: 0;
        left: $menu-width;
        background: #ffffff;
        border-bottom: 1px solid #f0f0f0;
        box-shadow: 0 1px 4px rgba(0, 21, 41, .08);
    }

    .layout_main {
        position: absolute;
        width: calc(100% - $menu-width);
        height: calc(100vh - $tabbar-height);
        top: $tabbar-height;
        left: $menu-width;
        padding: 20px;
        overflow: auto;
        background: #f5f7fa;
    }
}
</style>

<style lang="scss">
/* 定制滑块本身的颜色和粗细（如果是深色侧边栏） */
.layout_slider {
    .el-scrollbar__thumb {
        background-color: rgba(255, 255, 255, 0.15) !important;
        width: 5px !important;

        &:hover {
            background-color: rgba(255, 255, 255, 0.3) !important;
        }
    }
}
</style>