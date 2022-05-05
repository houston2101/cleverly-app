import styled from '@emotion/styled'

const UserInfoWrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	position: relative;

	${({theme}) => theme.breakpoints.down('md')} {
		gap: 17px;
	}

	${({theme}) => theme.breakpoints.up('md')} {
		gap: 25px;
	}
`

export default UserInfoWrapper
