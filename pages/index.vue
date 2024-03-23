<template>
    <div class="container">
        <h1>หน้าแรก</h1>
        <img src="/image/shopping.svg" alt="shopping">
        <TheHeader>
            ทดสอบ component
        </TheHeader>
        <UDivider :avatar="{ src: 'https://avatars.githubusercontent.com/u/739984?v=4' }" /> x
        Counter: {{ counter }}
        <button @click="counter++">
            +
        </button>
        <button @click="counter--">
            -
        </button>
    </div>
</template>

<script setup>
import TheHeader from '~/components/TheHeader.vue';
const appConfig = useAppConfig()
console.log(appConfig.theme.dark)



const counter = useState('counter', () => Math.round(Math.random() * 1000))

useHead({
    title: "หน้าแรก",
    meta: [
        {
            name: "description", content: "รายละเอียด"
        }
    ]
})
definePageMeta({
    colorMode: 'dark',
    middleware: "my-middleware"
})
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}

img {
    width: 400px;
    height: 400px;
}
</style>