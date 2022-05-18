import styled from '@emotion/styled'

const CategorySelectorWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-self: flex-start;
	position: relative;

	${({theme}) => theme.breakpoints.down('xl')} {
		order: 1;
	}

	${({theme}) => theme.breakpoints.up('xl')} {
		order: none;
	}
`

export default CategorySelectorWrapper
