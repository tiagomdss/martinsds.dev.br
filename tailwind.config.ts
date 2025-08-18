// @ts-expect-error nao tem tipagem nesse caraio
import animated from 'tailwindcss-animated'
import typography from '@tailwindcss/typography'
import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
	theme: {
		extend: {},
	},
	darkMode: 'class',
	plugins: [
		animated,
		typography,
	],
}
