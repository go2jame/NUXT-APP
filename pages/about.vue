<template>
    <div class="container">
        <h1>เกี่ยวกับเรา</h1>
        <img src="/image/about.svg" alt="shopping">
        {{ counter }}
    </div>
</template>

<script setup>
const counter = useState('counter')

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