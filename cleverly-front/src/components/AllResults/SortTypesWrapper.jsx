import styled from '@emotion/styled'

const SortTypesWrapper = styled.div`
	display: grid;
	align-items: center;

	${({theme}) => theme.breakpoints.down('lg')} {
		grid-template-columns: 30px auto 60px 60px;
		padding-right: 11px;
	}

	${({theme}) => theme.breakpoints.up('lg')} {
		grid-template-columns: 40px auto 170px 170px;
		padding-right: 55px;
	}
`

export default SortTypesWrapper
