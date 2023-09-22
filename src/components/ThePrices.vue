<template>
    <section
        class="prices"
        id="prices"
    >
        <div class="container">
            <p class="subtitle">
                Цены и Планы
            </p>
            <h3 class="title">
                Цены
            </h3>
            <div class="items">
                <div class="item">
                    <h5 class="item-title">Цены на «АВИА» карго</h5>
                    <!-- <p class="item-price">10.00</p> -->
                    <img
                        class="item-img"
                        src="../assets/img/logo.jpg"
                        alt=""
                        draggable="false"
                    >
                    <p class="item-description">от 0.1 КГ за киллограм - 10 USD. Почта "Авиа" по прибытии на наш склад
                        упаковывается и отправляется в путь в течение 3-6 дней, Почта прибывает в Ташкент в течение 6-12
                        дней после отправления</p>
                </div>
                <div class="item">
                    <h5 class="item-title">Цены на «ФУРА» карго</h5>
                    <!-- <p class="item-price">6.60</p> -->
                    <img
                        class="item-img"
                        src="../assets/img/logo.jpg"
                        alt=""
                        draggable="false"
                    >
                    <p class="item-description">от 0.1 КГ за киллограм – 6.6 USD. Почта” фура " по прибытии на наш склад
                        упаковывается и отправляется в путь в течение 3-6 дней, Почта прибывает в Ташкент в течение 20-28
                        дней после отправления.</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.prices {
    background-color: #edeff5;
}

.container {
    padding: 100px 15px 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    @media (max-width: 576px) {
        padding: 80px 12px 50px;
    }
}

.items {
    width: 100%;
    max-width: 770px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px;

    @media (max-width: 768px) {
        gap: 15px;
    }
}

.item {
    width: calc(100% / 2 - 15px);
    padding: 60px 40px;
    background-color: white;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    @media (max-width: 768px) {
        width: calc(100% / 2 - 15px / 2);
        padding: 45px 20px;
    }

    @media (max-width: 670px) {
        width: 100%;
        min-height: 350px;
        justify-content: center;
    }

    &-title {
        font-size: 14px;
        color: black;
        letter-spacing: 1.2px;
        font-weight: 500;
        margin-bottom: 8px;
    }

    &-img {
        width: 100%;
        height: 120px;
        object-fit: cover;
    }

    &-price {
        font-size: 44px;
        font-weight: 500;
        color: #064acb;
        position: relative;
        margin-bottom: 16px;

        &::before {
            content: '$';
            font-size: 16px;
            position: absolute;
            font-weight: 500;
            top: 4px;
            right: -12px;
        }
    }

    &-description {
        font-size: 14px;
        color: gray;
        text-align: center;
        line-height: 1.5;
    }
}

.subtitle {
    font-size: 12px;
    display: block;
    font-weight: 700;
    color: #f79f24;
    text-transform: uppercase;
    letter-spacing: 2px;
}

.title {
    font-size: 24px;
    font-weight: 700;
    line-height: 1.5;
    color: rgba(0, 0, 0, 0.8);
    margin-bottom: 56px;

    @media (max-width: 576px) {
        margin-bottom: 36px;
    }
}
</style>