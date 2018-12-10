<template>
	<header class="header">
		<img class="header__logo" src="../assets/logo.svg" alt="One Rep Max">
	</header>
</template>

<script>
export default {
	name: 'Header',
};
</script>

<style scoped>
.header {
	display: flex;
	justify-content: center;
	padding: .75rem;
}

.header__logo {
	width: 144px;
	height: 36px;
}
</style>
