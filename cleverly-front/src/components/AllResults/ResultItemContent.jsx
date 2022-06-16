import styled from '@emotion/styled'

const ResultItemContent = styled.div`
	display: grid;

	${({theme}) => theme.breakpoints.down('lg')} {
		grid-template-columns: auto 60px 60px;
		padding: 24px 11px;
	}

	${({theme}) => theme.breakpoints.up('lg')} {
		grid-template-columns: auto 170px 170px;
		padding: 35px 55px;
	}
`

export default ResultItemContent
