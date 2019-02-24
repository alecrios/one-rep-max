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
@font-face {
	font-family: 'Roboto';
	font-style: normal;
	font-weight: 400;
	src:
		local('Roboto'),
		local('Roboto-Regular'),
		url('./assets/fonts/roboto-v18-latin-regular.woff2') format('woff2'),
		url('./assets/fonts/roboto-v18-latin-regular.woff') format('woff');
}

@font-face {
	font-family: 'Roboto';
	font-style: normal;
	font-weight: 500;
	src:
		local('Roboto Medium'),
		local('Roboto-Medium'),
		url('./assets/fonts/roboto-v18-latin-500.woff2') format('woff2'),
		url('./assets/fonts/roboto-v18-latin-500.woff') format('woff');
}

:root {
	--box-shadow-focus: 0 0 0 .125rem hsla(220, 100%, 75%, .5);
}

html {
	font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
	background-color: rgb(36, 39, 49);
}

::-moz-focus-inner {
	border: 0;
}
.js-focus-visible :focus {
	outline: none;
	box-shadow: var(--box-shadow-focus);
}
.js-focus-visible :focus:not([data-focus-visible-added]) {
	box-shadow: none;
}
</style>
