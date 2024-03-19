<script lang="ts" setup></script>

<template>
  <div>
    Component: TheHeader
    <div class="box">
      <slot/>
    </div>
  </div>
</template>

<style scoped>
.box{
  border:1px solid red;
  background-color: beige;
  color:red;
  text-align: center;
}
</style>
