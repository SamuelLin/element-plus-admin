<script setup>
import { useRoute } from 'vue-router'
import { useAppStore } from '@/stores/app'

const route = useRoute()
const appStore = useAppStore()

const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}
</script>

<template>
  <el-scrollbar height="100vh" style="background-color: #545c64">
    <el-menu
      class="el-menu-vertical-demo"
      active-text-color="#ffd04b"
      background-color="#545c64"
      text-color="#fff"
      style="border-right: none"
      router
      :default-active="route.path"
      :collapse="appStore.sidebar.opened"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-menu-item index="/home">
        <el-icon>
          <House />
        </el-icon>
        <template #title>Home</template>
      </el-menu-item>
      <el-sub-menu index="permission">
        <template #title>
          <el-icon><location /></el-icon>
          <span>Permission</span>
        </template>
        <el-menu-item index="/permission/page">Page Permission</el-menu-item>
        <el-menu-item index="/permission/directive">Page Directive</el-menu-item>
        <el-menu-item index="/permission/role">Page Role</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </el-scrollbar>
</template>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
