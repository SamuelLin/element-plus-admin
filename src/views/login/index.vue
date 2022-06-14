<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { User, Lock } from '@element-plus/icons-vue'

const router = useRouter()
const size = ref('default')
const labelPosition = ref('right')

const sizeForm = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: ''
})

function handleClick() {
  router.push('/home')
}
</script>

<template>
  <div class="login-container">
    <el-form
      ref="form"
      :model="sizeForm"
      label-width="auto"
      class="login-form"
      autocomplete="on"
      :label-position="labelPosition"
      :size="size"
    >
      <div class="title-container">
        <h3 class="title">Login Form</h3>
      </div>
      <el-form-item>
        <el-input
          v-model="input1"
          class="w-50 m-2"
          size="large"
          placeholder="Username"
          :prefix-icon="User"
        />
      </el-form-item>
      <el-form-item>
        <el-input
          v-model="input1"
          class="w-50 m-2"
          size="large"
          placeholder="Password"
          :prefix-icon="Lock"
        />
      </el-form-item>
      <el-button
        :loading="loading"
        type="primary"
        style="width: 100%; margin-bottom: 30px"
        @click="handleClick"
      >
        Login
      </el-button>
    </el-form>
  </div>
</template>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }

  .thirdparty-button {
    position: absolute;
    right: 0;
    bottom: 6px;
  }

  @media only screen and (max-width: 470px) {
    .thirdparty-button {
      display: none;
    }
  }
}
</style>
