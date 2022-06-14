import styled from '@emotion/styled'

const SliderItemCover = styled.div`
	border-radius: ${({theme}) => theme.borderRadius.md};
	box-shadow: ${({theme}) => theme.boxShadow.icon};
	background-color: ${({theme}) => theme.palette.accent.lightBlue};
	overflow: hidden;

	${({theme}) => theme.breakpoints.down('lg')} {
		width: 100%;
		height: 100%;
		width: 125px;
		height: 125px;
	}

	${({theme}) => theme.breakpoints.up('lg')} {
		width: 170px;
		height: 170px;
	}

	& img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`

export default SliderItemCover
