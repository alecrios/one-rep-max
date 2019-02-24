<template>
	<div class="parameter-input">
		<label class="parameter-input__label" :for="id">
			{{ name }}
			<span class="parameter-input__error" v-if="error">Invalid</span>
		</label>

		<input
			class="parameter-input__input"
			:id="id"
			type="number"
			placeholder="0"
			min="0"
			:max="max"
			:step="step"
			:value="value"
			@input="$emit('input', $event.target.value)"
		>
	</div>
</template>

<script>
export default {
	name: 'ParameterInput',
	props: ['name', 'max', 'step', 'value', 'error'],
	computed: {
		id() {
			const kebabName = this.name.replace(/\W+/g, '-').toLowerCase();
			return `${kebabName}-parameter`;
		},
	},
};
</script>

<style scoped>
.parameter-input__label {
	display: block;
	width: 100%;
	font-size: .75rem;
	font-weight: 500;
	letter-spacing: .0625rem;
	text-transform: uppercase;
	color: rgba(255, 255, 255, .75);
	margin-bottom: .75rem;
}

.parameter-input__error {
	font-size: .75rem;
	font-style: italic;
	font-weight: 500;
	letter-spacing: .03125rem;
	color: rgba(191, 59, 59, 1);
	text-transform: none;
}

.parameter-input__input {
	display: block;
	width: 100%;
	font-size: 1rem;
	line-height: 1.5rem;
	background-color: rgba(60, 63, 69, 1);
	border-top: .125rem solid rgba(52, 55, 61, 1);
	border-bottom: .125rem solid rgba(66, 69, 75, 1);
	color: rgba(255, 255, 255, .75);
	border-radius: .25rem;
	padding: .5rem .75rem;
}
</style>
