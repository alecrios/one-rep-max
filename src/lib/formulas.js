export default {
	'Brzycki': {
		getMax: (r, w) => w * (36 / (37 - r)),
		getWeight: (r, m) => (m * (37 - r)) / 36,
	},
	'Epley': {
		getMax: (r, w) => w * (1 + (r / 30)),
		getWeight: (r, m) => (30 * m) / (30 + r),
	},
	'Lombardi': {
		getMax: (r, w) => w * (r ** 0.10),
		getWeight: (r, m) => m / (r ** 0.10),
	},
	'Mayhew': {
		getMax: (r, w) => (100 * w) / (52.2 + (41.9 * (Math.E ** (-0.055 * r)))),
		getWeight: (r, m) => (m * (52.2 + (41.9 * (Math.E ** (-0.055 * r))))) / 100,
	},
	'McGlothin': {
		getMax: (r, w) => (100 * w) / (101.3 - (2.67123 * r)),
		getWeight: (r, m) => (m * (101.3 - (2.67123 * r))) / 100,
	},
	'O\'Conner': {
		getMax: (r, w) => w * (1 + (r / 40)),
		getWeight: (r, m) => (40 * m) / (40 + r),
	},
	'Wathan': {
		getMax: (r, w) => (100 * w) / (48.8 + (53.8 * (Math.E ** (-0.075 * r)))),
		getWeight: (r, m) => (m * (48.8 + (53.8 * (Math.E ** (-0.075 * r))))) / 100,
	},
};
