<template>
	<section
		class="cta"
		ref="parallax"
	>
		<div class="bg"></div>
		<div class="cta-content container">
			<h2 class="cta-title">Оптимизируйте свой бизнес с нами!</h2>
			<p class="cta-description">
				Мы предлагаем лучшие решения по закупкам из Китая и снабжению
				вашего бизнеса. Узнайте, как мы можем помочь вам достичь успеха.
			</p>
			<a
				href="#"
				class="cta-button"
			>Свяжитесь с нами</a>
		</div>
	</section>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
	mounted() {
		gsap.registerPlugin(ScrollTrigger);
		this.startCounterAnimation();
	},
	methods: {
		startCounterAnimation() {
			const targets = [this.$refs.parallax];

			targets.forEach((target, index) => {
				const tl = gsap.timeline({
					scrollTrigger: {
						trigger: target,
						start: "center 100%",
						end: "center 0%",
						scrub: .1,
					},
				});

				tl.fromTo(target, {
					backgroundPosition: '0 -200px',
				}, {
					backgroundPosition: '0 -400px',
				});
			});
		},
	},
};
</script>

<style lang="scss" scoped>
.cta {
	background-color: white;
	padding: 100px 0 100px;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 30px;
	background-image: url(../assets/img/hero.jpeg);
	background-size: cover;
	position: relative;
	will-change: background-position;

	@media (max-width: 576px) {
		padding: 80px 0 50px;
	}
}

.bg {
	background-color: black;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	opacity: .65;
}

.cta-content {
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	position: relative;
}

.cta-title {
	font-size: 24px;
	font-weight: 600;
	margin-bottom: 40px;
	color: rgb(255, 255, 255);
	text-shadow: 0 0px 10px rgba(255, 255, 255, 0.274);
}

.cta-description {
	font-size: 16px;
	margin-bottom: 60px;
	max-width: 800px;
	color: rgb(255, 255, 255);
	font-weight: 500;
	text-shadow: 0 0px 10px rgba(255, 255, 255, 0.425);
}

.cta-button {
	background-color: #f79f24;
	color: white;
	font-size: 16px;
	padding: 15px 30px;
	border-radius: 5px;
	text-decoration: none;
	transition: background-color 0.3s, color 0.3s;
	border: 1px solid #f79f24;
	font-weight: 600;

	@media (min-width: 992px) {
		&:hover {
			background-color: white;
			color: #f79f24;
		}
	}

	@media (max-width: 576px) {
		padding: 12px 20px;
	}
}
</style>
