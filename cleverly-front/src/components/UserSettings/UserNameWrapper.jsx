import styled from '@emotion/styled'

const UserNameWrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-end;
	overflow: hidden;
	width: 100%;

	${({theme}) => theme.breakpoints.down('lg')} {
		gap: 5px;
	}

	${({theme}) => theme.breakpoints.up('lg')} {
		gap: 10px;
	}
`

export default UserNameWrapper
