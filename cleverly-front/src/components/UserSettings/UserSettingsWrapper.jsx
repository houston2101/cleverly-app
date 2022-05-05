import styled from '@emotion/styled'

const UserSettingsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	background-color: ${({theme}) => theme.palette.background.secondary};
	box-shadow: ${({theme}) => theme.boxShadow.base};
	border-radius: ${({theme}) => theme.borderRadius.md};

	${({theme}) => theme.breakpoints.down('md')} {
		width: 100%;
		padding: 20px;
	}

	${({theme}) => theme.breakpoints.up('md')} {
		max-width: 750px;
		padding: 66px;
	}
`

export default UserSettingsWrapper
