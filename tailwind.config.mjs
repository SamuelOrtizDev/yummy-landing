/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				red: '#FF3C35',
				green: '#29D884',
				yellow: '#EAA643',
				white: '#FFFFFF',
				blue: '#3974E8'
			}
		},
	},
	plugins: [],
}
