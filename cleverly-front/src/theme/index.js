const breakpoints = {
	values: {
		sm: 375,
		md: 768,
		lg: 992,
		xl: 1280,
		'2xl': 1536,
		'3xl': 1920
	}
}
const typography = {
	rootFontSize: 16,
	fontFamily: `system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'`
}
typography.pxToRem = (value) =>
	`${(value / typography.rootFontSize).toFixed(3)}rem`

const theme = {
	breakpoints: {
		...breakpoints,
		up: (key) => `@media (min-width: ${breakpoints.values[key]}px)`,
		down: (key) =>
			`@media (max-width: ${breakpoints.values[key] - 0.02}px)`,
		between: (min, max) =>
			`@media (min-width: ${breakpoints.values[min]}px) and (max-width: ${
				breakpoints.values[max] - 0.02
			}px)`
	},

	palette: {
		primary: '#503B7C',

		background: {
			primary: '#F5F5F5',
			secondary: '#FFFFFF'
		},

		text: {
			primary: '#333333',
			secondary: '#FFFFFF',
			placeholder: '#B4B4B4'
		},

		accent: {
			lightGreen: '#9AEC80',
			lightRed: '#F77D88',
			lightBlue: '#989FC9'
		}
	},

	borderRadius: {
		sm: '10px',
		md: '15px',
		circle: '50%'
	},

	typography: {
		...typography,
		fontFamilyLexend: `Lexend, ${typography.fontFamily}`
	}
}

export default theme