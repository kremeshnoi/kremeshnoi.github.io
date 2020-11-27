<template>
	<div class="profile-page">
		<ProfileCard/>
		<section class="main section-skew">
			<About/>
			<Skills/>
			<Projects/>
		</section>
	</div>
</template>

<script>

	import About from "@/components/About";
	import Skills from "@/components/Skills";
	import Projects from "@/components/Projects";
	import ProfileCard from "@/components/ProfileCard";

	export default {
		components: {
			About,
			Skills,
			Projects,
			ProfileCard
		},
		data() {
			return {
				striped: true
			}
		}
	};

</script>

<style lang="scss">

	@import "../assets/scss/skills_backgrounds";
	@import "src/assets/scss/utils/mixins";

	.main {
		max-width: calc(100% - 400px);
		margin-left: auto;
		margin-right: 0;
		@include mq(tablet-mid, max) {
			max-width: 100%;
		}
	}

	.profile-page {
		display: grid;
		align-items: flex-start;
		justify-content: flex-start;
		max-width: 1400px !important;
		width: 100%;
		margin: 40px auto 40px auto!important;
		padding: 0 40px;
	}

</style>
