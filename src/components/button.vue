<template>
    <div id="corpo">
        <div id="texto"><a href="#">{{texto}}</a></div>
    </div>
</template>
<style>
#corpo{
    background: linear-gradient(89.68deg, #FA4589 0.28%, #FD529F 107.78%);
    border-radius: 100px;
    justify-content:center;

}
#texto a{
    text-decoration: inherit;
    color:inherit
}
#texto{
    text-align: center;
    color: black;
    font-weight:600;
    padding: 1vh;
}

</style>

<script>
export default{
    name:'Button',
    props:{
        texto:String
    }
}
</script>