<template>
	<section class="hero">
		<swiper
			:effect="'fade'"
			:loop="true"
			:modules="modules"
			:autoplay="{
				delay: 500000,
				disableOnInteraction: false,
			}"
			class="heroSwiper"
		>
			<swiper-slide>
				<img class="swiper-bg" src="../assets/img/hero1.png" alt="" />
				<div class="container">
					<p class="subtitle">We are best car repair services</p>
					<h2 class="title">Make your car last longer</h2>
					<a class="btn" href="#">Book an appointment</a>
				</div>
			</swiper-slide>
			<swiper-slide>
				<img class="swiper-bg" src="../assets/img/hero2.png" alt="" />
				<div class="container">
					<p class="subtitle">We care about your car</p>
					<h2 class="title">It's time to come to repair your car</h2>
					<a class="btn" href="#">Book an appointment</a>
				</div>
			</swiper-slide>
		</swiper>
	</section>
</template>

<style lang="scss" scoped>
.swiper {
	aspect-ratio: 21/8;
	&-bg {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}
	&-slide {
		.container {
			position: relative;
			display: flex;
			align-items: flex-start;
			justify-content: center;
			flex-direction: column;
		}
        .title{
            font-size: 40px;
            font-weight: 700;
            color: white;
            text-shadow: 0px 0px 10px rgb(0, 0, 0);
            margin-bottom: 24px;
        }
        .subtitle{
            font-size: 16px;
            text-transform: uppercase;
            font-weight: 600;
            color: #f79f24;
            letter-spacing: 4px;
            line-height: 1.5;
            margin-bottom: 8px;
            text-shadow: 0px 0px 2px #865613;
        }
        .btn{
            background-color: #f79f24;
            border: 1px solid #f79f24;
            color: white;
            border-radius: 4px;
            padding: 12px 16px;
            font-size: 14px;
            text-transform: uppercase;
            font-weight: 600;
        }
	}
}
.hero {
	position: relative;
	&Swiper {
		position: relative;
	}
}
</style>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/effect-fade";

import "../assets/swiper.scss";

import { EffectFade, Autoplay } from "swiper/modules";

export default {
	components: {
		Swiper,
		SwiperSlide,
	},
	setup() {
		return { modules: [EffectFade, Autoplay] };
	},
};
</script>
