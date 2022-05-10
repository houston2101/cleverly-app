import styled from '@emotion/styled'

const ResultItemText = styled.div`
	font-family: ${({theme}) => theme.typography.fontFamilyLexend};
	color: ${({theme}) => theme.palette.text.primary};

	&:not(:nth-child(1)) {
		text-align: center;
	}

	${({theme}) => theme.breakpoints.down('lg')} {
		font-size: 14px;
	}

	${({theme}) => theme.breakpoints.up('lg')} {
		font-size: 18px;
	}
`

export default ResultItemText
