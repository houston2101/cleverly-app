import styled from '@emotion/styled'

const UserAvatar = styled.img`
	border-radius: ${({theme}) => theme.borderRadius.circle};
	box-shadow: ${({theme}) => theme.boxShadow.icon};
	background-color: ${({theme}) => theme.palette.accent.lightBlue};
	flex-shrink: 0;

	${({theme}) => theme.breakpoints.down('sm')} {
		width: 45px;
		height: 45px;
	}

	${({theme}) => theme.breakpoints.between('sm', 'lg')} {
		width: 70px;
		height: 70px;
	}

	${({theme}) => theme.breakpoints.between('lg', '2xl')} {
		width: 80px;
		height: 80px;
	}

	${({theme}) => theme.breakpoints.up('2xl')} {
		width: 125px;
		height: 125px;
	}
`

export default UserAvatar
