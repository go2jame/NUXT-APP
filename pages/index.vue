<template>
    <div class="container">
        <h1>หน้าแรก</h1>
        <UDivider :avatar="{ src: 'https://avatars.githubusercontent.com/u/739984?v=4' }" /> x
        <img src="/image/shopping.svg" alt="shopping">
    </div>
</template>

<script setup>
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