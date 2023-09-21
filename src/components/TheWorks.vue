<template>
    <div class="works" id="works">
        <div class="container">
            <p class="subtitle">Работы</p>
            <h1 class="title">Работы</h1>
            <div class="cards">
                <div class="card">
                    <img src="../assets/img/hero.jpeg" alt="" draggable="false">
                    <h4>dsadsad</h4>
                    <p>dsadsadasd</p>
                </div>
                <div class="card">
                    <img src="../assets/img/hero.jpeg" alt="" draggable="false">
                    <h4>dsadsad</h4>
                    <p>dsadsadasd</p>
                </div>
                <div class="card">
                    <img src="../assets/img/hero.jpeg" alt="" draggable="false">
                    <h4>dsadsad</h4>
                    <p>dsadsadasd</p>
                </div>
                <div class="card">
                    <img src="../assets/img/hero.jpeg" alt="" draggable="false">
                    <h4>dsadsad</h4>
                    <p>dsadsadasd</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style lang="scss" scoped>
.works{
}
.container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 100px 15px;
}
.cards{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}
.title{
    margin-bottom: 60px;
}
.subtitle{
    
}
.card{
    width: calc(100% / 4 - 7.5px);
    height: 200px;
    position: relative;
    background-color: red;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
        top: 0;
        left: 0;
    }
}
</style>