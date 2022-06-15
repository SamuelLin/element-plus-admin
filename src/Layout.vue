<script setup></script>

<template>
  <el-container style="height: 100%">
    <BaseSide />
    <el-container>
      <el-header style="padding: 0">
        <BaseHeader />
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
