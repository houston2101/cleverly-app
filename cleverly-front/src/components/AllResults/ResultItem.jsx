import styled from '@emotion/styled'

const ResultItem = styled.div`
	display: grid;
	overflow: hidden;
	background-color: ${({theme}) => theme.palette.background.secondary};
	border-radius: ${({theme}) => theme.borderRadius.md};
	box-shadow: ${({theme}) => theme.boxShadow.answer};

	${({theme}) => theme.breakpoints.down('lg')} {
		grid-template-columns: 20px auto;
	}

	${({theme}) => theme.breakpoints.up('lg')} {
		grid-template-columns: 40px auto;
	}
`

export default ResultItem
