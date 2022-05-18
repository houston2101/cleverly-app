import {css} from '@emotion/react'

const modernNormalize = css`
	*,
	::before,
	::after {
		box-sizing: border-box;
	}

	html {
		-moz-tab-size: 4;
		tab-size: 4;
	}

	html {
		line-height: 1.15; /* 1 */
		-webkit-text-size-adjust: 100%; /* 2 */
	}

	body {
		margin: 0;
	}

	hr {
		height: 0; /* 1 */
		color: inherit; /* 2 */
	}

	abbr[title] {
		text-decoration: underline dotted;
	}

	b,
	strong {
		font-weight: bolder;
	}

	code,
	kbd,
	samp,
	pre {
		font-family: ui-monospace, SFMono-Regular, Consolas, 'Liberation Mono',
			Menlo, monospace; /* 1 */
		font-size: 1em; /* 2 */
	}

	small {
		font-size: 80%;
	}

	sub,
	sup {
		font-size: 75%;
		line-height: 0;
		position: relative;
		vertical-align: baseline;
	}

	sub {
		bottom: -0.25em;
	}

	sup {
		top: -0.5em;
	}

	table {
		text-indent: 0; /* 1 */
		border-color: inherit; /* 2 */
	}

	button,
	input,
	optgroup,
	select,
	textarea {
		font-family: inherit; /* 1 */
		font-size: 100%; /* 1 */
		line-height: 1.15; /* 1 */
		margin: 0; /* 2 */
	}

	button,
	select {
		text-transform: none;
	}

	button,
	[type='button'],
	[type='reset'],
	[type='submit'] {
		-webkit-appearance: button;
	}

	::-webkit-scrollbar {
		width: 8px;
		background-color: #989fc9;
		border-radius: 2px;
	}

	::-webkit-scrollbar-thumb {
		background-color: #503b7c;
		border-radius: 2px;
	}

	::-moz-focus-inner {
		border-style: none;
		padding: 0;
	}

	:-moz-focusring {
		outline: 1px dotted ButtonText;
	}

	:-moz-ui-invalid {
		box-shadow: none;
	}

	legend {
		padding: 0;
	}

	progress {
		vertical-align: baseline;
	}

	::-webkit-inner-spin-button,
	::-webkit-outer-spin-button {
		height: auto;
	}

	[type='search'] {
		-webkit-appearance: textfield; /* 1 */
		outline-offset: -2px; /* 2 */
	}

	::-webkit-search-decoration {
		-webkit-appearance: none;
	}

	::-webkit-file-upload-button {
		-webkit-appearance: button; /* 1 */
		font: inherit; /* 2 */
	}

	summary {
		display: list-item;
	}
`

export default modernNormalize
