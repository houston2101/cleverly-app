import styled from '@emotion/styled'

const QuestionTextWrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	border-bottom: 2px solid ${({theme}) => theme.palette.primary};
	font-family: ${({theme}) => theme.typography.fontFamilyLexend};

	&:focus {
		border-bottom: 2px solid ${({theme}) => theme.palette.primary};
	}
`

export default QuestionTextWrapper
