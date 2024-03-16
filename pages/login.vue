<template>
    <div class="login-page">
      <form @submit.prevent="onSubmit">
        <input type="email" v-model="email" placeholder="Email" />
        <input type="password" v-model="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: ''
      };
    },
  
    methods: {
      onSubmit() {
        this.$auth.login('local', {
          email: this.email,
          password: this.password
        });
      }
    }
  };
  </script>
  