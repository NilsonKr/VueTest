module.exports = {
	purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			minHeight: {
				table: '500px',
			},
			height: {
				cell: '80px',
				table: '700px',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
