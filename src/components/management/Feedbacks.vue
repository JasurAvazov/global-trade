<template>
	<div class="feedbacks">
		<div class="container">
			<h1>Управление Отзывами</h1>

			<!-- Форма для добавления отзыва -->
			<form @submit.prevent="addFeedback">
				<textarea
					v-model="newFeedback.paragraph"
					placeholder="Введите отзыв"
				></textarea>
				<button type="submit">Добавить отзыв</button>
			</form>

			<!-- Список отзывов -->
			<ul>
				<li v-for="feedback in feedbacks" :key="feedback.id">
					{{ feedback.paragraph }}
					<button @click="deleteFeedback(feedback.id)">
						Удалить
					</button>
				</li>
			</ul>
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();
const newFeedback = ref({ paragraph: "" });
const feedbacks = ref([]);

const fetchFeedbacks = async () => {
	await store.dispatch("feedbacks/fetchItems");
	feedbacks.value = store.getters["feedbacks/getItems"];
};

onMounted(fetchFeedbacks);

const addFeedback = async () => {
	await store.dispatch("feedbacks/addItem", newFeedback.value);
	newFeedback.value = { paragraph: "" }; // Очистить форму после добавления
	fetchFeedbacks(); // Обновить список отзывов
};

const deleteFeedback = async (feedbackId) => {
	await store.dispatch("feedbacks/deleteItem", feedbackId);
	fetchFeedbacks(); // Обновить список отзывов после удаления
};
</script>

<style lang="scss" scoped>
.feedbacks {
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
