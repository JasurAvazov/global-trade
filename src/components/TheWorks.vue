<template>
	<div
		class="works"
		id="works"
	>
		<div class="container">
			<p class="subtitle">Работы</p>
			<h1 class="title">Работы</h1>
			<div class="cards">
				<div
					class="card"
					v-for="item in items"
					:key="item.id"
				>
					<img
						:src="item.photoURL"
						alt=""
						draggable="false"
					/>
					<div class="card-inner">
						<h4 class="card-title text-anim">{{ item.title }}</h4>
						<p class="card-subtitle text-anim">{{ item.subtitle }}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
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
			await store.dispatch("works/fetchItems");
			items.value = store.getters["works/getItems"];
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
.container {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: 100px 15px;

	@media (max-width: 768px) {
		padding: 65px 15px;
	}
}

.cards {
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	gap: 10px;
	flex-wrap: wrap;
}

.title {
	font-size: 24px;
	font-weight: 700;
	line-height: 1.5;
	color: rgba(0, 0, 0, 0.8);
	margin-bottom: 56px;

	@media (max-width: 992px) {
		margin-bottom: 20px;
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

.card {
	width: calc(100% / 3 - 7px);
	height: 240px;
	position: relative;

	@media (min-width: 993px) {
		&:hover {
			.card-inner {
				background-color: #0000008f;
			}

			.text-anim {
				transform: translateY(0);
				opacity: 1;
			}
		}
	}

	@media (max-width: 880px) {
		width: calc(50% - 5px);
	}

	@media (max-width: 576px) {
		width: 100%;
	}

	&-title {
		color: white;
		font-weight: 500;
		font-size: 18px;
		transform: translateY(100%);
	}

	&-subtitle {
		color: white;
		font-weight: 400;
		font-size: 16px;
	}

	.text-anim {
		transform: translateY(100%);
		opacity: 0;
		transition: transform .2s, opacity .2s;
		will-change: transform, opacity;
		@media (max-width: 992px) {
			transform: translateY(0);
			opacity: 1;
		}
	}

	&-inner {
		position: relative;
		background-color: rgba(0, 0, 0, 0);
		width: 100%;
		height: 100%;
		padding: 10px;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		transition: background-color 0.2s;

		@media (max-width: 992px) {
			background-color: #0000008f;
		}
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		position: absolute;
		top: 0;
		left: 0;
	}
}
</style>
