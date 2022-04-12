import styled from '@emotion/styled'

const HeaderMobileMenuWrapper = styled.div`
	display: flex;
	align-items: center;

	${({theme}) => theme.breakpoints.down('md')} {
		flex-direction: column-reverse;
		padding-top: 75px;
		gap: 100px;
	}

	${({theme}) => theme.breakpoints.up('md')} {
		flex-direction: row;
		justify-content: space-between;
		width: 100%;
	}
`

export default HeaderMobileMenuWrapper
