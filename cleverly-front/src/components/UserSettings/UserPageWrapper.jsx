import styled from '@emotion/styled'

const UserPageWrapper = styled.div`
	display: flex;
	flex-direction: column;

	${({theme}) => theme.breakpoints.down('lg')} {
		gap: 16px;
	}

	${({theme}) => theme.breakpoints.up('lg')} {
		gap: 78px;
	}
`

export default UserPageWrapper
