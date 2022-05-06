import styled from '@emotion/styled'

const UserEmail = styled.span`
	font-family: ${({theme}) => theme.typography.fontFamilyLexend};
	color: ${({theme}) => theme.palette.text.placeholder};
	text-overflow: ellipsis;
	overflow: hidden;
	width: 100%;
	padding-bottom: 5px;

	${({theme}) => theme.breakpoints.down('lg')} {
		font-size: 16px;
	}

	${({theme}) => theme.breakpoints.up('lg')} {
		font-size: 24px;
	}
`

export default UserEmail
