<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

console.log(route.meta)
</script>

<template>
  <h1>Home</h1>
</template>
