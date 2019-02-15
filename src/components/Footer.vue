<template>
	<footer class="footer">
		<div class="footer__text">
			<div class="footer__item">
				&copy; {{ new Date().getFullYear() }}
				<a href="https://alecrios.com" target="_blank" rel="noopener">Alec Rios</a>
			</div>

			<div class="footer__item">
				<a href="https://alecrios.com/contact" target="_blank" rel="noopener">Send Feedback</a>
			</div>
		</div>
	</footer>
</template>

<script>
export default {
	name: 'Footer',
};
</script>

<style scoped>
.footer {
	padding: 1.5rem;
}

.footer__text {
	display: flex;
	justify-content: center;
}

.footer__item {
	font-size: .75rem;
	font-weight: 400;
	letter-spacing: .03125rem;
	color: rgba(255, 255, 255, .5);
}

.footer__item + .footer__item {
	margin-left: 1.5rem;
}

.footer__item a:hover {
	text-decoration: underline;
}
</style>
