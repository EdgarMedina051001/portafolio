/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {},
	},
	plugins: [],

	"animation": {
		"text-gradient": "text-gradient 1.5s linear infinite"
	},
	"keyframes": {
		"text-gradient": {
			"to": {
				"backgroundPosition": "200% center"
			}
		}
	}

}

