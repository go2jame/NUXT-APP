<template>
    <div>
        <header>
            <nav>
                <h1 class="logo">Menus</h1>
                <nuxt-link to="/">หน้าแรก</nuxt-link>
                <nuxt-link to="/about">เกี่ยวกับเรา</nuxt-link>
                <nuxt-link to="/products">สินค้าทั้งหมด</nuxt-link>
            </nav>
        </header>
    </div>
    <div>
        <slot />
    </div>
</template>

<script setup>

</script>

<style scoped>
* {
    font-family: "kanit", sans-serif;
    font-weight: 400;
}

nav {
    margin: 10px auto;
    padding: 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #333;
}

nav a {
    color: white;
    text-decoration: none;
    margin-left: 12px;
    font-size: 18px;
    padding: 10px;
}

nav a:hover {
    color: orange;
}

.logo {
    margin-right: auto;
    padding-left: 10px;
    color: white;
}
</style>