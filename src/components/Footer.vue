<template>
	<footer class="footer">
		<p class="footer__text">
			Copyright &copy; {{ new Date().getFullYear() }}
			<a href="http://alecrios.com">Alec Rios</a>
		</p>
	</footer>
</template>

<script>
export default {
	name: 'Footer',
};
</script>

<style scoped>
.footer {
	text-align: center;
	padding: 1.5rem;
}

.footer__text {
	font-size: .75rem;
	font-weight: 400;
	letter-spacing: .03125rem;
	color: rgba(255, 255, 255, .5);
}
</style>
