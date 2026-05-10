<!-- eslint-disable vue/multi-word-component-names -->

<template>
    <svg :width="width" :height="height" :fill="color">
        <use :href="prefix + name"></use>
    </svg>
</template>

<script setup lang="ts">
 defineProps({
//xlink:href属性的前缀，默认为#icon-
       prefix: {
        type: String,
        default: '#icon-'
       },
       width: {
        type: String,
        default: '10px'
       },
       height: {
        type: String,
        default: '10px'
       },
       name: {
        type: String,
        required: true
       },
       color: {
        type: String,
        default: 'currentColor'
       }
    })
</script>
   
<style>

</style>
