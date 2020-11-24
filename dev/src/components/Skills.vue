<template>
	<div class="skills">
		<h2 class="skills__title">
			Most related skills
		</h2>
		<div class="skills__container">
			<div class="skills__item" v-for="(data, index) in skills" :key="index">
				<p class="skills__description">
					{{ data.title }}
				</p>
				<b-progress :striped="data.striped"
				            :value="data.value"
				            :variant="data.variant">
				</b-progress>
			</div>
		</div>
	</div>
</template>

<script>

	export default {
		name: "Skills",
		data:() => {
			return {
				skills: [
					{ title: 'HTML5', value: 90, variant: 'html', striped: 'striped' },
					{ title: 'Pug (formerly Jade)', value: 90, variant: 'html', striped: 'striped' },
					{ title: 'JavaScript (es5, es6, es7, es8)', value: 70, variant: 'js', striped: 'striped' },
					{ title: 'CSS3 (CSS Grid / Flexbox)', value: 90, variant: 'css', striped: 'striped' },
					{ title: 'BEM, SMACSS, OOCSS', value: 90, variant: 'css', striped: 'striped' },
					{ title: 'SASS/SCSS', value: 90, variant: 'css', striped: 'striped' },
					{ title: 'Vue.js (Vuex, Vue Router)', value: 90, variant: 'vue', striped: 'striped' },
					{ title: 'Nuxt.js', value: 70, variant: 'vue', striped: 'striped' },
					{ title: 'TypeScript', value: 60, variant: 'primary', striped: 'striped' },
					{ title: 'Webpack', value: 70, variant: 'primary', striped: 'striped' },
					{ title: 'Gulp', value: 70, variant: 'primary', striped: 'striped' },
					{ title: 'Avocode, Figma, Photoshop', value: 90, variant: 'primary', striped: 'striped' },
					{ title: 'Firebase', value: 90, variant: 'primary', striped: 'striped' },
					{ title: 'Git, Github', value: 70, variant: 'dark', striped: 'striped' },
				]
			}
		}
	}

</script>

<style lang="scss" scoped>

	@import "src/assets/scss/utils/mixins";

	.skills {
		padding: 20px 0;

		&__title {
			margin: 0 0 30px 0;
		}

		&__description {
			margin: 0 0 4px 0;
		}

		&__container {
			display: grid;
			grid-gap: 20px;
			grid-template-columns: repeat(3, 1fr);
			@include mq(desktop, max) {
				grid-template-columns: repeat(2, 1fr);
			}
			@include mq(tablet-small, max) {
				grid-template-columns: repeat(1, 1fr);
			}
		}
	}

</style>
