<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="layout_container">
        <!-- 左边的菜单栏 -->
        <div class="layout_slider">123</div>
        <!-- 顶部菜单栏 -->
        <div class="layout_tabbar">466</div>
        <!-- 内容展示区 -->
        <div class="layout_main">789</div>
    </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>

.layout_container {
    width: 100%;
    height: 3000px;
    .layout_slider{
        top: 0;
        left: 0;
        position: absolute;
        width: $menu-width;
        height: 100vh;
        background: $menu-bg-color;   
    }
    .layout_tabbar{
        position: absolute;
        width: calc(100% - $menu-width);
        height: $tabbar-height;
        background: #6db3dc;
        top: 0;
        left: $menu-width;
    }
    .layout_main{
        position: absolute;
        width: calc(100% - $menu-width);
        height: calc(100vh - $tabbar-height);
        background: #266415;
        top: $tabbar-height;
        left: $menu-width;
        padding: 20px;
        overflow: auto;
    }

}
</style>