
import animated from 'tailwindcss-animated'
import typography from '@tailwindcss/typography'
import type { Config } from 'tailwindcss'
const colors = require('tailwindcss/colors')

export default <Partial<Config>>{
	theme: {
		extend: {
			colors: {
				primary: {
					...colors.purple,
					DEFAULT: colors.purple[500],
				},
				obsidian: '#050505',
				'nebula-purple': '#4c1d95',
				'nebula-blue': '#1e3a8a',
			},
			animation: {
				'fade-in': 'fadeIn 0.5s ease-out',
				'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
				'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				fadeInUp: {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
			},
			transformOrigin: {
				'left-center': 'left center',
			},
			boxShadow: {
				neon: '0 0 10px rgba(168, 85, 247, 0.4), 0 0 20px rgba(168, 85, 247, 0.2)',
				'neon-hover': '0 0 15px rgba(168, 85, 247, 0.6), 0 0 30px rgba(168, 85, 247, 0.3)',
			},
		},
	},
	darkMode: 'class',
	plugins: [
		animated,
		typography,
	],
}
