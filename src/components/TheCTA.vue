<template>
	<section class="cta">
		<div class="cta-content">
			<h2 class="cta-title">Оптимизируйте свой бизнес с нами!</h2>
			<p class="cta-description">
				Мы предлагаем лучшие решения по закупкам из Китая и снабжению
				вашего бизнеса. Узнайте, как мы можем помочь вам достичь успеха.
			</p>
			<a href="#" class="cta-button">Свяжитесь с нами</a>
		</div>
	</section>
</template>

<style lang="scss" scoped>
.cta {
	background-color: #f8f9fd;
	padding: 60px 0;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 30px;
}

.cta-content {
	text-align: center;
}

.cta-title {
	font-size: 24px;
	font-weight: bold;
	margin-bottom: 20px;
}

.cta-description {
	font-size: 16px;
	margin-bottom: 60px;
}

.cta-button {
	background-color: #f79f24;
	color: white;
	font-size: 16px;
	padding: 15px 30px;
	border-radius: 5px;
	text-decoration: none;
	transition: background-color 0.3s, color 0.3s;
    border: 1px solid #f79f24;
	font-weight: 600;
	&:hover {
		background-color: white;
		color: #f79f24;
	}
}
</style>
