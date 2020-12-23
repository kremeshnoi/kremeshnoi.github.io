<template>

	<div id="projects" class="projects">
		<h2 class="projects__title">
			My projects
		</h2>

		<div class="projects__container">
			<b-card
					v-for="(projectsData, projectsIndex) in projects"
					:key="projectsIndex"
					:img-src="projectsData.img"
					:title="projectsData.title"
					class="projects__card"
					img-alt="Image"
					img-top
					style="max-width: 20rem;"
					tag="article">

				<b-card-text class="font-weight-400">
					{{ projectsData.description }}
				</b-card-text>

				<b-card-text v-if="projectsData.subtitle">
					<p class="case__links-title font-weight-400" v-html="projectsData.subtitle"></p>

					<div class="case__links">
						<a
								v-for="(caseData, caseIndex) in projectsData.links"
								:key="caseIndex"
								:href="caseData.link"
								class="case__link"
								target="_blank"> {{ caseData.title }},
						</a>
					</div>
				</b-card-text>

				<div class="projects__footer">
					<b-card-text>
						<div class="technologies">
							<div class="technologies__container">
								<b-button
										v-for="(technologiesData, technologiesIndex) in projectsData.technologies"
										:key="technologiesIndex"
										class="projects__btn technologies__btn"
										variant="outline-primary"> {{ technologiesData.title }}
								</b-button>
							</div>
						</div>
					</b-card-text>

					<b-button
							:href="projectsData.link"
							class="projects__btn"
							target="_blank"
							variant="primary"> Visit Website
					</b-button>
				</div>
			</b-card>
		</div>
	</div>

</template>

<script>

// Component options

export default {
	name: "Projects",
	data: () => {
		return {
			projects: [
				{
					title: "Talkable",
					description: "Talkable — American product IT-company, the leading referral marketing platform.",
					link: "https://www.talkable.com",
					img: "img/talkable.jpg",
					subtitle: "List of pages i've made",
					links: [
						{title: "Homepage", link: "https://www.talkable.com"},
						{title: "Pricing", link: "https://www.talkable.com/pricing"},
						{title: "Referral Program", link: "https://www.talkable.com/referral_program"},
						{title: "Customer Success", link: "https://www.talkable.com/customer_success"},
						{title: "Case Studies", link: "https://www.talkable.com/case_study"},
						{title: "Whoop Case", link: "https://www.talkable.com/case_study/whoop"},
						{title: "Pura Vida Case", link: "https://www.talkable.com/case_study/pura_vida"},
						{title: "Rhinoshield Case", link: "https://www.talkable.com/case_study/rhinoshield"},
						{title: "Outdoor Case", link: "https://www.talkable.com/case_study/outdoor"},
						{title: "Soko glam Case", link: "https://www.talkable.com/case_study/soko_glam"},
						{title: "Apparel Case", link: "https://www.talkable.com/case_study/apparel"}
					],
					technologies: [
						{title: "Ruby on Rails"},
						{title: "CoffeeScript"},
						{title: "Haml"},
						{title: "OOCSS"},
						{title: "SASS"}
					]
				},
				{
					title: "Otaku Library", description: "Organize your own anime and manga list with this application. " +
							"Inspired by MAL and Shikimori. Using the Jikan API (Unofficial MyAnimeList API).",
					subtitle: "Also available as a showcase at <a href='https://jikan.moe/showcase'>jikan.moe/showcase</a>.",
					link: "https://otaku-library.one", img: "img/otaku-library.jpg",
					technologies: [
						{title: "Vue.js"},
						{title: "Vuex"},
						{title: "Vue-Router"},
						{title: "JavaScript"},
						{title: "Pug"},
						{title: "BEM"},
						{title: "SASS"},
						{title: "Materialize"},
						{title: "Firebase"},
						{title: "Jikan-API"}
					]
				},
				{
					title: "iApple", description: "This website is an online store where you can order any " +
							"accessory for your Apple device through Nova Poshta or regular delivery.",
					link: "https://iapple.in.ua", img: "img/iapple.jpg",
					technologies: [
						{title: "WordPress"},
						{title: "JavaScript"},
						{title: "PHP"},
						{title: "Vanilla CSS"}
					]
				},
				{
					title: "Marta Deco", description: "Landing page written for a textile salon.",
					link: "https://marta-deco.com", img: "img/marta-deco.jpg",
					technologies: [
						{title: "CoffeeScript"},
						{title: "Pug"},
						{title: "Bootstrap"},
						{title: "JavaScript"},
						{title: "JQuery"},
						{title: "SASS"},
						{title: "Webpack"}
					]
				},
				{
					title: "Old Portfolio",
					description: "My old portfolio site, where you can find both pet and production projects.",
					link: "https://kremeshnoi.github.io/outdated",
					img: "img/oldportfolio.jpg",
					technologies: [
						{title: "Vanilla CSS"},
						{title: "JQuery"},
						{title: "Bootstrap"},
						{title: "JavaScript"},
						{title: "Gulp"}
					]
				}
			]
		}
	}
}

</script>

<style lang="scss" scoped>

// Imports

@import "../assets/styles/utils/mixins";

// Projects styles

.projects {
	width: 100%;
	padding: 10px 0;

	&__title {
		margin: 0 0 30px 0;
	}

	&__container {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 8px;
		@include mq(desktop, max) {
			grid-template-columns: repeat(1, 1fr);
		}
	}

	.card-body {
		display: flex;
		flex-direction: column;
	}

	&__footer {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-end;
		height: 100%;
	}

	&__card {
		max-width: 100% !important;
		border: 1px solid #e9e9e9;
	}

	&__btn {
		position: relative;
		text-transform: uppercase;
		transition: all .15s ease;
		will-change: transform;
		letter-spacing: .025em;
		font-size: .875rem;
		display: inline-block;
		font-weight: 600;
		text-align: center;
		white-space: nowrap;
		vertical-align: middle;
		user-select: none;
		border: 1px solid transparent;
		padding: .625rem 1.25rem;
		line-height: 1.5;
		border-radius: .25rem;
		transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
		font-size: 10px;
		color: #fff;
		background-color: #5e72e4;
		border-color: #5e72e4;
		box-shadow: 0 4px 6px rgba(50, 50, 93, .11), 0 1px 3px rgba(0, 0, 0, .08);

		&:hover {
			background-color: #5e72e4;
			transition: 0.2s ease-in-out;
			transform: translateY(-2px);
		}
	}
}

// Technologies styles

.technologies {
	&__container {
		display: flex;
		flex-wrap: wrap;
	}

	&__btn {
		font-size: 10px !important;
		padding: 6px !important;
		margin: 4px;
		color: #5e72e4;
		background-color: transparent;
		background-image: none;
		border: 1px solid #5e72e4;;

		&:hover {
			transform: none !important;
		}
	}
}

// Case styles

.case {
	&__links-title {
		font-weight: 400;
	}
}

</style>
