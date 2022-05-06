import styled from '@emotion/styled'

const UserPageSliderTitle = styled.span`
	font-family: ${({theme}) => theme.typography.fontFamilyLexend};
	color: ${({theme}) => theme.palette.text.primary};
	text-align: center;
	width: 100%;

	${({theme}) => theme.breakpoints.down('md')} {
		font-size: 20px;
		margin-bottom: 40px;
	}

	${({theme}) => theme.breakpoints.up('md')} {
		font-size: 32px;
		margin-bottom: 50px;
	}
`

export default UserPageSliderTitle
