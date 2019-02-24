<template>
	<div id="app">
		<Header/>
		<MaxCalculator/>
		<Footer/>
	</div>
</template>

<script>
import Header from './components/Header.vue';
import MaxCalculator from './components/MaxCalculator.vue';
import Footer from './components/Footer.vue';

import 'core-reset/core-reset.css';
import 'focus-visible';

export default {
	name: 'app',
	components: {
		Header,
		MaxCalculator,
		Footer,
	},
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:400,500');

html {
	font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
	background-color: rgb(36, 39, 49);
}

::-moz-focus-inner {
	border: 0;
}

.js-focus-visible :focus:not([data-focus-visible-added]) {
	outline: none;
}
</style>
