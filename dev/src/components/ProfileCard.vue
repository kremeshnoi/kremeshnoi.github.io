<template>

	<card class="card-profile profile" no-body shadow>
		<div class="row justify-content-center">
			<div class="col-lg-3 order-lg-2">
				<div class="card-profile-image profile__image">
					<a href="/#">
						<img v-lazy="'img/photo.jpg'" class="profile__circle rounded-circle">
					</a>
				</div>
			</div>
		</div>

		<div class="text-center">
			<h1 class="profile__title"> Alexander Kremeshnoi</h1>
			<div class="profile__description font-italic"><i class="ni location_pin"></i> 27 y.o. from Kyiv, Ukraine</div>
			<div class="profile__description"><i class="ni business_briefcase-24"></i> Front-end developer</div>
			<div class="profile__description row justify-content-center">

				<div class="col-lg-9">
					<a class="profile__nav-item" href="#about"> About </a> |
					<a class="profile__nav-item" href="#skills"> Skills </a> |
					<a class="profile__nav-item" href="#timeline"> Timeline </a>
					<a class="profile__nav-item" href="#projects"> Projects </a>
				</div>
			</div>
			<div class="profile__description profile__soc">
				<a
						class="profile__link"
						href="https://github.com/kremeshnoi/"
						target="_blank">
					<font-awesome-icon :icon="['fab', 'github']" class="profile__icon"/>
				</a>

				<a
						class="profile__link"
						href="https://www.linkedin.com/in/alexander-kremeshnoi/"
						target="_blank">
					<font-awesome-icon :icon="['fab', 'linkedin-in']" class="profile__icon"/>
				</a>
			</div>
		</div>

		<div class="border-top text-center">
			<div class="row justify-content-center">
				<div class="profile__footer col-lg-9">
					<a
							href="https://kremeshnoi.github.io/docs/cv.pdf"
							target="_blank">Show CV</a>
				</div>
			</div>
		</div>
	</card>
</template>

<script>

// Imports

import Card from "@/components/Card";

// Component options

export default {
	name: "ProfileCard",
	components: {
		Card
	}
}

</script>

<style lang="scss" scoped>

// Imports

@import "../assets/styles/utils/mixins";

// Profile styles

.profile {
	width: 340px;
	position: fixed;
	top: 120px;
	margin-top: -150px;
	margin: 0 !important;
	@include mq(tablet-mid, max) {
		position: static;
		width: 100%;
		top: 0;
		margin: 60px 0 16px 0 !important;
	}

	&__nav-item {
		margin: 4px
	}

	&__image {
		margin-bottom: 100px;
		position: relative;

		img {
			max-width: 180px;
			border-radius: 4px;
			transform: translate(-50%, -30%);
			position: absolute;
			left: 50%;
			transition: 1s;
			box-shadow: 0 .5rem 1rem rgba(0,0,0,.15);

			&:hover {
				transform: translate(-50%, -33%);
			}
		}
	}

	&__circle {
		max-width: 200px !important;

		&:hover {
			transform: translate(-50%, -30%) !important;
		}
	}

	&__title {
		font-size: 28px;
		max-width: 240px;
		margin: 60px auto 20px auto;
	}

	&__description {
		margin: 0 0 16px 0;
	}

	&__link {
		color: inherit;

		&:first-of-type {
			&:hover {
				color: #25292e;
			}
		}

		&:last-of-type {
			&:hover {
				color: #2767c5;
			}
		}
	}

	&__soc {
		margin: 20px 0 20px 0 !important;
	}

	&__icon {
		margin: 0 10px;
		font-size: 24px;
	}

	&__footer {
		padding: 20px 0 20px 0;
	}
}

</style>
