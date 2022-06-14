<script setup>
const env = import.meta.env.VITE_ENV
</script>

<template>
  <el-config-provider>
    <router-view></router-view>
  </el-config-provider>
</template>
