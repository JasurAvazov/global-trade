<template>
    <section class="intro">
        <div class="intro-bg"></div>
        <div class="container">
            <div class="sec-container">
                <p class="intro-text">нужна помощь? <span>свяжитесь с нами</span></p>
                <a
                    class="intro-btn"
                    href="#"
                >Связаться</a>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.intro {
    width: 100%;
    height: 100px;
    z-index: 1;
    overflow: hidden;
    position: relative;
    margin: -50px 0 0;

    @media (max-width: 768px) {
        height: 80px;
    }

    @media (max-width: 430px) {
        height: 60px;
    }

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

        @media (max-width: 768px) {
            height: 80px;
        }

        @media (max-width: 430px) {
            height: 60px;
        }
    }

    .sec-container {
        width: 100%;
        max-width: 60%;
        height: 100%;
        background-color: #064acb;
        display: flex;
        justify-content: space-between;
        align-items: center;

        @media (max-width: 920px) {
            max-width: 75%;
        }

        @media (max-width: 700px) {
            max-width: 90%;
        }

        @media (max-width: 576px) {
            max-width: 100%;
        }
    }

    &-text {
        color: white;
        font-size: 18px;

        @media (max-width: 540px) {
            font-size: 14px;
        }

        span {
            color: #ffffff66;

            @media (max-width: 385px) {
                display: block;
            }
        }
    }

    &-btn {
        height: 100%;
        padding: 0 50px;
        font-size: 16px;
        font-weight: 500;
        background-color: #f79f24;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background-color .3s;

        @media (max-width: 768px) {
            padding: 0 40px;
        }

        @media (max-width: 540px) {
            font-size: 14px;
        }

        @media (max-width: 430px) {
            padding: 0 20px;
        }

        &:hover {
            background-color: #0062cc;
        }
    }
}
</style>
