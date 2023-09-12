<template>
	<div class="intro">
		<div class="intro-bg"></div>
		<div class="container">
			<div class="sec-container">
                <p class="intro-text">нужна помощь? <span>свяжитесь с нами</span></p>
                <a class="intro-btn" href="#">Связаться</a>
            </div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.intro {
	width: 100%;
	height: 100px;
	z-index: 1;
	overflow: hidden;
    position: relative;
    margin: -50px 0 0;
	&-bg {
		width: 100%;
		height: 100%;
		position: absolute;
		right: calc(100% - 50%);
		background-color: #064acb;
	}
	.container {
		position: relative;
		padding: 0 0 0 15px;
		height: 100px;
	}
	.sec-container {
		width: 60%;
		height: 100%;
		background-color: #064acb;
        display: flex;
        justify-content: space-between;
        align-items: center;
	}
    &-text{
        color: white;
        font-size: 18px;
        line-height: 1.5;
        span{
            color: #ffffff66;
        }
    }
    &-btn{
        height: 100%;
        padding: 0 50px;
        font-size: 16px;
        line-height: 1.8;
        font-weight: 500;
        background-color: #f79f24;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background-color .3s;
        &:hover{
            background-color: #0062cc;
        }
    }
}
</style>
