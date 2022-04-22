import styled from '@emotion/styled'

const WarningModalWrapper = styled.div`
	display: flex;
	gap: 12px;
	position: relative;
	top: 10px;
	left: 50%;
	transform: translateX(-50%);
	z-index: 3;
	max-width: 325px;
	padding: 10px;
	align-items: center;
	justify-content: center;
	background-color: ${({theme}) => theme.palette.accent.lightRed};
	border-radius: ${({theme}) => theme.borderRadius.md};
`

export default WarningModalWrapper
