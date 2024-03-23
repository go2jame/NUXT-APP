<script setup >
import { useWebsiteStore } from '~/store/user';

const website = useWebsiteStore()

if (website.isLogin) {
  await callOnce(website.login)
}else{
  website.name = 'xx'
}
const color = useColor() // Same as useState('color')


</script>

<template>
  <main>
    <button v-on:click="website.login">login</button>
    <p>Current color: {{ color }}</p>
    <h1>{{ website.name }}</h1>
    <p>{{ website.description }}</p>
  </main>
</template>
