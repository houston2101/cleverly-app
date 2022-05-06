import styled from '@emotion/styled'

const UserPageWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;

	${({theme}) => theme.breakpoints.down('lg')} {
		gap: 16px;
	}

	${({theme}) => theme.breakpoints.up('lg')} {
		gap: 50px;
	}

	${({theme}) => theme.breakpoints.down('xl')} {
		align-items: center;
	}

	${({theme}) => theme.breakpoints.up('xl')} {
		align-items: flex-start;
	}
`

export default UserPageWrapper
