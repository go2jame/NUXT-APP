<template>
    <div class="container">
        <!-- <h1>หน้าสินค้าทั้งหมด</h1> -->
        <div v-for="product in data.products">

            <NuxtLink :to="`/products/${product.id}`">
                <h2 class="title">{{ product.title }}</h2>
            </NuxtLink>
            <img :src=product.thumbnail>
        </div>
    </div>
</template>

<script setup>
useHead({
    title: "หน้ารายการสินค้าทั้งหมด",
    meta: [{
        name: "description", content: "หน้ารายการสินค้าทั้งหมด ทดสอบดึงข้อมูลมาจาก https://dummyjson.com/products?limit=10"
    }]
})
const { data: data } = await useFetch('https://dummyjson.com/products?limit=10')
console.log(data)
</script>

<style scoped>
.container{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.container div{
    width: 300px;
    height: 300px;
    margin: 30px auto;
    background-color: #333;
}
.title{
    color:white;
    font-size:1.2em;
    text-align: center;
}
.container div:hover{
    background: #ff5703ec;
}
img{
    width: 300px;
    height: 300px;
}
a{
    text-decoration: none;
}
</style>