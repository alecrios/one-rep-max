<template>
	<div class="setting-select">
		<label class="setting-select__label" :for="id">{{ name }}</label>

		<select
			class="setting-select__select"
			:id="id"
			:value="value"
			@change="$emit('input', $event.target.value)"
		>
			<option v-for="option in options" :key="option" :value="option">
				{{ option }}
			</option>
		</select>
	</div>
</template>

<script>
export default {
	name: 'SettingSelect',
	props: ['name', 'options', 'value'],
	computed: {
		id() {
			const kebabName = this.name.replace(/\W+/g, '-').toLowerCase();
			return `${kebabName}-setting`;
		},
	},
};
</script>

<style scoped>
.setting-select__label {
	display: block;
	width: 100%;
	font-size: .75rem;
	font-weight: 500;
	letter-spacing: .0625rem;
	text-transform: uppercase;
	color: rgba(255, 255, 255, .75);
	margin-bottom: .75rem;
}

.setting-select__select {
	display: block;
	width: 100%;
	font-size: 1rem;
	line-height: 1.5rem;
	color: rgba(255, 255, 255, .75);
	background-color: rgb(57, 63, 77);
	border-top: .125rem solid rgb(61, 69, 85);
	border-bottom: .125rem solid rgb(51, 55, 67);
	padding-top: .4375rem;
	padding-bottom: .5625rem;
	padding-left: .75rem;
	padding-right: 2.25rem;
	box-shadow: 0 .125rem .25rem 0 rgba(0, 0, 0, .5);
	border-radius: .25rem;
	background-image: url("../assets/arrows.svg");
	background-repeat: no-repeat;
	background-position: calc(100% - .75rem) 50%;
}

.setting-select__select:active {
	border-top: .125rem solid rgb(51, 55, 67);
	border-bottom: .125rem solid rgb(61, 69, 85);
	background-position: calc(100% - .75rem) calc(50% + .0625rem);
	padding-top: .5rem;
	padding-bottom: .5rem;
	box-shadow: none;
}
</style>
