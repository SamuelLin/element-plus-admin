<script setup>
const env = import.meta.env.VITE_ENV
</script>

<template>
  <el-config-provider>
    <el-container>
      <el-header>
        <BaseHeader />
      </el-header>
      <el-container>
        <el-aside width="200px">
          <BaseSide />
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </el-config-provider>
</template>
