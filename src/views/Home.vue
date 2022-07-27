<template>
    <div id="cont">
        <div>
            <div id="banner">
                <div id="textoCartaz">Segredos do mercado de design de unhas revelados</div>
                <img id="imagemCapa" src="/ImagemCapa.png" alt="">
                <div id="black"></div>
                <div id="btn-1"><Button texto='QUERO MEU ACESSO' /></div>
                <div class="container2">
                    <div style="display: flex;">
                        <div id="detalhes">
                            <div>QUEM SOU EU?</div>
                        </div>
                        <img id="profile" src="/imagemProfile.png" alt="">
                    </div>
                </div>
                <div>
                        <h3>CONHEÇA O NOSSO CURSO</h3>
                    </div>

                    <img src="/video.png" alt="">
            </div>
        </div>
        <div class="container-branco">
                <h1>JAYNE FERNAND</h1>
         </div>
    </div>
</template>
<style>
.container-branco{
    background-color: #eee;
    color:rgb(237, 127, 145);
    width: 100%;
    height: 80vh;
}
#detalhes:active {
    height: 300px;
    width: 90vw;

}
#detalhes div {
    font-weight: 700;
    transform: rotate(270deg);
    height: 60px;
}
#detalhes {
    height: 300px;
    width: 20vw;
    margin-left: 10px;
    margin-right: 15px;
    background-color: #DB2F62;
    border-radius: 10px;
    transition: all .2s;
    cursor: pointer;
}

#profile {
    height: 300px;
    width: 300px;
}

.container2 {
    position: absolute;
    top: 100vh;
    left: 50%;
    margin-left: 10px;
    transform: translate(-50%);

}

.container2 img {}

#banner {
    position: relative
}

#imagemCapa {
    position: absolute;
    width: 80vh;
    height: 50vh;
    text-align: left;
    left: 50%;
    margin-left: 10px;
    transform: translate(-50%);
}

#btn-1 {
    position: absolute;
    width: 300px;
    text-align: left;
    top: 85vh;
    left: 50%;
    margin-left: 10px;
    transform: translate(-50%);
}

#textoCartaz {
    position: absolute;
    font-size: 30px;
    font-weight: 600;
    width: 300px;
    text-align: left;
    top: 55vh;
    left: 50%;
    margin-left: 20px;
    transform: translate(-50%);
    z-index: 2;
}

#black {
    margin-top: -40;
}

#black {
    background-color: black;
    height: 30vh;
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
