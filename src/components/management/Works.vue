<template>
	<div class="works">
		<div class="container">
			<h1>Управление Работами</h1>

			<form @submit.prevent="addWork">
				<input
					type="file"
					ref="fileInput"
					accept="image/*"
					@change="handleFileChange"
					:key="newWork.photoFile ? newWork.photoFile.name : 'empty'"
				/>
				<textarea
					v-model="newWork.subtitle"
					placeholder="Введите подзаголовок"
				></textarea>
				<textarea
					v-model="newWork.title"
					placeholder="Введите заголовок"
				></textarea>
				<button type="submit">Добавить слайд</button>
			</form>

			<ul>
				<li v-for="item in items" :key="item.id">
					<div>
						<p>photo:</p>
						<br />
						<img :src="item.photoURL" alt="Фотография слайда" />
					</div>
					<p>
						subtitle:<br />
						{{ item.subtitle }}
					</p>
					<p>
						title:<br />
						{{ item.title }}
					</p>
					<button @click="deleteWork(item.id)">Удалить</button>
				</li>
			</ul>
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import {
	getStorage,
	ref as storageRef,
	uploadBytes,
	getDownloadURL,
} from "firebase/storage";

const store = useStore();
const newWork = ref({
	subtitle: "",
	title: "",
	photoFile: null,
});
const items = ref([]);

const fetchWorks = async () => {
	await store.dispatch("works/fetchItems");
	items.value = store.getters["works/getItems"];
};

onMounted(fetchWorks);

const handleFileChange = (event) => {
	const file = event.target.files[0];
	newWork.value.photoFile = file;
};

const addWork = async () => {
	try {
		const storage = getStorage();
		const storageRefInstance = storageRef(
			storage,
			`works/${newWork.value.title}`
		);
		await uploadBytes(storageRefInstance, newWork.value.photoFile);

		const photoURL = await getDownloadURL(storageRefInstance);

		const newItem = {
			subtitle: newWork.value.subtitle,
			title: newWork.value.title,
			created_at: new Date().toISOString(),
			photoURL,
		};

		await store.dispatch("works/addItem", newItem);

		newWork.value = {
			subtitle: "",
			title: "",
			photoFile: null,
		};

		fetchWorks();
	} catch (error) {
		console.error("Error adding work item:", error);
	}
};

const deleteWork = async (workId) => {
	await store.dispatch("works/deleteItem", workId);
	fetchWorks();
};
</script>

<style lang="scss" scoped>
.works {
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
		input[type="file"] {
			width: 100%;
			padding: 10px 20px;
			background-color: white;
			border: 1px solid #ccc;
			border-radius: 5px;
			margin-bottom: 5px;
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
		background-color: #f2f2f2;
		padding: 20px;
		border-radius: 5px;
		li {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 10px 0;
			border-bottom: 1px solid #ccc;
			&:last-child {
				border-bottom: none;
			}
			img {
				width: 200px;
				aspect-ratio: 16/10;
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
