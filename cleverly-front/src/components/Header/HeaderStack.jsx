import styled from '@emotion/styled'

const HeaderStack = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	${({theme}) => theme.breakpoints.down('md')} {
		flex-direction: column;
		justify-content: center;
		gap: 30px;
	}

	${({theme}) => theme.breakpoints.up('md')} {
		flex-direction: row;
		gap: 15px;
	}
`

export default HeaderStack
