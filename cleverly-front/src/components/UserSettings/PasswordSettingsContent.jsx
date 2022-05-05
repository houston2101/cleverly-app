import styled from '@emotion/styled'

const PasswordSettingsContent = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: column;

	${({theme}) => theme.breakpoints.down('md')} {
		gap: 40px;
		padding: 40px 0;
	}

	${({theme}) => theme.breakpoints.up('md')} {
		gap: 30px;
		padding: 50px 0;
	}
`

export default PasswordSettingsContent
