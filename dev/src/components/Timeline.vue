<template>

	<div class="timeline">
		<h2 class="timeline__title">
			Timeline
		</h2>
		<div class="timeline__main-container">
			<div class="timeline__container timeline__left">
				<div class="timeline__content">
					<h2 class="timeline__year">Feb 2020 - Present</h2>
					<p class="timeline__position">Front-end developer</p>
					<div class="timeline__company">
						<img class="timeline__icon" src="img/freelancer-icon.jpg" alt="icon">
						<p class="timeline__description">Self-employed. Freelance</p>
					</div>
					<p class="timeline__description">Kyiv, Kyiv City, Ukraine</p>
				</div>
			</div>
			<div class="timeline__container timeline__right">
				<div class="timeline__content">
					<h2 class="timeline__year">Nov 2019 - Feb 2020</h2>
					<p class="timeline__position">Front-end developer</p>
					<div class="timeline__company">
						<img class="timeline__icon" src="img/talkable-icon.jpg" alt="icon">
						<p class="timeline__description">Talkable. Contractor</p>
					</div>
					<p class="timeline__description">Kyiv, Kyiv City, Ukraine</p>
				</div>
			</div>
			<div class="timeline__container timeline__left">
				<div class="timeline__content">
					<h2 class="timeline__year">2018 - Nov 2019 </h2>
					<p class="timeline__position">Front-end developer</p>
					<div class="timeline__company">
						<img class="timeline__icon" src="img/fl.ru-icon.jpg" alt="icon">
						<p class="timeline__description">Self-employed. Freelance</p>
					</div>

					<p class="timeline__description">Kyiv, Kyiv City, Ukraine</p>
				</div>
			</div>
		</div>
	</div>

</template>

<script>

// Component options

	export default {
		name: "Timeline"
	}

</script>

<style lang="scss" scoped>

// Imports

@import "src/assets/styles/utils/mixins";
@import "src/assets/styles/utils/brakepoints";

// Timeline styles

.timeline {
	padding: 10px 0 10px 0;
	position: relative;
	max-width: 920px;
	margin: 0 auto;

	&__title {
		margin: 0 0 30px 0;
	}

	&__position {
		font-size: 20px;
		font-weight: 300;
		margin: 0 0 0 0;
	}

	&__description {
		font-size: 16px;
		margin: 0 0 0 0;
	}

	&__main-container {
		position: relative;
		&::after {
			content: '';
			position: absolute;
			width: 8px;
			background-color: #ebedee !important;
			top: 0;
			bottom: 0;
			left: 50%;
			margin-left: -3px;
			border-radius: 3px;
		}
		@include mq(tablet, max) {
			&::after {
				left: 0;
			}
		}
	}

	&__container {
		position: relative;
		background-color: inherit;
		width: 50%;
		@include mq(tablet, max) {
			width: 100%;
			&::before {
				left: 60px;
				border: medium solid white;
				border-width: 10px 10px 10px 0;
				border-color: transparent white transparent transparent;
			}
		}
	}

	&__left {
		left: 0;
	}

	&__right {
		left: 50%;
		@include mq(tablet, max) {
			left: 0;
		}
	}

	&__content {
		padding: 20px 30px 20px 30px;
		background-color: white;
		position: relative;
		border-radius: 6px;
		box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
		@include mq(tablet, max) {
			margin: 20px 0;
		}
	}

	&__company {
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}

	&__icon {
		height: 24px;
		width: 24px;
		margin: 0 10px 0 0;
	}
}

</style>
