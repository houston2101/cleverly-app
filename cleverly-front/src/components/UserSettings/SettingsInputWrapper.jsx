import styled from '@emotion/styled'

const SettingsInputWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;

	${({theme}) => theme.breakpoints.down('lg')} {
		gap: 15px;
		padding: 0 10px;
	}

	${({theme}) => theme.breakpoints.up('lg')} {
		gap: 20px;
	}
`

export default SettingsInputWrapper
