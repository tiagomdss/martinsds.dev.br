// @ts-expect-error nao tem tipagem nesse caraio
import animated from 'tailwindcss-animated'
import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
	theme: {
		extend: {},
	},
	darkMode: 'class',
	plugins: [
		animated,
	],
}
