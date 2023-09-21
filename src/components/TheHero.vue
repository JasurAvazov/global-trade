<template>
	<section class="hero">
		<swiper
			:effect="'fade'"
			:loop="true"
			:modules="modules"
			class="heroSwiper"
		>
			<swiper-slide
				v-for="item in items"
				:key="item.id"
			>
				<img
					class="swiper-bg"
					:src="item.photoURL"
					alt=""
				/>
				<div class="container">
					<p class="subtitle">{{ item.subtitle }}</p>
					<h2 class="title">{{ item.title }}</h2>
					<a
						class="btn"
						:href="item.buttonLink"
					>{{ item.button }}</a>
				</div>
			</swiper-slide>
		</swiper>
	</section>
</template>

<script>
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/effect-fade";

import "../assets/swiper.scss";

import { EffectFade } from "swiper/modules";

export default {
	components: {
		Swiper,
		SwiperSlide,
	},
	setup() {
		const store = useStore();
		const items = ref([]);
		const reversedItems = ref([]);

		const fetchItems = async () => {
			await store.dispatch("heroes/fetchItems");
			items.value = store.getters["heroes/getItems"];
		};

		onMounted(() => {
			fetchItems();
			reversedItems.value = items.value.slice().reverse();
		});

		return { modules: [EffectFade], items, reversedItems };
	},
};
</script>

<style lang="scss" scoped>
.swiper {
	aspect-ratio: 21/8;

	@media (max-width: 1300px) {
		aspect-ratio: 21/10;
	}

	@media (max-width: 820px) {
		aspect-ratio: 16/12;
	}

	@media (max-width: 600px) {
		aspect-ratio: 16/14;
	}

	@media (max-width: 440px) {
		aspect-ratio: 16/16;
	}

	@media (max-width: 380px) {
		aspect-ratio: 16/19;
	}

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
		opacity: 0.6;
	}

	&-slide {
		background-color: #000;

		.container {
			position: relative;
			display: flex;
			align-items: flex-start;
			justify-content: center;
			flex-direction: column;

			@media (max-width: 992px) {
				align-items: center;
			}
		}

		.title {
			font-size: 40px;
			font-weight: 700;
			color: white;
			text-shadow: 0px 0px 10px rgb(0, 0, 0);
			margin-bottom: 24px;
			max-width: 600px;
			text-align: left;

			@media (max-width: 992px) {
				text-align: center;
			}

			@media (max-width: 600px) {
				font-size: 32px;
				margin-bottom: 36px;
			}

			@media (max-width: 450px) {
				font-size: 26px;
				margin-bottom: 24px;
			}

		}

		.subtitle {
			font-size: 16px;
			text-transform: uppercase;
			font-weight: 600;
			color: #f79f24;
			letter-spacing: 4px;
			line-height: 1.5;
			margin-bottom: 8px;
			text-shadow: 0px 0px 2px #865613;
			max-width: 600px;
			text-align: start;

			@media (max-width: 992px) {
				text-align: center;
			}

			@media (max-width: 600px) {
				font-size: 12px;
			}

			@media (max-width: 450px) {
				font-size: 10px;
			}
		}

		.btn {
			background-color: #f79f24;
			border: 1px solid #f79f24;
			color: white;
			border-radius: 4px;
			padding: 12px 16px;
			font-size: 14px;
			text-transform: uppercase;
			font-weight: 600;

			@media (max-width: 600px) {
				padding: 10px 16px;
				font-size: 12px;
			}

			@media (max-width: 450px) {
				padding: 8px 12px;
				font-size: 12px;
			}
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
