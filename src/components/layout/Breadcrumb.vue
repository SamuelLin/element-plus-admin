<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const breadcrumbs = computed(() => route.path.split('/').filter((p) => p))
</script>

<template>
  <el-breadcrumb class="app-breadcrumb" separator="/">
    <el-breadcrumb-item
      v-for="path in breadcrumbs"
      :key="path"
      :to="{ path: `/${breadcrumbs[0]}` }"
    >
      {{ path }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<style lang="scss" scoped>
.app-breadcrumb.el-breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;

  .no-redirect {
    color: #97a8be;
    cursor: text;
  }
}
</style>
