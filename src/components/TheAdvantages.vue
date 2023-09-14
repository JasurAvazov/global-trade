<template>
	<section class="our-advantages">
		<div class="container">
			<div class="advantage">
				<div class="circle">
					<!-- Вставьте свою иконку сюда -->
					<img src="your-icon.png" alt="Иконка" />
				</div>
				<h3 class="advantage-title">Достоинство 1</h3>
				<p class="advantage-text">Описание достоинства 1 здесь.</p>
			</div>

			<div class="advantage">
				<div class="circle">
					<!-- Вставьте свою иконку сюда -->
					<img src="your-icon.png" alt="Иконка" />
				</div>
				<h3 class="advantage-title">Достоинство 2</h3>
				<p class="advantage-text">Описание достоинства 2 здесь.</p>
			</div>

			<div class="advantage">
				<div class="circle">
					<!-- Вставьте свою иконку сюда -->
					<img src="your-icon.png" alt="Иконка" />
				</div>
				<h3 class="advantage-title">Достоинство 3</h3>
				<p class="advantage-text">Описание достоинства 3 здесь.</p>
			</div>
		</div>
	</section>
</template>

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
