<template>

	<div
			:class="[
					{'card-lift--hover': hover},
					{'shadow': shadow},
					{[`shadow-${shadowSize}`]: shadowSize},
					{[`bg-gradient-${gradient}`]: gradient},
					{[`bg-${type}`]: type}]"
			class="card">

		<div v-if="$slots.header" :class="headerClasses" class="card-header">
			<slot name="header"></slot>
		</div>

		<div v-if="!noBody" :class="bodyClasses" class="card-body">
			<slot></slot>
		</div>

		<slot v-if="noBody"></slot>

		<div v-if="$slots.footer" :class="footerClasses" class="card-footer">
			<slot name="footer"></slot>
		</div>

	</div>

</template>

<script>

// Component options

export default {
	name: "card",
	props: {
		type: {
			type: String,
			description: "Card type"
		},
		gradient: {
			type: String,
			description: "Card background gradient type (warning,danger etc)"
		},
		hover: {
			type: Boolean,
			description: "Whether card should move on hover"
		},
		shadow: {
			type: Boolean,
			description: "Whether card has shadow"
		},
		shadowSize: {
			type: String,
			description: "Card shadow size"
		},
		noBody: {
			type: Boolean,
			default: false,
			description: "Whether card should have wrapper body class"
		},
		bodyClasses: {
			type: [String, Object, Array],
			description: "Card body css classes"
		},
		headerClasses: {
			type: [String, Object, Array],
			description: "Card header css classes"
		},
		footerClasses: {
			type: [String, Object, Array],
			description: "Card footer css classes"
		}
	}
};

</script>

<style lang="scss" scoped>

@import "../assets/styles/index";

.card {
	position: relative;
}

.profile-page {
	.card-profile {
		margin-top: -150px;

		.card-profile-image {
			position: relative;
			//min-height: 130px;

			img {
				max-width: 180px;
				border-radius: $border-radius;
				@extend .shadow;
				transform: translate(-50%, -30%);
				position: absolute;
				left: 50%;
				transition: $transition-base;

				&:hover {
					transform: translate(-50%, -33%);
				}
			}
		}

		.card-profile-stats {
			padding: 1rem 0;

			> div {
				text-align: center;
				margin-right: 1rem;
				padding: .875rem;

				&:last-child {
					margin-right: 0;
				}

				.heading {
					font-size: 1.1rem;
					font-weight: bold;
					display: block;
				}

				.description {
					font-size: .875rem;
					color: $gray-500;
				}
			}
		}

		.card-profile-actions {
			padding: .875rem;
		}

		@include media-breakpoint-down(xs) {
			.card-profile-actions {
				margin-top: 110px;
			}
		}

		@include media-breakpoint-between(sm, md) {
			.card-profile-stats {
				margin-top: 30px;
			}
		}
	}
}



</style>
