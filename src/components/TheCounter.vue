<template>
	<section class="counter">
		<div class="container">
			<div
				class="counter-item"
				ref="counter1"
			>
				<p class="count">0</p>
				<p class="title">Years of Experienced</p>
			</div>
			<div
				class="counter-item"
				ref="counter2"
			>
				<p class="count">0</p>
				<p class="title">Years of Experienced</p>
			</div>
			<div
				class="counter-item"
				ref="counter3"
			>
				<p class="count">0</p>
				<p class="title">Years of Experienced</p>
			</div>
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
			const targets = [
				this.$refs.counter1,
				this.$refs.counter2,
				this.$refs.counter3,
			];
			const targetCounts = [96, 36, 24];
			const duration = 4;

			targets.forEach((target, index) => {
				const tl = gsap.timeline({
					scrollTrigger: {
						trigger: target,
						start: "top 80%",
						end: "top 80%",
						// markers: true,
					},
				});

				tl.to(target.querySelector(".count"), {
					duration: duration,
					innerText: targetCounts[index],
					roundProps: "innerText",
				});
			});
		},
	},
};
</script>

<style lang="scss" scoped>
.counter {
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #252525;

	.container {
		padding: 60px 15px;
		display: flex;
		align-items: flex-start;
		justify-content: space-evenly;
		flex-wrap: wrap;
		column-gap: 20px;
		row-gap: 45px;
	}

	&-item {
		width: calc(100% / 3 - 40px / 3);

		@media (max-width: 768px) {
			width: calc(100% / 2 - 20px / 2);
		}

		@media (max-width: 480px) {
			width: 100%;
		}
	}

	.count {
		text-align: center;
		font-size: 40px;
		font-weight: bold;
		color: #f79f24;
		margin-bottom: 10px;

		@media (max-width: 480px) {
			font-size: 32px;
		}
	}

	.title {
		color: white;
		text-align: center;
		max-width: 200px;
		margin: auto;
		font-size: 16px;
		line-height: 1.5;

		@media (max-width: 480px) {
			font-size: 14px;
		}
	}
}
</style>
