<template>
	<div class="heroes">
		<div class="container">
			<h1>Управление Главным Слайдом</h1>

			<!-- Форма для добавления отзыва -->
			<form @submit.prevent="addHero">
				<textarea
					v-model="newHero.subtitle"
					placeholder="Введите подзагаловок"
				></textarea>
				<textarea
					v-model="newHero.title"
					placeholder="Введите загаловок"
				></textarea>
				<textarea
					v-model="newHero.button"
					placeholder="Введите текст кнопки"
				></textarea>
				<textarea
					v-model="newHero.buttonLink"
					placeholder="Введите ссылку кнопки"
				></textarea>
				<button type="submit">Добавить отзыв</button>
			</form>

			<!-- Список отзывов -->
			<ul>
				<li v-for="hero in heroes" :key="hero.id">
					<p>{{ hero.subtitle }}</p>
					<p>{{ hero.title }}</p>
					<p>{{ hero.button }}</p>
					<p>{{ hero.buttonLink }}</p>
					<button @click="deleteHero(hero.id)">Удалить</button>
				</li>
			</ul>
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();
const newHero = ref({
	subtitle: "",
	title: "",
	button: "",
	buttonLink: "",
});
const heroes = ref([]);

const fetchHeroes = async () => {
	await store.dispatch("heroes/fetchItems");
	heroes.value = store.getters["heroes/getItems"];
};

onMounted(fetchHeroes);

const addHero = async () => {
	await store.dispatch("heroes/addItem", newHero.value);
	newHero.value = {
		subtitle: "",
		title: "",
		button: "",
		buttonLink: "",
	}; // Очистить форму после добавления
	fetchHeroes(); // Обновить список отзывов
};

const deleteHero = async (heroId) => {
	await store.dispatch("heroes/deleteItem", heroId);
	fetchHeroes(); // Обновить список отзывов после удаления
};
</script>

<style lang="scss" scoped>
.heroes {
	.container {
		padding: 50px 15px;
	}
	h1 {
		font-size: 24px;
		font-weight: bold;
		margin-bottom: 20px;
	}

	form {
		margin-bottom: 20px;
		textarea {
			width: 100%;
			padding: 10px;
			border: 1px solid #ccc;
			border-radius: 5px;
			resize: vertical;
		}
		button {
			margin-top: 10px;
			padding: 10px 20px;
			background-color: #007bff;
			color: #fff;
			border: none;
			border-radius: 5px;
			cursor: pointer;
		}
	}

	ul {
		list-style: none;
		padding: 0;
		li {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 10px 0;
			border-bottom: 1px solid #ccc;
			&:last-child {
				border-bottom: none;
			}
			button {
				background-color: #dc3545;
				color: #fff;
				border: none;
				border-radius: 5px;
				cursor: pointer;
				padding: 10px 20px;
			}
		}
	}
}
</style>
