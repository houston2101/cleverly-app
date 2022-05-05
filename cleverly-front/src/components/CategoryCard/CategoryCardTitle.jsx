import styled from '@emotion/styled'

const CategoryCardTitle = styled.span`
	font-family: ${({theme}) => theme.typography.fontFamilyLexend};
	font-size: 36px;
	line-height: 50px;
	top: 50%;
	transform: translateY(-50%);
	position: absolute;
	z-index: 1;
	color: ${({theme}) => theme.palette.text.secondary};
`

export default CategoryCardTitle
