<template>
	<footer
		class="footer"
		id="contacts"
	>
		<div class="container">
			<ul class="footer__columns">
				<li class="footer__column">
					<a
						class="logo"
						href="#"
					>
						<p>GGTrade<span>.</span></p>
					</a>
					<p class="footer-text">
						Far far away, behind the word mountains, far from the
						countries Vokalia and Consonantia, there live the blind
						texts.
					</p>
					<ul class="footer__links">
						<li>
							<a href="#">
								<img
									src="../assets/img/icons/facebook.svg"
									alt=""
								/>
							</a>
						</li>
						<li>
							<a href="#">
								<img
									src="../assets/img/icons/twitter.svg"
									alt=""
								/>
							</a>
						</li>
						<li>
							<a href="#">
								<img
									src="../assets/img/icons/instagram.svg"
									alt=""
								/>
							</a>
						</li>
					</ul>
				</li>
				<li class="footer__column">
					<h3 class="footer-title">Навигация</h3>
					<ul class="footer__ul">
						<li>
							<router-link :to="{ name: 'home', hash: '' }">
								Главная
							</router-link>
						</li>
						<li>
							<router-link :to="{ name: 'home', hash: '#works' }">
								Работы
							</router-link>
						</li>
						<li>
							<router-link :to="{ name: 'home', hash: '#feedbacks' }">
								Отзывы
							</router-link>
						</li>
						<li>
							<router-link :to="{ name: 'home', hash: '#prices' }">
								Сервисы
							</router-link>
						</li>
						<li>
							<router-link :to="{ name: 'home', hash: '#contacts' }">
								Контакты
							</router-link>
						</li>
						<template v-if="loggedIn">
							<router-link to="/management">
								Режим менеджера
							</router-link>
						</template>
						<template v-else>
							<button
								class="header-register"
								@click="openLoginModal"
							>
								Войти как админ
							</button>
						</template>
					</ul>
				</li>
				<li class="footer__column">
					<h3 class="footer-title">Контакты</h3>
					<ul class="footer__ul">
						<li>
							<img
								src="../assets/img/icons/map-marker-alt.svg"
								alt=""
							/>
							<a href="#">
								203 Fake St. Mountain View, San Francisco,
								California, USA
							</a>
						</li>
						<li>
							<img
								src="../assets/img/icons/phone.svg"
								alt=""
							/>
							<a href="#"> +2 392 3929 210 </a>
						</li>
						<li>
							<img
								src="../assets/img/icons/paper-plane.svg"
								alt=""
							/>
							<a href="#"> info@yourdomain.com </a>
						</li>
					</ul>
				</li>
				<li class="footer__column"></li>
			</ul>
		</div>
	</footer>
	<LoginModal
		v-if="showLoginModal"
		@close="closeLoginModal"
	/>
</template>

<script>
import { mapState } from "vuex";

export default {
	computed: {
		...mapState("log", ["loggedIn"]),
	},
	data() {
		return {
			showLoginModal: false,
		};
	},
	methods: {
		openLoginModal() {
			this.showLoginModal = true;
		},
		closeLoginModal() {
			this.showLoginModal = false;
		},
	},
};
</script>

<style lang="scss" scoped>
.footer {
	background-color: #252525;

	.container {
		padding: 130px 15px 100px;

		@media (max-width: 768px) {
			padding: 80px 15px 40px;
		}
	}

	&__columns {
		display: flex;
		align-items: flex-start;
		justify-content: flex-start;
		flex-wrap: wrap;
		gap: 70px;
		@media (max-width: 576px) {
			gap: 40px;
		}
	}

	&__column {
		list-style: none;
		max-width: 300px;
		width: max-content;
	}

	.logo {
		display: inline-block;
		margin-bottom: 40px;

		p {
			font-size: 22px;
			color: white;
			font-weight: 800;
			transition: color 0.3s;

			&:hover {
				color: #f79f24;
			}

			span {
				color: #f79f24;
			}
		}
	}

	&-text {
		color: #ffffffb3;
		margin-bottom: 16px;
		font-size: 14px;
		line-height: 1.8;
		flex-wrap: 400;
	}

	&__links {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		gap: 10px;

		li {
			list-style: none;
		}

		a {
			width: 40px;
			height: 40px;
			display: flex;
			align-items: center;
			justify-content: center;
			background-color: #ffffff1a;
			border-radius: 50%;
			transition: background-color 0.3s;

			&:hover {
				background-color: #f79f24;
			}

			img {
				max-height: 20px;
			}
		}
	}

	&-title {
		font-size: 20px;
		font-weight: 600;
		color: white;
		margin-bottom: 40px;

		@media (max-width: 576px) {
			margin-bottom: 15px;
		}
	}

	&__ul {
		li {
			list-style: none;
			margin-bottom: 12px;
			display: flex;
			align-items: flex-start;
			justify-content: flex-start;
			gap: 20px;
		}

		a,
		.header-register {
			font-size: 14px;
			font-weight: 400;
			color: white;
			transition: color 0.3s;
			background-color: transparent;

			&:hover {
				color: #f79f24;
			}
		}

		img {
			max-height: 14px;
			position: relative;
			top: 2px;
		}
	}
}
</style>
