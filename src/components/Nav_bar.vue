<template>
    <div class="menu">
        <router-link to="/">Home</router-link> |
        <router-link to="/sobre">Sobre</router-link>
    </div>
</template>

<script>
export default {
    name: "Nav_bar"    
}
</script>

<style>
.menu{
    background-color: #000000;
    height: 30px;
    width: 100%;
    margin-top:0%;
    margin:0;
    padding:0;
}
</style>