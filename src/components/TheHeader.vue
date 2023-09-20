<template>
	<header class="header">
		<div class="header__top">
			<div class="container">
				<a class="logo" href="#">
					<p>GGTrade<span>.</span></p>
				</a>
				<div class="header__features">
					<div class="header__about">
						<div class="header__about-item">
							<div class="header__about-icon">
								<img
									src="../assets/img/icons/location-arrow.svg"
									alt=""
									draggable="false"
								/>
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
								<img
									src="../assets/img/icons/location-arrow.svg"
									alt=""
									draggable="false"
								/>
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
								<img
									src="../assets/img/icons/facebook.svg"
									alt=""
									draggable="false"
								/>
							</a>
						</li>
						<li>
							<a href="#">
								<img
									src="../assets/img/icons/twitter.svg"
									alt=""
									draggable="false"
								/>
							</a>
						</li>
						<li>
							<a href="#">
								<img
									src="../assets/img/icons/instagram.svg"
									alt=""
									draggable="false"
								/>
							</a>
						</li>
						<li>
							<a href="#">
								<img
									src="../assets/img/icons/dribbble.svg"
									alt=""
									draggable="false"
								/>
							</a>
						</li>
					</ul>
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
	},
};
</script>

<style lang="scss" scoped>
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
		&-item {
			display: flex;
			align-items: center;
			gap: 15px;
			min-width: 220px;
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
</style>
