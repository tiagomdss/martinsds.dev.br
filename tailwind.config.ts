
import animated from 'tailwindcss-animated'
import typography from '@tailwindcss/typography'
import type { Config } from 'tailwindcss'
const colors = require('tailwindcss/colors')

export default <Partial<Config>>{
	theme: {
		extend: {
			colors: {
				primary: {
					...colors.cyan,
					DEFAULT: colors.cyan[500],
				},
				neon: {
					cyan: '#0891b2',
					purple: '#7c3aed',
					blue: '#2563eb',
					pink: '#db2777',
					green: '#059669',
				},
				obsidian: '#0a0a1a',
				'nebula-purple': '#4c1d95',
				'nebula-blue': '#1e3a8a',
				'deep-space': '#050510',
				'cyber-dark': '#0a0a1a',
			},
			animation: {
				'fade-in': 'fadeIn 0.5s ease-out',
				'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
				'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				'glow-pulse': 'glowPulse 2s ease-in-out infinite',
				'float': 'float 6s ease-in-out infinite',
				'scan': 'scan 3s linear infinite',
				'grid-move': 'gridMove 20s linear infinite',
				'neon-flicker': 'neonFlicker 3s ease-in-out infinite',
				'hologram': 'hologram 8s ease-in-out infinite',
				'slide-in-right': 'slideInRight 0.6s ease-out forwards',
				'rotate-slow': 'rotateSlow 20s linear infinite',
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
				glowPulse: {
					'0%, 100%': { boxShadow: '0 0 5px #00f0ff, 0 0 10px #00f0ff, 0 0 15px #00f0ff' },
					'50%': { boxShadow: '0 0 10px #00f0ff, 0 0 20px #00f0ff, 0 0 40px #00f0ff' },
				},
				float: {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' },
				},
				scan: {
					'0%': { transform: 'translateY(-100%)' },
					'100%': { transform: 'translateY(100vh)' },
				},
				gridMove: {
					'0%': { transform: 'translateY(0)' },
					'100%': { transform: 'translateY(50px)' },
				},
				neonFlicker: {
					'0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%': {
						textShadow: '0 0 7px #00f0ff, 0 0 10px #00f0ff, 0 0 21px #00f0ff, 0 0 42px #0066ff',
						opacity: '1',
					},
					'20%, 24%, 55%': {
						textShadow: 'none',
						opacity: '0.8',
					},
				},
				hologram: {
					'0%, 100%': { opacity: '1', filter: 'brightness(1)' },
					'50%': { opacity: '0.8', filter: 'brightness(1.2) hue-rotate(10deg)' },
				},
				slideInRight: {
					'0%': { opacity: '0', transform: 'translateX(30px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' },
				},
				rotateSlow: {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' },
				},
			},
			transformOrigin: {
				'left-center': 'left center',
			},
			boxShadow: {
				neon: '0 0 10px rgba(0, 240, 255, 0.4), 0 0 20px rgba(0, 240, 255, 0.2)',
				'neon-hover': '0 0 15px rgba(0, 240, 255, 0.6), 0 0 30px rgba(0, 240, 255, 0.3)',
				'neon-purple': '0 0 10px rgba(176, 38, 255, 0.4), 0 0 20px rgba(176, 38, 255, 0.2)',
				'neon-pink': '0 0 10px rgba(255, 42, 109, 0.4), 0 0 20px rgba(255, 42, 109, 0.2)',
				'hologram': '0 0 20px rgba(0, 240, 255, 0.3), inset 0 0 20px rgba(0, 240, 255, 0.1)',
			},
			backgroundImage: {
				'cyber-gradient': 'linear-gradient(135deg, #0a0a1a 0%, #050510 50%, #0a0a2e 100%)',
				'neon-gradient': 'linear-gradient(135deg, #00f0ff 0%, #b026ff 50%, #ff2a6d 100%)',
				'holographic': 'linear-gradient(135deg, rgba(0,240,255,0.1) 0%, rgba(176,38,255,0.1) 50%, rgba(255,42,109,0.1) 100%)',
			},
		},
	},
	darkMode: 'class',
	plugins: [
		animated,
		typography,
	],
}
