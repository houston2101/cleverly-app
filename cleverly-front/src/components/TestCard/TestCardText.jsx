import styled from '@emotion/styled'

const TestCardText = styled.span`
	font-family: ${({theme}) => theme.typography.fontFamilyLexend};
	color: ${({theme}) => theme.palette.text.secondary};
	font-size: 20px;
	line-height: 25px;
`

export default TestCardText
