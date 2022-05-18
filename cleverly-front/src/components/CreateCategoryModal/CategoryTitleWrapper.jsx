import styled from '@emotion/styled'

const CategoryTitleWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	${({theme}) => theme.breakpoints.down('md')} {
		gap: 18px;
	}

	${({theme}) => theme.breakpoints.up('md')} {
		gap: 21px;
	}
`

export default CategoryTitleWrapper
