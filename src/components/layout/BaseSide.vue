<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const isCollapse = ref(false)
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}
</script>

<template>
  <el-scrollbar height="calc(100vh - 60px)">
    <el-menu
      :default-active="route.path"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      active-text-color="#ffd04b"
      background-color="#545c64"
      text-color="#fff"
      style="border-right: none"
      router
      @open="handleOpen"
      @close="handleClose"
    >
      <el-menu-item index="/home">
        <el-icon>
          <House />
        </el-icon>
        <template #title>Home</template>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon>
          <Setting />
        </el-icon>
        <template #title>Navigator Four</template>
      </el-menu-item>
    </el-menu>
  </el-scrollbar>
</template>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
