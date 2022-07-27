<template>
    <div id="corpo">
        <a href="/sobre"><div id="texto">{{texto}}</div></a>
    </div>
</template>
<style>
#corpo{
    background: linear-gradient(89.68deg, #FA4589 0.28%, #FD529F 107.78%);
    border-radius: 100px;
    justify-content:center;

}
#corpo:active{
    background: linear-gradient(89.68deg, #b12c5f 0.28%, #f228e5 107.78%);
    
}
#corpo a{
    text-decoration: inherit;
    color:inherit
}
#texto{
    text-align: center;
    color: black;
    font-size: 14px;
    font-weight:700;
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