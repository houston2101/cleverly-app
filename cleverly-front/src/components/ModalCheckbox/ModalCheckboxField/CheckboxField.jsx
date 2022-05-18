import styled from '@emotion/styled'

const CheckboxField = styled.div`
	width: 25px;
	height: 25px;
	position: absolute;
	background-color: ${({theme}) => theme.palette.background.secondary};
	z-index: 0;
	border-radius: ${({theme}) => theme.borderRadius.xsm};
	box-shadow: ${({theme}) => theme.boxShadow.answer};
	border: 2px solid ${({theme}) => theme.palette.background.primary};
`

export default CheckboxField
