<template>
	<div class="login__modal">
		<div
			class="login__modal-bg"
			@click="closeLoginModal"
		></div>
		<div class="login__modal-inner">
			<input
				class="login__modal-input"
				placeholder="Логин"
			/>
			<input
				class="login__modal-input"
				placeholder="Пароль"
			/>
			<button @click="login">Войти</button>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			username: "",
			password: "",
		};
	},
	methods: {
		login() {
			if (this.username === "" && this.password === "") {
				this.$store.commit("log/setLoggedIn", true);
				this.$router.push({ name: "management" });
				this.$emit("close");
			} else {
				alert("Неверный логин или пароль");
			}
		},
		closeLoginModal() {
			this.$emit("close");
		},
	},
};
</script>

<style lang="scss" scoped>
.login {
	&__modal {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 100;

		&-bg {
			width: 100%;
			height: 100%;
			position: absolute;
			background-color: black;
			opacity: 0.5;
		}

		&-inner {
			padding: 50px 100px;
			background-color: #fff;
			position: relative;
			border-radius: 4px;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}

		&-input {
			padding: 10px 15px;
			background-color: #fff;
			border: 1px solid #ccc;
			border-radius: 4px;
			margin-bottom: 1rem;
		}

		button {
			padding: 10px 15px;
			background-color: green;
			font-weight: 500;
			color: white;
			border-radius: 4px;
		}
	}
}
</style>
