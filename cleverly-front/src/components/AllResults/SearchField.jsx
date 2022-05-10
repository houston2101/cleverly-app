import styled from '@emotion/styled'

const SearchField = styled.input`
	width: 100%;
	height: 100%;
	background-color: transparent;
	border-bottom: 2px solid ${({theme}) => theme.palette.primary};
	font-family: ${({theme}) => theme.typography.fontFamilyLexend};
	color: ${({theme}) => theme.palette.primary};

	&:focus {
		border-bottom: 2px solid ${({theme}) => theme.palette.primary};
	}

	${({theme}) => theme.breakpoints.down('lg')} {
		font-size: 14px;
	}

	${({theme}) => theme.breakpoints.up('lg')} {
		font-size: 18px;
	}
`

export default SearchField
