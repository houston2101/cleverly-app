import styled from '@emotion/styled'

const Input = styled.input`
	height: 48px;
	border-width: 2px !important;
	border-style: solid !important;
	box-shadow: ${({theme}) => theme.boxShadow.answer};
	border-radius: ${({theme}) => theme.borderRadius.md};
	font-family: ${({theme}) => theme.typography.fontFamilyLexend};

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

		${({theme}) => theme.breakpoints.down('md')} {
			font-size: 14px;
			padding: 10px 15px;
			max-width: 450px;
		}

		${({theme}) => theme.breakpoints.up('md')} {
			padding: 15px 20px;
			font-size: 18px;
			max-width: 500px;
		}
	}
`

export default Input
