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

	${({theme}) => theme.breakpoints.between('lg', '2xl')} {
		font-size: 20px;
	}

	${({theme}) => theme.breakpoints.up('2xl')} {
		font-size: 24px;
	}
`

export default UserEmail
