<template>
  <div class="setting-container">
    <el-button size="small" :icon="Refresh" circle @click="Reflesh"></el-button>
    <el-button size="small" :icon="FullScreen" circle @click="fullscreen"></el-button>
    <el-button size="small" :icon="Setting" circle></el-button>
    <img src="/logo.png" style="width: 24px; height: 24px" />
    <el-dropdown>
      <span class="el-dropdown-link">
        Dropdown List
        <el-icon class="el-icon--right">
          <ArrowDown />
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts">
defineOptions({ name: 'Setting' })
import { Refresh, FullScreen, Setting } from '@element-plus/icons-vue'
import { ArrowDown } from '@element-plus/icons-vue'
import useLyaOutsettingStore from '@/store/modules/setting';
let layoutSettingStore = useLyaOutsettingStore();
//刷新按钮点击的回调
const Reflesh = () => {
  layoutSettingStore.reflesh = !layoutSettingStore.reflesh;
}

const fullscreen=()=>{
  let screen=document.fullscreenElement;
  if(!screen){
    document.documentElement.requestFullscreen();
  }else{
    document.exitFullscreen();
  }
}
</script>

<style scoped lang="scss">
.setting-container {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: nowrap;
  white-space: nowrap;

  .el-dropdown-link {
    border-bottom: none !important;
    text-decoration: none !important;
    outline: none;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 4px;
  }
}
</style>
