<template>
	<header class="header">
        <div class="header__top">
            <div class="container">
                <a class="logo" href="#">
                    <!-- <img src="../assets/photo_2023-09-11_18-06-41.jpg" alt=""> -->
                    <p>GGTrade<span>.</span></p> 
                </a>
                <div class="header__features">
                    <div class="header__about">
                        <div class="header__about-item">
                            <div class="header__about-icon">
                                <img src="../assets/img/icons/location-arrow.svg" alt="" draggable="false">
                            </div>
                            <div class="header__about-text">
                                <h5 class="header__about-title">ADDRESS</h5>
                                <p class="header__about-subtitle">721 New York NY 10016</p>
                            </div>
                        </div>
                        <div class="header__about-item">
                            <div class="header__about-icon">
                                <img src="../assets/img/icons/location-arrow.svg" alt="" draggable="false">
                            </div>
                            <div class="header__about-text">
                                <h5 class="header__about-title">CALL US</h5>
                                <p class="header__about-subtitle">(+01) 123 456 7890</p>
                            </div>
                        </div>
                    </div>
                    <ul class="header__links">
                        <li>
                            <a href="#">
                                <img src="../assets/img/icons/facebook.svg" alt="" draggable="false">
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="../assets/img/icons/twitter.svg" alt="" draggable="false">
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="../assets/img/icons/instagram.svg" alt="" draggable="false">
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="../assets/img/icons/dribbble.svg" alt="" draggable="false">
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="header__bot">
            <p>sdasdasda</p>
        </div>
    </header>
</template>

<style lang="scss" scoped>
.header{
    &__top{
        background-color: #202020;
        .logo{
            img{
                max-height: 70px;
            }
            p{
                font-size: 22px;
                color: white;
                font-weight: 800;
                span{
                    color: #f79f24;
                }
            }
        }
    }
    .container{
        padding: 25px 15px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    &__features{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    &__links{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 4px;
        li{
            list-style: none;
        }
        a{
            width: 30px;
            height: 30px;
            background: #ffffff1a;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            color: white;
            transition: background-color .3s;
            &:hover{
                background-color: #f79f24;
            }
            img{
                max-height: 14px;
            }
        }
    }
    &__about{
        display: flex;
        align-content: center;
        justify-content: center;
        gap: 30px;
        margin-right: 30px;
        &-item{
            display: flex;
            align-items: center;
            gap: 15px;
            min-width: 220px;
        }
        &-icon{
            width: 38px;
            height: 38px;
            border: 1px solid #f79f24;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            img{
                max-height: 12px;
            }
        }
        &-title{
            text-transform: uppercase;
            font-size: 12px;
            color: gray;
            line-height: 1.8;
            font-weight: 400;
        }
        &-subtitle{
            font-size: 12px;
            line-height: 1.8;
            font-weight: 400;
            color: #ffffffcc;
        }
    }
}
</style>
