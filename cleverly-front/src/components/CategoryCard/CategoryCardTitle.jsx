import styled from '@emotion/styled'

const CategoryCardTitle = styled.span`
	font-family: ${({theme}) => theme.typography.fontFamilyLexend};
	top: 50%;
	transform: translateY(-50%);
	position: absolute;
	width: 100%;
	white-space: nowrap;
	overflow: hidden;
	text-align: center;
	text-overflow: ellipsis;
	z-index: 1;
	color: ${({theme}) => theme.palette.text.secondary};

	${({theme}) => theme.breakpoints.down('md')} {
		font-size: 16px;
		line-height: 30px;
		padding: 0 5px;
	}

	${({theme}) => theme.breakpoints.up('md')} {
		font-size: 36px;
		line-height: 50px;
		padding: 0 15px;
	}
`

export default CategoryCardTitle
