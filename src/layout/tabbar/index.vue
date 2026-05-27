<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="tabbar">
        <div class="tabbar_left">
          <breadcrumb></breadcrumb>
        </div>
        <div class="tabbar_right">
           <setting></setting>
        </div>
    </div>
</template>

<script setup lang="ts">
import breadcrumb from '@/layout/tabbar/breadcrumb/index.vue'
import setting from '@/layout/tabbar/setting/index.vue';

</script>

<style lang="scss" scoped>
.tabbar {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;

    .tabbar_left {
        display: flex;
        align-items: center;
        margin-left: 20px;
    }

    .tabbar_right {
        display: flex;
        align-items: center;
        /* 给按钮之间加一点间距，更美观 */
    }
}
</style>
