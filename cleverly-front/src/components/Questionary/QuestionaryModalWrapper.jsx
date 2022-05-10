import styled from '@emotion/styled'

const QuestionaryModalWrapper = styled.div`
	background: ${({theme}) => theme.palette.background.secondary};
	padding: 30px 30px 60px;
	display: flex;
	flex-direction: column;
	gap: 20px;
	box-shadow: ${({theme}) => theme.boxShadow.base};
	border-radius: ${({theme}) => theme.borderRadius.md};
`

export default QuestionaryModalWrapper
