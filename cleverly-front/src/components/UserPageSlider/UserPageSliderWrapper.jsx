import styled from '@emotion/styled'

const UserPageSliderWrapper = styled.div`
	background-color: ${({theme}) => theme.palette.background.secondary};
	border-radius: ${({theme}) => theme.borderRadius.md};
	box-shadow: ${({theme}) => theme.boxShadow.base};
	display: flex;
	align-items: center;
	flex-direction: column;
	position: relative;
	width: 100%;
	max-width: 840px;

	${({theme}) => theme.breakpoints.down('sm')} {
		padding: 20px;
	}

	${({theme}) => theme.breakpoints.up('sm')} {
		padding: 30px;
	}

	${({theme}) => theme.breakpoints.up('3xl')} {
		max-width: 840px;
		width: 100%;
		padding: 43px;
	}
`

export default UserPageSliderWrapper
