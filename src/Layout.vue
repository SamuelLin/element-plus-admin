<script></script>

<template>
  <el-container style="height: 100vh">
    <el-header style="padding: 0">
      <BaseHeader />
    </el-header>
    <el-container>
      <el-aside width="200px" style="background-color: #545c64">
        <BaseSide />
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
