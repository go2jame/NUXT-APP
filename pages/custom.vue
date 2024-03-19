<template>
    <div>
        <div class="top">
            1111
        </div>
        <NuxtLayout name="custom">
            <div class="inlayout">
                FROM CUSOM
                <br>THIS IS IN TAG NuxtLayout
            </div>

        </NuxtLayout>
        <div class="top">
            1111
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: false
})
</script>

<style scoped>
.top {
    display: block;
    background-color: red;
    height: 30px;

}
.inlayout {
    color: red;
}
</style>