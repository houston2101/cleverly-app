import styled from '@emotion/styled'

const UserPageSliderWrapper = styled.div`
	background-color: ${({theme}) => theme.palette.background.secondary};
	border-radius: ${({theme}) => theme.borderRadius.md};
	box-shadow: ${({theme}) => theme.boxShadow.base};
	display: flex;
	align-items: center;
	flex-direction: column;
	position: relative;

	${({theme}) => theme.breakpoints.down('sm')} {
		max-width: 335px;
		padding: 20px;
	}

	${({theme}) => theme.breakpoints.up('sm')} {
		padding: 30px;
	}

	${({theme}) => theme.breakpoints.between('lg', '2xl')} {
		max-width: 640px;
	}

	${({theme}) => theme.breakpoints.between('2xl', '3xl')} {
		max-width: 740px;
	}

	${({theme}) => theme.breakpoints.up('3xl')} {
		max-width: 840px;
		width: 100%;
		padding: 43px;
	}
`

export default UserPageSliderWrapper
