import styled from '@emotion/styled'

const SliderItemCover = styled.div`
	border-radius: ${({theme}) => theme.borderRadius.md};
	box-shadow: ${({theme}) => theme.boxShadow.icon};
	background-color: ${({theme}) => theme.palette.accent.lightBlue};

	${({theme}) => theme.breakpoints.down('lg')} {
		width: 100%;
		height: 100%;
		min-width: 125px;
		min-height: 125px;
	}

	${({theme}) => theme.breakpoints.up('lg')} {
		width: 170px;
		height: 170px;
	}
`

export default SliderItemCover
