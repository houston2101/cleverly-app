import styled from '@emotion/styled'

const UserDataWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-between;
	overflow: hidden;

	${({theme}) => theme.breakpoints.down('md')} {
		gap: 3px;
	}

	${({theme}) => theme.breakpoints.up('md')} {
		gap: 5px;
	}
`

export default UserDataWrapper
