<template>
	<section class="our-advantages">
		<div class="container">
			<div class="advantage" v-for="item in items" :key="item.id">
				<div class="circle">
					<img :src="item.photoURL" alt="Иконка" />
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
    .container{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 100px 15px 100px;
    }
	.advantage {
		text-align: center;
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
				max-width: 80%;
				max-height: 80%;
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
