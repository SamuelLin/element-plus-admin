import { defineStore } from 'pinia'
import { getInfo } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { usePermissionStore } from '@/stores/permission'

export const useUserStore = defineStore('user', {
  state: () => ({
    token: getToken(),
    name: '',
    roles: []
  }),
  actions: {
    // user login
    async login() {},

    // user logout,
    logout() {
      const permissionStore = usePermissionStore()
      this.token = ''
      this.roles = []
      removeToken()
      permissionStore.resetRouter()

      // TODO: 頁籤實作
      // reset visited views and cached views
      // to fixed https://github.com/PanJiaChen/vue-element-admin/issues/2485
      // dispatch('tagsView/delAllViews', null, { root: true })
    },

    getInfo() {
      return new Promise((resolve, reject) => {
        getInfo()
          .then((response) => {
            const { data } = response

            // if (!data) {
            //   reject('Verification failed, please Login again.')
            // }

            // const { roles, name, avatar, introduction } = data

            // // roles must be a non-empty array
            // if (!roles || roles.length <= 0) {
            //   reject('getInfo: roles must be a non-null array!')
            // }

            // commit('SET_ROLES', roles)
            // commit('SET_NAME', name)
            // commit('SET_AVATAR', avatar)
            // commit('SET_INTRODUCTION', introduction)
            resolve(data)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },

    // remove token
    resetToken({ commit }) {
      return new Promise((resolve) => {
        this.token = ''
        this.roles = []
        removeToken()
        resolve()
      })
    }
  }
})
