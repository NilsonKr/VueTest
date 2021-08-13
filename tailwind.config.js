module.exports = {
	purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			minHeight: {
				table: '500px',
				cell: '100px',
			},
			height: {
				cell: '100px',
				table: '750px',
			},
			width: {
				cell: '160px',
			},
			minWidth: {
				table: '1050px',
				cell: '160px',
			},
			gridAutoColumns: {
				cell: '140px',
			},
			gridAutoRows: {
				cell: '80px',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
