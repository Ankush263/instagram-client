/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',

		// Or if using `src` directory:
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {},
		colors: {
			white: '#FFFFFF',
			deepBlue: '#0095F6',
			lightBlue: 'rgba(0, 149, 246, 0.7)',
			lightGray: '#DBDBDB',
			darkGray: '#737373',
			lightBlack: '#00376B',
			violate: '#385185',
			skyBlue: '#0095F6',
		},
	},
	plugins: [],
};
