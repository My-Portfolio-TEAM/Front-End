import flowbite from 'flowbite-react/tailwind';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', flowbite.content()],
	theme: {
		container: {
			center: true,
		},
		extend: {
			fontFamily: {
				Inter: ['Inter', 'sans-serif'],
			},
		},
		colors: {
			fernGreen: '#468448',
			silver: '#C8C8C8',
			chineseWhite: '#E0E0E0',
			eerieBlack: '#1E1E1E',
		}
	},
	plugins: [flowbite.plugin()],
};
