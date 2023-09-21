<template>
	<header class="header">
		<div :class="{ active: isOpenBurger }" class="filter"></div>
		<div class="header__top">
			<div class="container">
				<a class="logo" href="#">
					<p>GGTrade<span>.</span></p>
				</a>
				<div :class="{ active: isOpenBurger }" class="header__features">
					<div @click="toggleBurgerActive()" class="nav__exit">
						<div class="nav__exit-btn">
							<div class="btn-elem"></div>
						</div>
					</div>
					<div class="header__about">
						<div class="header__about-item">
							<div class="header__about-icon">
								<img src="../assets/img/icons/location-arrow.svg" alt="" draggable="false" />
							</div>
							<div class="header__about-text">
								<h5 class="header__about-title">ADDRESS</h5>
								<p class="header__about-subtitle">
									721 New York NY 10016
								</p>
							</div>
						</div>
						<div class="header__about-item">
							<div class="header__about-icon">
								<img src="../assets/img/icons/location-arrow.svg" alt="" draggable="false" />
							</div>
							<div class="header__about-text">
								<h5 class="header__about-title">CALL US</h5>
								<p class="header__about-subtitle">
									(+01) 123 456 7890
								</p>
							</div>
						</div>
					</div>
					<ul class="header__links">
						<li>
							<a href="#">
								<img src="../assets/img/icons/facebook.svg" alt="" draggable="false" />
							</a>
						</li>
						<li>
							<a href="#">
								<img src="../assets/img/icons/twitter.svg" alt="" draggable="false" />
							</a>
						</li>
						<li>
							<a href="#">
								<img src="../assets/img/icons/instagram.svg" alt="" draggable="false" />
							</a>
						</li>
						<li>
							<a href="#">
								<img src="../assets/img/icons/dribbble.svg" alt="" draggable="false" />
							</a>
						</li>
					</ul>
				</div>
				<div @click="toggleBurgerActive()" class="nav__open">
					<div class="nav__open-btn">
						<div class="btn-elem"></div>
					</div>
				</div>
			</div>
		</div>
		<div class="header__bot">
			<div class="container">
				<nav class="header__nav">
					<a href="#" class="header__nav-btn">Главная</a>
					<a href="#works" class="header__nav-btn">Работы</a>
					<a href="#feedbacks" class="header__nav-btn">Отзывы</a>
					<a href="#prices" class="header__nav-btn">Сервисы</a>
					<a href="#contacts" class="header__nav-btn">Контакты</a>
					<!-- <router-link to="/" custom v-slot="{ navigate }">
						<button
							class="header__nav-btn nav-button active"
							@click="
								setActiveButton(0);
								navigate();
							"
							role="link"
						>
							Главная
						</button>
					</router-link>
					<router-link to="/works" custom v-slot="{ navigate }">
						<button
							class="header__nav-btn nav-button"
							@click="
								setActiveButton(1);
								navigate();
							"
							role="link"
						>
							Работы
						</button>
					</router-link>
					<router-link to="/services" custom v-slot="{ navigate }">
						<button
							class="header__nav-btn nav-button"
							@click="
								setActiveButton(2);
								navigate();
							"
							role="link"
						>
							Сервисы
						</button>
					</router-link>
					<router-link to="/contacts" custom v-slot="{ navigate }">
						<button
							class="header__nav-btn nav-button"
							@click="
								setActiveButton(3);
								navigate();
							"
							role="link"
						>
							Контакты
						</button>
					</router-link> -->
				</nav>
			</div>
		</div>
	</header>
</template>

<script>
export default {
	data() {
		return {
			isOpenBurger: false
		};
	},
	methods: {
		setActiveButton(buttonIndex) {
			const buttons = document.querySelectorAll(".nav-button");

			buttons.forEach((button, index) => {
				if (index === buttonIndex) {
					button.classList.add("active");
				} else {
					button.classList.remove("active");
				}
			});
		},
		toggleBurgerActive() {
			this.isOpenBurger = !this.isOpenBurger;
			if (this.isOpenBurger) {
				document.body.classList.add("of");
			} else {
				document.body.classList.remove("of");
			}
		},
	},
};
</script>

<style lang="scss" scoped>
.filter {
	z-index: 98;
	background-color: rgba(0, 0, 0, 0.3);
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	opacity: 0;
	visibility: hidden;
	transition: .3s all;
}

.filter.active {
	opacity: 1;
	visibility: visible;
}

.header {
	&__top {
		background-color: #252525;

		.container {
			padding: 25px 15px;
			display: flex;
			align-items: center;
			justify-content: space-between;
		}

		.logo {
			img {
				max-height: 70px;
			}

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
	}

	&__features {
		display: flex;
		align-items: center;
		justify-content: space-between;

		&.active {
			transform: translateX(0);
		}

		@media (max-width: 768px) {
			flex-direction: column;
			row-gap: 30px;
			padding: 75px 0 20px;
			position: fixed;
			right: 0;
			transform: translateX(100%);
			top: 0;
			z-index: 99;
			background-color: #252525;
			height: 100%;
			max-width: 400px;
			width: 100%;
			transition: .5s transform;
		}
	}

	&__links {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 4px;

		li {
			list-style: none;
		}

		a {
			width: 30px;
			height: 30px;
			background: #ffffff1a;
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 50%;
			color: white;
			transition: background-color 0.3s;

			&:hover {
				background-color: #f79f24;
			}

			img {
				max-height: 14px;
			}
		}
	}

	&__about {
		display: flex;
		align-content: center;
		justify-content: center;
		gap: 30px;
		margin-right: 30px;

		@media (max-width: 768px) {
			flex-direction: column;
		}

		&-item {
			display: flex;
			align-items: center;
			gap: 15px;
			min-width: 190px;
		}

		&-icon {
			width: 38px;
			height: 38px;
			border: 1px solid #f79f24;
			border-radius: 50%;
			display: flex;
			align-items: center;
			justify-content: center;

			img {
				max-height: 12px;
			}
		}

		&-title {
			text-transform: uppercase;
			font-size: 12px;
			color: gray;
			line-height: 1.8;
			font-weight: 400;
		}

		&-subtitle {
			font-size: 12px;
			line-height: 1.8;
			font-weight: 400;
			color: #ffffffcc;
		}
	}

	&__bot {
		.container {
			display: flex;
			align-items: center;
			justify-content: flex-start;
		}
	}

	&__nav {
		display: flex;
		align-content: center;
		justify-content: center;
		width: max-content;

		&-btn {
			padding: 16px;
			font-weight: 500;
			font-size: 14px;
			transition: background-color 0.3s;
			background-color: white;

			&.active {
				color: white;
			}

			&.active,
			&:hover {
				background-color: #f79f24;
			}
		}
	}
}


.nav {
	&__open {
		display: none;
		justify-content: center;
		align-items: center;
		width: 40px;
		height: 40px;
		cursor: pointer;

		@media (max-width: 768px) {
			display: flex;
		}

		&-btn {
			display: flex;
			align-items: center;
			justify-content: center;

			.btn-elem {
				position: relative;
				width: 30px;
				height: 2.5px;
				border-radius: 10px;
				background: white;
				transition: transform 0.2s linear, top 0.2s linear 0.2s;

				&::before {
					position: absolute;
					content: "";
					display: block;
					width: 30px;
					height: 2.5px;
					border-radius: 10px;
					top: -8px;
					background: white;
					transition: transform 0.2s linear, top 0.2s linear 0.2s;
				}

				&::after {
					position: absolute;
					content: "";
					display: block;
					width: 30px;
					height: 2.5px;
					border-radius: 10px;
					top: 8px;
					background: white;
					transition: transform 0.2s linear, top 0.2s linear 0.2s;
				}
			}
		}
	}

	&__exit {
		display: none;
		justify-content: center;
		align-items: center;
		width: 40px;
		height: 40px;
		cursor: pointer;
		position: absolute;
		right: 15px;
		top: 20px;

		@media (max-width: 768px) {
			display: flex;
		}

		&-btn {
			display: flex;
			align-items: center;
			justify-content: center;

			.btn-elem {
				position: relative;
				width: 30px;
				height: 2.5px;
				border-radius: 10px;
				background: transparent;

				&::before {
					position: absolute;
					content: "";
					display: block;
					width: 30px;
					height: 2.5px;
					border-radius: 10px;
					transform: rotate(45deg);
					top: 0;
					background: white;
				}

				&::after {
					position: absolute;
					content: "";
					display: block;
					width: 30px;
					height: 2.5px;
					border-radius: 10px;
					background: white;
					transform: rotate(-45deg);
					top: 0;
				}
			}
		}
	}
}
</style>
