import styled from '@emotion/styled'

const UserPageWrapper = styled.div`
	display: flex;
	flex-direction: column;

	${({theme}) => theme.breakpoints.down('md')} {
		gap: 16px;
	}

	${({theme}) => theme.breakpoints.up('md')} {
		gap: 78px;
	}
`

export default UserPageWrapper
