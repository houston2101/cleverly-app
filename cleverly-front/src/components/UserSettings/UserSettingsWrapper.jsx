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

	${({theme}) => theme.breakpoints.up('lg')} {
		padding: 66px;
		max-width: 750px;
	}
`

export default UserSettingsWrapper
