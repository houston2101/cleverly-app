import styled from '@emotion/styled'

const HeaderAccountInfo = styled.div`
	display: flex;

	${({theme}) => theme.breakpoints.down('md')} {
		flex-direction: column;
	}

	${({theme}) => theme.breakpoints.up('md')} {
		flex-direction: row;
		gap: 15px;
	}
`

export default HeaderAccountInfo
