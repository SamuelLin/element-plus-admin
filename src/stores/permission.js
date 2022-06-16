import { defineStore } from 'pinia'

// https://router.vuejs.org/guide/advanced/dynamic-routing.html#adding-routes-inside-navigation-guards

export const usePermissionStore = defineStore('permission', {
  state: () => ({
    routes: [],
    resetRouter: () => {}
  }),
  actions: {}
})
