<template>
    <div>
        <Head>
            <Title>{{ product.title }}</Title>
            <Meta name="description" :content=product.description />
        </Head>
        <div class="container">
            <img :src=product.thumbnail>
            <div class="detail">
                <h1>ชื่อ : {{ product.title }}</h1>
                <h2>ราคา : ${{ product.price }}</h2>
                <h2>หมวดหมู่ : ${{ product.category }}</h2>
                <h3>ยืี่ห้อ : ${{ product.brand }}</h3>
                <h4>{{ product.description }}</h4>
            </div>
        </div>

    </div>
</template>

<script setup>

const { id } = useRoute().params
const { data: product } = await useFetch('https://dummyjson.com/products/'+id)

definePageMeta({
    colorMode: 'dark',
    // middleware: "my-middleware"

})
</script>

<style scoped>
.container{
    display: flex;
    justify-content: center;

}
.detail{
    padding-left: 10px;
}
</style>