<template>

	<div id="about" class="about">
		<h2 class="about__title">
			About me
		</h2>

		<p class="about__description">
			I am currently freelancing as a front-end developer, which brings me great pleasure. I’m not afraid
			of new challenges and am always ready to develop my professional and human qualities. Outside of work, I
			enjoy spending time with friends and pursuing a few hobbies. Check out my work and feel free to get in
			touch with me, I’m always happy to help!
		</p>
	</div>

</template>

<script>

// Component options

export default {
	name: "About"
}

</script>

<style lang="scss" scoped>

// About styles

.about {
	padding: 15px 0 15px 0;

	&__title {
		margin: 0 0 30px 0;
	}

	&__description {
		margin: 0;
		font-size: 18px;
		line-height: 28px;
	}
}

</style>
