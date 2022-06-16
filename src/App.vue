<script setup>
// TODO: i18n
import en from 'element-plus/es/locale/lang/en'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import zhTw from 'element-plus/lib/locale/lang/zh-tw'

const locale = zhTw
</script>

<template>
  <el-config-provider :locale="locale">
    <router-view></router-view>
  </el-config-provider>
</template>
