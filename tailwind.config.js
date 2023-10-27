/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./*.{vue,js,ts,jsx,tsx}",
		"./components/**/*.{vue,js,ts,jsx,tsx}",
		"./layouts/**/*.{vue,js,ts,jsx,tsx}",
		"./pages/**/*.{vue,js,ts,jsx,tsx}",
		"./plugins/**/*.{js,ts}",
	],
	// Toggle dark-mode based on data-mode="dark"
	// darkMode: [
	// 	'class', '[data-mode="dark"]'
	// ],
	theme: {
		extend: {},
	},
	plugins: [],
	prefix: 'tw-',
}
