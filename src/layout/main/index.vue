<template>
  <router-view v-slot="{ Component }">
    <transition name="fancy-flash" mode="out-in">
      <component :is="Component" v-if="flag" />
    </transition>
  </router-view>
</template>

<script setup lang="ts">
import { watch, ref,nextTick } from 'vue'
defineOptions({ name: 'Main' })
import useLyaOutsettingStore from '@/store/modules/setting';
//监听仓库内部的数据是否发生变化,说明用户点击过刷新的按钮
let layOutSettingStore = useLyaOutsettingStore();
let flag = ref(true);
watch(layOutSettingStore, () => {
  //  点击后这个flage变化，进行刷新
  flag.value =false;
  nextTick(()=>{
    flag.value=true;
  })
})


</script>

<style scoped>
/* ================= 核心：花里胡哨的 3D 缩放流光动画 ================= */

/* 1. 离开动画：旧组件向后退去、旋转并快速蒸发 */
.fancy-flash-leave-to {
  opacity: 0;
  transform: scale(0.8) rotateX(30deg) translateY(-30px);
  filter: blur(10px) brightness(2);
  /* 造成一种瞬间蒸发闪烁的效果 */
}

/* 2. 离开过程的过渡速度（离场要快，不然用户觉得卡顿） */
.fancy-flash-leave-active {
  transition: all 0.35s cubic-bezier(0.6, -0.28, 0.735, 0.045);
}

/* 3. 进入动画的初始状态：新组件从地平线深处带着极度拉伸冲过来 */
.fancy-flash-enter-from {
  opacity: 0;
  transform: scale(1.2) rotateX(-20deg) translateY(40px);
  filter: blur(20px) contrast(3);
  /* 超强光晕效果 */
}

/* 4. 进入完成的状态：恢复正常 */
.fancy-flash-enter-to {
  opacity: 1;
  transform: scale(1) rotateX(0deg) translateY(0);
  filter: blur(0) contrast(1);
}

/* 5. 进入过程的过渡速度：使用超弹性的贝塞尔曲线，形成炫酷的“果冻吸附”感 */
.fancy-flash-enter-active {
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

/* ================= 辅助：给大容器加个视距，让 3D 效果更立体 ================= */
:deep(.layout_main) {
  perspective: 1000px;
  /* 赋予内容区 3D 空间感 */
}
</style>
