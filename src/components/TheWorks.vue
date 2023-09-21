<template>
	<div class="works" id="works">
		<div class="container">
			<p class="subtitle">Работы</p>
			<h1 class="title">Работы</h1>
			<div class="cards">
				<div class="card">
					<img
						src="../assets/img/hero.jpeg"
						alt=""
						draggable="false"
					/>
					<div class="card-inner">
						<h4 class="card-title text-anim">dsadsad</h4>
						<p class="card-subtitle text-anim">dsadsadasd</p>
					</div>
				</div>
				<div class="card">
					<img
						src="../assets/img/hero.jpeg"
						alt=""
						draggable="false"
					/>
					<div class="card-inner">
						<h4 class="card-title text-anim">dsadsad</h4>
						<p class="card-subtitle text-anim">dsadsadasd</p>
					</div>
				</div>
				<div class="card">
					<img
						src="../assets/img/hero.jpeg"
						alt=""
						draggable="false"
					/>
					<div class="card-inner">
						<h4 class="card-title text-anim">dsadsad</h4>
						<p class="card-subtitle text-anim">dsadsadasd</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script></script>

<style lang="scss" scoped>
.works {
}
.container {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: 100px 15px;
}
.cards {
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	gap: 10px;
    flex-wrap: wrap;
}
.title {
	font-size: 24px;
	font-weight: 700;
	line-height: 1.5;
	color: rgba(0, 0, 0, 0.8);
	margin-bottom: 56px;
}
.subtitle {
	font-size: 12px;
	display: block;
	font-weight: 700;
	color: #f79f24;
	text-transform: uppercase;
	letter-spacing: 2px;
}
.card {
	width: calc(100% / 3 - 10px);
	height: 240px;
	position: relative;
	background-color: red;
	&:hover {
		.card-inner {
			background-color: rgba(0, 0, 0, 0.329);
		}
		.text-anim {
			transform: translateY(0);
			opacity: 1;
		}
	}
	&-title {
		color: white;
		font-weight: 500;
		font-size: 18px;
		transform: translateY(100%);
	}
	&-subtitle {
		color: white;
		font-weight: 400;
		font-size: 16px;
	}
	.text-anim {
		transform: translateY(100%);
		opacity: 0;
        transition: transform .2s, opacity .2s;
	}
	&-inner {
		position: relative;
		background-color: rgba(0, 0, 0, 0);
		width: 100%;
		height: 100%;
		padding: 10px;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		transition: background-color 0.2s;
	}
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		position: absolute;
		top: 0;
		left: 0;
	}
}
</style>
