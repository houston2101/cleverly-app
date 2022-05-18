import styled from '@emotion/styled'

const CategorySelector = styled.span`
	font-family: ${({theme}) => theme.typography.fontFamilyLexend};
	font-size: 24px;
	color: ${({theme}) => theme.palette.text.primary};
	padding: 8px 10px 10px 10px;
	position: relative;
	width: 100%;

	&:hover {
		cursor: pointer;
	}

	&::after {
		content: '';
		display: block;
		position: absolute;
		left: 100%;
		top: 30%;
		width: 10px;
		height: 10px;
		border-right: 3px solid ${({theme}) => theme.palette.primary};
		border-bottom: 3px solid ${({theme}) => theme.palette.primary};
		transform: rotate(45deg);
	}
`

export default CategorySelector
