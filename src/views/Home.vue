<template>
    <div id="cont">
        <h1 id="titulo">Manicurista</h1>
        <div>
            <div id="banner">
                 <div id="textoCartaz">Segredos do mercado de design de unhas revelados</div>
                <img src="/ImagemCapa.png" alt="">
                <div id="black"></div>
                <Button texto='QUERO MEU ACESSO' />
            </div>
        </div>
    </div>
</template>
<style>
#banner {
    position: relative
}
#textoCartaz {
    position: absolute;
    font-size: 30px;
    font-weight: 600;
    width: 300px;
    text-align: left;
    top: 240px;
    left: 50%;
    margin-left: 20px;
    transform : translate(-50%);
}

#black img {
    margin-bottom: 100px;
}

#black {
    background-color: black;
    height: 100vh;
    width: 100vw;
}

#titulo {
    font-style: normal;
    font-weight: 900;
    font-size: 48px;
    line-height: 56px;
    color: linear-gradient(90deg, #F53FE3 1.55%, #DB2F62 70.46%);
}
</style>
<script>
import Button from '.././components/button.vue'

export default {
    name: "Home",
    components: { Button }
}
</script>
