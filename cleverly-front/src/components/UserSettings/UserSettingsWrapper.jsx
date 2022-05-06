import styled from '@emotion/styled'

const UserSettingsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	background-color: ${({theme}) => theme.palette.background.secondary};
	box-shadow: ${({theme}) => theme.boxShadow.base};
	border-radius: ${({theme}) => theme.borderRadius.md};
	width: 100%;

	${({theme}) => theme.breakpoints.down('lg')} {
		padding: 20px;
	}

	${({theme}) => theme.breakpoints.up('md')} {
		padding: 66px;
	}

	${({theme}) => theme.breakpoints.up('lg')} {
		max-width: 750px;
	}
`

export default UserSettingsWrapper
