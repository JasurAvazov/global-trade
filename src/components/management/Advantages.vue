<template>
	<div class="advantages">
		<div class="container">
			<h1>Управление преимуществами</h1>

			<form @submit.prevent="addAdvantage">
				<input
					type="file"
					ref="fileInput"
					accept="image/*"
					@change="handleFileChange"
					:key="newAdvantage.photoFile ? newAdvantage.photoFile.name : 'empty'"
				/>
				<textarea
					v-model="newAdvantage.text"
					placeholder="Введите подзаголовок"
				></textarea>
				<textarea
					v-model="newAdvantage.title"
					placeholder="Введите заголовок"
				></textarea>
				<button type="submit">Добавить слайд</button>
			</form>

			<ul v-if="items.value">
				<li
					v-for="item in items"
					:key="item.id"
				>
					<div>
						<p>photo:</p>
						<br />
						<img
							:src="item.photoURL"
							alt="Фотография слайда"
						/>
					</div>
					<p>
						text:<br />
						{{ item.text }}
					</p>
					<p>
						title:<br />
						{{ item.title }}
					</p>
					<button @click="deleteAdvantage(item.id)">Удалить</button>
				</li>
			</ul>
			<div
				v-else
				class="empty"
			>
				<span>
					Empty
				</span>
			</div>
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
const newAdvantage = ref({
	text: "",
	title: "",
	photoFile: null,
});
const items = ref([]);

const fetchAdvantages = async () => {
	await store.dispatch("advantages/fetchItems");
	items.value = store.getters["advantages/getItems"];
};

onMounted(fetchAdvantages);

const handleFileChange = (event) => {
	const file = event.target.files[0];
	newAdvantage.value.photoFile = file;
};

const addAdvantage = async () => {
	try {
		const storage = getStorage();
		const storageRefInstance = storageRef(
			storage,
			`advantages/${newAdvantage.value.title}`
		);
		await uploadBytes(storageRefInstance, newAdvantage.value.photoFile);

		const photoURL = await getDownloadURL(storageRefInstance);

		const newItem = {
			text: newAdvantage.value.text,
			title: newAdvantage.value.title,
			created_at: new Date().toISOString(),
			photoURL,
		};

		await store.dispatch("advantages/addItem", newItem);

		newAdvantage.value = {
			text: "",
			title: "",
			photoFile: null,
		};

		fetchAdvantages();
	} catch (error) {
		console.error("Error adding advantage item:", error);
	}
};

const deleteAdvantage = async (advantageId) => {
	await store.dispatch("advantages/deleteItem", advantageId);
	fetchAdvantages();
};
</script>

<style lang="scss" scoped>
.advantages {
	.container {
		padding: 50px 15px;
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
