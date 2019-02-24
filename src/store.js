import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
	plugins: [
		createPersistedState({key: 'store'}),
	],
	state: {
		formula: 'Brzycki',
		rounding: 'Nearest',
		increment: '5',
		unit: 'lb',
	},
	mutations: {
		updateFormula(state, formula) {
			state.formula = formula;
		},
		updateRounding(state, rounding) {
			state.rounding = rounding;
		},
		updateIncrement(state, increment) {
			state.increment = increment;
		},
		updateUnit(state, unit) {
			state.unit = unit;
		},
	},
});
