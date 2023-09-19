<template>
	<section class="feedbacks" id="feedbacks">
		<div class="container">
			<p class="feedbacks-title">Счастливые клиенты и отзывы</p>
			<swiper
				:slidesPerView="3"
				:spaceBetween="40"
				:pagination="{
					clickable: true,
				}"
				:modules="modules"
				class="mySwiper"
			>
				<swiper-slide>
					<div class="quote">
						<img
							src="../assets/img/icons/quote-left.svg"
							alt=""
							draggable="false"
						/>
					</div>
					<p>
						Далеко-далеко, за словесными горами, вдали от стран
						Вокалий и Согласных, живут слепые тексты.
					</p>
				</swiper-slide>
				<swiper-slide>
					<div class="quote">
						<img
							src="../assets/img/icons/quote-left.svg"
							alt=""
							draggable="false"
						/>
					</div>
					<p>
						Далеко-далеко, за словесными горами, вдали от стран
						Вокалий и Согласных, живут слепые тексты.
					</p>
				</swiper-slide>
				<swiper-slide>
					<div class="quote">
						<img
							src="../assets/img/icons/quote-left.svg"
							alt=""
							draggable="false"
						/>
					</div>
					<p>
						Далеко-далеко, за словесными горами, вдали от стран
						Вокалий и Согласных, живут слепые тексты.
					</p>
				</swiper-slide>
				<swiper-slide>
					<div class="quote">
						<img
							src="../assets/img/icons/quote-left.svg"
							alt=""
							draggable="false"
						/>
					</div>
					<p>
						Далеко-далеко, за словесными горами, вдали от стран
						Вокалий и Согласных, живут слепые тексты.
					</p>
				</swiper-slide>
				<swiper-slide>
					<div class="quote">
						<img
							src="../assets/img/icons/quote-left.svg"
							alt=""
							draggable="false"
						/>
					</div>
					<p>
						Далеко-далеко, за словесными горами, вдали от стран
						Вокалий и Согласных, живут слепые тексты.
					</p>
				</swiper-slide>
			</swiper>
		</div>
	</section>
</template>

<style lang="scss" scoped>
.feedbacks {
	overflow: hidden;
	.container {
		padding: 100px 15px 30px;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
	&-title {
		font-size: 24px;
		font-weight: 700;
		line-height: 1.5;
		margin-bottom: 60px;
	}
	.swiper {
		overflow: visible;
		// .swiper-pagination-bullet::before {
		// 	content: "";
		// 	display: block;
		// 	width: 150%;
		// 	height: 150%;
		// 	border: 1px solid #f79f24;
		// 	border-radius: 50%;
		// 	position: absolute;
		// 	top: 0;
		// 	left: 0;
		// 	transform: translate(-25%, -25%);
		// }
		&-slide {
			display: flex;
			align-items: flex-start;
			position: relative;
			padding: 30px 20px 20px;
			border-radius: 5px;
			border: 1px solid rgba(0, 0, 0, 0.02);
			box-shadow: 0px 0px 40px 5px rgba(0, 0, 0, 0.253);
			min-height: 200px;
			margin-bottom: 80px;
			p {
				text-align: start;
				font-size: 16px;
				line-height: 1.5;
				margin-bottom: 20px;
				color: gray;
			}
			.quote {
				position: absolute;
				top: 0;
				left: 20px;
				transform: translateY(-50%);
				width: 40px;
				height: 40px;
				border-radius: 50%;
				background-color: #f79f24;
				display: flex;
				align-items: center;
				justify-content: center;
				img {
					height: 14px;
					width: 13px;
				}
			}
		}
	}
}
</style>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";

import "swiper/css/pagination";

import "../assets/swiper.scss";

import { Pagination } from "swiper/modules";

export default {
	components: {
		Swiper,
		SwiperSlide,
	},
	setup() {
		return {
			modules: [Pagination],
		};
	},
};
</script>
