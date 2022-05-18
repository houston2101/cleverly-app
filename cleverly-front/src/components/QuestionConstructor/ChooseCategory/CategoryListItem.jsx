import styled from '@emotion/styled'

const CategoryListItem = styled.li`
	font-family: ${({theme}) => theme.typography.fontFamilyLexend};
	font-size: 18px;
	color: ${({theme}) => theme.palette.text.primary};
	padding: 10px;

	&:hover {
		cursor: pointer;
	}
`

export default CategoryListItem
