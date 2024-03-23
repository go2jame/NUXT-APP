import { defineStore } from 'pinia';

export const useWebsiteStore = defineStore('websiteStore', {
  state: () => ({
    // state ของ user เช่น id, name, email, token
    id: null,
    name: null,
    email: null,
    token: null,
    description: null,
    isLogin: false
  }),
  actions: {

    // actions สำหรับ login, logout, เช็ค authen
    async login() {
      // เรียก API login
      // เก็บข้อมูล user ลงใน state
      // this.id = data.id;
      // this.name = data.name;
      // this.email = data.email;
      // this.token = data.token;

      const infos = await $fetch('https://api.nuxt.com/modules/pinia')

      this.name = infos.name 
      this.description = infos.description
      this.token = '1234'
      this.isLogin = true
   
    },
    logout() {
      // เรียก API logout
      // ล้างข้อมูล user ออกจาก state
      this.id = null;
      this.name = null;
      this.email = null;
      this.token = null;
    },
    isAuthenticated() {
      // ตรวจสอบว่ามี token หรือไม่
      console.log('TOKEN: ' + this.token !== null);
      return this.token !== null;
    },
  },

 
})
