<template>

	<div class="skills">
		<h2 class="skills__title">
			Most related skills
		</h2>

		<div class="skills__container">
			<div v-for="(dataMainSkills, indexMainSkills) in mainSkills" :key="indexMainSkills" class="skills__item">
				<p class="skills__description font-weight-400">
					{{ dataMainSkills.title }}
				</p>

				<b-progress
						class="skills__progress"
						:striped="dataMainSkills.striped"
						:value="dataMainSkills.value"
						:variant="dataMainSkills.variant">
				</b-progress>
			</div>
		</div>

		<h2 class="skills__title skills__title-worked-with">
			Worked with
		</h2>
		<div class="skills__container">
			<div v-for="(dataWorkedWith, indexWorkedWith) in workedWith" :key="indexWorkedWith" class="skills__item">
				<p class="skills__description font-weight-400">
					{{ dataWorkedWith.title }}
				</p>
				<b-progress
						class="skills__progress"
						:striped="dataWorkedWith.striped"
						:value="dataWorkedWith.value"
						:variant="dataWorkedWith.variant">
				</b-progress>
			</div>
		</div>
	</div>

</template>

<script>

// Component styles

export default {
	name: "Skills",
	data: () => {
		return {
			mainSkills: [
				{title: 'HTML5 (Semantic Elements)', value: 90, variant: 'html', striped: 'striped'},
				{title: 'Pug (formerly Jade)', value: 90, variant: 'html', striped: 'striped'},
				{title: 'JavaScript (es5, es6, es7, es8)', value: 70, variant: 'js', striped: 'striped'},
				{title: 'CSS3 (CSS Grid / Flexbox)', value: 90, variant: 'css', striped: 'striped'},
				{title: 'BEM, SMACSS, OOCSS', value: 90, variant: 'css', striped: 'striped'},
				{title: 'SASS/SCSS', value: 90, variant: 'css', striped: 'striped'},
				{title: 'Vue.js (Vuex, Vue Router)', value: 70, variant: 'vue', striped: 'striped'},
				{title: 'Nuxt.js', value: 50, variant: 'vue', striped: 'striped'},
				{title: 'TypeScript', value: 50, variant: 'primary', striped: 'striped'},
				{title: 'Git, Github', value: 70, variant: 'dark', striped: 'striped'},
			],
			workedWith: [
				{title: 'Haml', value: 70, variant: 'primary', striped: 'striped'},
				{title: 'CoffeeScript', value: 70, variant: 'primary', striped: 'striped'},
				{title: 'Ruby on Rails', value: 50, variant: 'primary', striped: 'striped'},
				{title: 'Node.js', value: 50, variant: 'primary', striped: 'striped'},
				{title: 'Express.js', value: 50, variant: 'primary', striped: 'striped'},
				{title: 'MongoDB', value: 50, variant: 'primary', striped: 'striped'},
				{title: 'Mongoose ODM', value: 50, variant: 'primary', striped: 'striped'},
				{title: 'SQLite', value: 50, variant: 'primary', striped: 'striped'},
				{title: 'Firebase (BaaS)', value: 50, variant: 'primary', striped: 'striped'},
				{title: 'Webpack', value: 70, variant: 'primary', striped: 'striped'},
				{title: 'Gulp', value: 70, variant: 'primary', striped: 'striped'},
				{title: 'jQuery', value: 90, variant: 'primary', striped: 'striped'},
				{title: 'Avocode, Figma, Photoshop', value: 90, variant: 'primary', striped: 'striped'},
				{title: 'Materialize', value: 90, variant: 'primary', striped: 'striped'},
				{title: 'Bootstrap', value: 90, variant: 'primary', striped: 'striped'},
				{title: 'BootstrapVue', value: 90, variant: 'primary', striped: 'striped'},
				{title: 'Vuetify', value: 90, variant: 'primary', striped: 'striped'}
			]
		}
	}
}

</script>

<style lang="scss" scoped>

// Imports

@import "../assets/styles/index";
@import "../assets/styles/utils/mixins";

// Skills styles

.skills {
	padding: 10px 0;

	&__title {
		margin: 0 0 30px 0;
	}

	&__title-worked-with {
		padding-top: 20px;
	}

	&__description {
		margin: 0 0 4px 0;
		font-weight: 400;
	}

	&__container {
		display: grid;
		column-gap: 20px;
		grid-template-columns: repeat(3, 1fr);
		@include mq(desktop, max) {
			grid-template-columns: repeat(2, 1fr);
		}
		@include mq(tablet-small, max) {
			grid-template-columns: repeat(1, 1fr);
		}
	}

	&__progress {
		height: 8px;
		margin: 0 0 20px 0;
	}
}

</style>
