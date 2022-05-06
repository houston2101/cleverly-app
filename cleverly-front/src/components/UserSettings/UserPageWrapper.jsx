import styled from '@emotion/styled'

const UserPageWrapper = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;

	${({theme}) => theme.breakpoints.down('lg')} {
		gap: 16px;
	}

	${({theme}) => theme.breakpoints.up('lg')} {
		gap: 50px;
	}

	${({theme}) => theme.breakpoints.down('xl')} {
		align-items: center;
		width: 100%;
	}

	${({theme}) => theme.breakpoints.up('xl')} {
		align-items: flex-start;
		width: 50%;
	}
`

export default UserPageWrapper
