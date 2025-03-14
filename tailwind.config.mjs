/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		colors: {
				'text': {
					50: '#0c0c0d',
					100: '#19181b',
					200: '#323036',
					300: '#4b4950',
					400: '#63616b',
					500: '#7c7986',
					600: '#96949e',
					700: '#b1afb6',
					800: '#cbc9cf',
					900: '#e5e4e7',
					950: '#f2f2f3',
				},
				'background': {
					50: '#161503',
					100: '#2c2b07',
					200: '#58560e',
					300: '#848115',
					400: '#b0ab1c',
					500: '#ddd622',
					600: '#e3de4f',
					700: '#eae77b',
					800: '#f1efa7',
					900: '#f8f7d3',
					950: '#fcfbe9',
				},
				'primary': {
					50: '#071405',
					100: '#0e290a',
					200: '#1d5115',
					300: '#2b7a1f',
					400: '#3aa22a',
					500: '#48cb34',
					600: '#6dd55d',
					700: '#91e085',
					800: '#b6eaae',
					900: '#daf5d6',
					950: '#edfaeb',
				},
				'secondary': {
					50: '#100d09',
					100: '#201a13',
					200: '#403526',
					300: '#604f39',
					400: '#816a4b',
					500: '#a1845e',
					600: '#b49d7e',
					700: '#c6b59f',
					800: '#d9cebf',
					900: '#ece6df',
					950: '#f6f3ef',
				},
				'accent': {
					50: '#011904',
					100: '#023107',
					200: '#04620f',
					300: '#059416',
					400: '#07c51d',
					500: '#09f625',
					600: '#3af850',
					700: '#6bfa7c',
					800: '#9dfba8',
					900: '#cefdd3',
					950: '#e6fee9',
				},
			},

			borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
