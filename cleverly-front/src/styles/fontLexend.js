import {css} from '@emotion/react'

const pathToFont = '../fonts/'

const fontLexend = css`
	@font-face {
		font-family: 'Lexend';
		src: local('Lexend Regular'), local('Lexend-Regular'),
			url('${pathToFont}Lexend-Regular.woff2') format('woff2'),
			url('${pathToFont}Lexend-Regular.woff') format('woff'),
			url('${pathToFont}Lexend-Regular.ttf') format('truetype');
		font-weight: normal;
		font-style: normal;
		font-display: swap;
	}

	@font-face {
		font-family: 'Lexend';
		src: local('Lexend Bold'), local('Lexend-Bold'),
			url('${pathToFont}Lexend-Bold.woff2') format('woff2'),
			url('${pathToFont}Lexend-Bold.woff') format('woff'),
			url('${pathToFont}Lexend-Bold.ttf') format('truetype');
		font-weight: bold;
		font-style: normal;
		font-display: swap;
	}
`

export default fontLexend
