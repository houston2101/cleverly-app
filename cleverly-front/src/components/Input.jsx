import styled from '@emotion/styled'

const Input = styled.input`
	&:invalid {
		border-color: ${({theme}) => theme.palette.accent.lightRed};
	}

	&:valid {
		border-color: ${({theme}) => theme.palette.accent.lightGreen};
	}

	&:not(:focus) {
		border-color: ${({theme}) => theme.palette.background.primary};
	}

	&:focus {
		border-color: ${({theme}) => theme.palette.primary};
	}

	&::placeholder {
		color: ${({theme}) => theme.palette.text.placeholder};
	}

	width: 300px;
	height: 48px;
	border-width: 2px !important;
	border-style: solid !important;
	box-shadow: ${({theme}) => theme.boxShadow.answer};
	border-radius: ${({theme}) => theme.borderRadius.md};
	padding: 15px 20px;
	font-size: 18px;
	font-family: ${({theme}) => theme.typography.fontFamilyLexend};
`

export default Input
