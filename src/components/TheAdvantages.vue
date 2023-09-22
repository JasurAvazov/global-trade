<template>
	<section class="our-advantages">
		<div class="container">
			<div
				class="advantage"
				v-for="item in items"
				:key="item.id"
			>
				<div class="circle">
					<img :src="item.photoURL" alt="Иконка" draggable="false"/>
				</div>
				<h3 class="advantage-title">{{ item.title }}</h3>
				<p class="advantage-text">{{ item.text }}</p>
			</div>
		</div>
	</section>
</template>

<script>
import { ref, onMounted } from "vue";
import { useStore } from "vuex";

export default {
	setup() {
		const store = useStore();
		const items = ref([]);
		const reversedItems = ref([]);

		const fetchItems = async () => {
			await store.dispatch("advantages/fetchItems");
			items.value = store.getters["advantages/getItems"];
		};

		onMounted(() => {
			fetchItems();
			reversedItems.value = items.value.slice().reverse();
		});

		return { items, reversedItems };
	},
};
</script>

<style lang="scss" scoped>
.our-advantages {
	background-color: #edeff5;
	display: flex;
	justify-content: space-between;
	.container {
		display: flex;
		justify-content: space-evenly;
		padding: 100px 15px;
		flex-wrap: wrap;
		column-gap: 25px;
		row-gap: 36px;
		@media (max-width: 992px) {
			padding: 60px 15px;
		}
	}
	.advantage {
		text-align: center;
		width: calc(100% / 4 - 75px / 4);

		@media (max-width: 992px) {
			width: calc(100% / 3 - 50px / 3);
		}

		@media (max-width: 768px) {
			width: calc(100% / 2 - 25px / 2);
		}

		@media (max-width: 576px) {
			width: 100%;
			max-width: 400px;
		}

		.circle {
			width: 120px;
			height: 120px;
			background-color: #f79f24;
			border-radius: 50%;
			margin: 0 auto;
			display: flex;
			justify-content: center;
			align-items: center;
			margin-bottom: 20px;
			img {
				max-width: 45%;
				width: 100%;
				object-fit: contain;
			}
			svg{
				max-width: 45%;
				width: 100%;
				object-fit: contain;
			}
		}
		.advantage-title {
			color: #202020;
			font-size: 20px;
			margin-bottom: 10px;
		}
		.advantage-text {
			color: gray;
			font-size: 16px;
		}
	}
}
</style>
