/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
	'./pages/**/*.{js,ts,jsx,tsx}',
	'./components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
	extend: {
	  colors: {
		'ch-blue': '#2B8FBB',
		'ch-green': '#64AC00',
		'dark-gray': '#353B36',
		warm: {
		  50:  '#F7F6F6',
		  100: '#E0DCDC',
		  200: '#C1B9B9',
		  300: '#A39696',
		  400: '#827272',
		  500: '#6B5E5E',
		  600: '#534A4A',
		  700: '#3B3435',
		},
	  },
	  fontFamily: {
		sans: ['Roboto', 'ui-sans-serif', 'system-ui', 'sans-serif'],
		serif: ['caecilia', 'Roboto Slab', 'ui-serif', 'Georgia', 'serif'],
	  },
	  animation: {
		'fade-in': 'fadeIn 1s ease-out',
		'fade-in-up': 'fadeInUp 0.9s cubic-bezier(0.25,0.46,0.45,0.94) forwards',
	  },
	  keyframes: {
		fadeIn:   { '0%': {opacity:0}, '100%': {opacity:1} },
		fadeInUp: { '0%': {opacity:0, transform:'translateY(30px)'},
				   '100%': {opacity:1, transform:'translateY(0)'} },
	  },
	  backgroundImage: {
		'gradient-warm': 'linear-gradient(90deg, #ffffff, #f0eeee)',
	  },
	},
  },
  plugins: [],
};
