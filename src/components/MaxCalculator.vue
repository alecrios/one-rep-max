<template>
	<main class="max-calculator">
		<section class="section">
			<div class="parameters">
				<div class="parameters__list panel">
					<div class="parameters__item">
						<ParameterInput
							name="Reps"
							:max="maxReps"
							:step="1"
							v-model="inputReps"
							:error="showRepsError"
						/>
					</div>

					<div class="parameters__item">
						<ParameterInput
							name="Weight"
							:max="maxWeight"
							:step="increment"
							v-model="inputWeight"
							:error="showWeightError"
						/>
					</div>
				</div>
			</div>

			<div class="settings">
				<button
					role="button"
					type="button"
					:class="{
						'settings__toggle': true,
						'settings__toggle--active': showSettings,
						'panel': true,
					}"
					@click="showSettings = !showSettings"
					:aria-expanded="showSettings ? 'true' : 'false'"
				>
					Customize Settings
				</button>

				<div class="settings__list panel" id="settings-list" v-if="showSettings">
					<div class="settings__item">
						<SettingSelect name="Formula" :options="formulas" v-model="formula"/>
					</div>

					<div class="settings__item">
						<SettingSelect name="Rounding" :options="roundings" v-model="rounding"/>
					</div>

					<div class="settings__item">
						<SettingSelect name="Increment" :options="increments" v-model="increment"/>
					</div>

					<div class="settings__item">
						<SettingSelect name="Unit" :options="units" v-model="unit"/>
					</div>
				</div>
			</div>
		</section>

		<section class="section">
			<table class="table panel">
				<thead class="table__head">
					<tr class="table__row">
						<th class="table__heading">Reps</th>
						<th class="table__heading">Est. Max</th>
						<th class="table__heading">% 1RM</th>
					</tr>
				</thead>

				<tbody class="table__body">
					<tr
						v-for="n in 10"
						:key="n"
						:class="{
							'table__row': 'true',
							'table__row--active': n === reps,
						}"
					>
						<td class="table__cell">{{ n }}</td>
						<td class="table__cell">{{ nRepMax(n) }} {{ unit }}</td>
						<td class="table__cell">{{ percentOneRepMax(n) }}%</td>
					</tr>
				</tbody>
			</table>
		</section>
	</main>
</template>

<script>
import ParameterInput from './ParameterInput.vue';
import SettingSelect from './SettingSelect.vue';
import formulas from '../lib/formulas';
import roundings from '../lib/roundings';
import increments from '../lib/increments';
import units from '../lib/units';

export default {
	name: 'MaxCalculator',
	components: {
		ParameterInput,
		SettingSelect,
	},
	data() {
		return {
			inputReps: '',
			inputWeight: '',

			formulas: Object.keys(formulas).sort(),
			roundings: Object.keys(roundings).sort(),
			increments: Object.keys(increments).sort(),
			units: units.sort(),

			maxReps: 20,
			maxWeight: 2000,

			showSettings: false,
		};
	},
	computed: {
		formula: {
			get() {
				return this.$store.state.formula;
			},
			set(formula) {
				this.$store.commit('updateFormula', formula);
			},
		},
		rounding: {
			get() {
				return this.$store.state.rounding;
			},
			set(rounding) {
				this.$store.commit('updateRounding', rounding);
			},
		},
		increment: {
			get() {
				return this.$store.state.increment;
			},
			set(increment) {
				this.$store.commit('updateIncrement', increment);
			},
		},
		unit: {
			get() {
				return this.$store.state.unit;
			},
			set(unit) {
				this.$store.commit('updateUnit', unit);
			},
		},
		reps() {
			return Number(this.inputReps);
		},
		weight() {
			return Number(this.inputWeight);
		},
		repsIsValid() {
			return (
				!Number.isNaN(this.reps)
				&& Number.isInteger(this.reps)
				&& this.reps > 0
				&& this.reps <= this.maxReps
			);
		},
		weightIsValid() {
			return (
				!Number.isNaN(this.weight)
				&& this.weight > 0
				&& this.weight <= this.maxWeight
			);
		},
		showRepsError() {
			return !this.repsIsValid && this.reps !== 0;
		},
		showWeightError() {
			return !this.weightIsValid && this.weight !== 0;
		},
		oneRepMax() {
			if (this.reps === 1) return this.weight;

			const result = formulas[this.formula].getMax(this.reps, this.weight);

			return this.round(result);
		},
	},
	methods: {
		round(number) {
			const rounding = roundings[this.rounding];
			const increment = increments[this.increment];

			return rounding(number / increment) * increment;
		},
		nRepMax(n) {
			if (!this.repsIsValid || !this.weightIsValid) return 0;

			if (n === 1) return this.oneRepMax;

			if (n === this.reps) return this.weight;

			const result = formulas[this.formula].getWeight(n, this.oneRepMax);

			return this.round(result);
		},
		percentOneRepMax(n) {
			if (!this.repsIsValid || !this.weightIsValid) return 0;

			const result = this.nRepMax(n) / this.oneRepMax * 100;

			return result.toFixed(1);
		},
	},
};
</script>

<style scoped>
.max-calculator {
	width: 100%;
	max-width: 24rem;
	margin: 0 auto;
	padding: 0 1.5rem;
}

.panel {
	border-top: .125rem solid rgb(51, 55, 65);
	border-bottom: .125rem solid rgb(39, 41, 49);
}

.section {
	background-color: rgb(43, 47, 57);
	border-radius: .25rem;
	box-shadow: 0 0.25rem 0.5rem 0 rgba(0, 0, 0, 0.25);
	overflow: hidden;
}

.section + .section {
	margin-top: 1.5rem;
}

.table {
	width: 100%;
	padding: .75rem;
	border-collapse: separate;
}

.table__row {
	border-collapse: separate;
}

.table__row--active {
	background-color: rgba(255, 255, 255, .03125);
}

.table__heading,
.table__cell {
	padding: .75rem;
	text-align: right;
	font-size: 1rem;
	color: rgba(255, 255, 255, .75);
	white-space: nowrap;
	border-collapse: separate;
}

.table__heading {
	font-weight: 500;
}

.table__cell:first-child {
	width: 1px;
}

.parameters__list {
	display: flex;
	padding: .75rem;
}

.parameters__item {
	flex: none;
	width: 50%;
	padding: .75rem;
}

.settings__toggle {
	width: 100%;
	padding: .75rem;
	font-size: .75rem;
	font-weight: 500;
	letter-spacing: .03125rem;
	color: rgba(255, 255, 255, .5);
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
}

.settings__toggle:focus {
	box-shadow: var(--box-shadow-focus) inset;
}

.settings__toggle::after {
	content: '';
	background-image: url('../assets/arrow.svg');
	background-repeat: no-repeat;
	background-size: 1rem 1rem;
	width: 1rem;
	height: 1rem;
	transform: rotate(-90deg);
}

.settings__toggle--active::after {
	transform: rotate(0deg);
}

.settings__list {
	padding: .75rem;
}

.settings__item {
	padding: .75rem;
}
</style>
