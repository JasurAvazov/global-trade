<template>
	<div class="heroes">
		<div class="container">
			<h1>Управление Главным Слайдом</h1>

			<form @submit.prevent="addHero">
				<input
					type="file"
					ref="fileInput"
					accept="image/*"
					@change="handleFileChange"
					:key="newHero.photoFile ? newHero.photoFile.name : 'empty'"
				/>
				<textarea
					v-model="newHero.subtitle"
					placeholder="Введите подзаголовок"
				></textarea>
				<textarea
					v-model="newHero.title"
					placeholder="Введите заголовок"
				></textarea>
				<textarea
					v-model="newHero.button"
					placeholder="Введите текст кнопки"
				></textarea>
				<textarea
					v-model="newHero.buttonLink"
					placeholder="Введите ссылку кнопки"
				></textarea>
				<button type="submit">Добавить слайд</button>
			</form>

			<ul v-if="heroes.value">
				<li
					v-for="hero in heroes"
					:key="hero.id"
				>
					<div>
						<p>photo:</p>
						<br />
						<img
							:src="hero.photoURL"
							alt="Фотография слайда"
						/>
					</div>
					<p>
						subtitle:<br />
						{{ hero.subtitle }}
					</p>
					<p>
						title:<br />
						{{ hero.title }}
					</p>
					<p>
						button:<br />
						{{ hero.button }}
					</p>
					<p>
						buttonLink:<br />
						{{ hero.buttonLink }}
					</p>
					<button @click="deleteHero(hero.id)">Удалить</button>
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
const newHero = ref({
	subtitle: "",
	title: "",
	button: "",
	buttonLink: "",
	photoFile: null,
});
const heroes = ref([]);

const fetchHeroes = async () => {
	await store.dispatch("heroes/fetchItems");
	heroes.value = store.getters["heroes/getItems"];
};

onMounted(fetchHeroes);

const handleFileChange = (event) => {
	const file = event.target.files[0];
	newHero.value.photoFile = file;
};

const addHero = async () => {
	try {
		const storage = getStorage();
		const storageRefInstance = storageRef(
			storage,
			`heroes/${newHero.value.title}`
		);
		await uploadBytes(storageRefInstance, newHero.value.photoFile);

		const photoURL = await getDownloadURL(storageRefInstance);

		const newItem = {
			subtitle: newHero.value.subtitle,
			title: newHero.value.title,
			button: newHero.value.button,
			buttonLink: newHero.value.buttonLink,
			created_at: new Date().toISOString(),
			photoURL,
		};

		await store.dispatch("heroes/addItem", newItem);

		newHero.value = {
			subtitle: "",
			title: "",
			button: "",
			buttonLink: "",
			photoFile: null,
		};

		fetchHeroes();
	} catch (error) {
		console.error("Error adding hero item:", error);
	}
};

const deleteHero = async (heroId) => {
	await store.dispatch("heroes/deleteItem", heroId);
	fetchHeroes();
};
</script>

<style lang="scss" scoped>
.heroes {
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
