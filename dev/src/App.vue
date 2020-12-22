<template>
	<div id="app">
		<main>
			<fade-transition :duration="250" mode="out-in" origin="center">
				<router-view/>
			</fade-transition>
		</main>
	</div>
</template>
<script>

import { FadeTransition } from "vue2-transitions";

	export default {
		components: {
			FadeTransition
		}
	};

</script>

<style>

	main {
		overflow: initial !important;
	}

	h1 {
		font-size: 28px !important;
	}

	h2 {
		font-size: 26px;
		line-height: 26px;
	}

	h3 {
		font-size: 24px;
		line-height: 24px;
	}

	h4 {
		font-size: 22px;
		line-height: 22px;
	}

	p {
		font-size: 14px;
		line-height: 24px;
	}

</style>
