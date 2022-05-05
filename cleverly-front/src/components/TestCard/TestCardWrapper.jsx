import styled from '@emotion/styled'

const TestCardWrapper = styled.article`
	display: flex;
	justify-content: center;
	border-radius: ${({theme}) => theme.borderRadius.md};
	box-shadow: ${({theme}) => theme.boxShadow.base};
	background-color: ${({theme}) => theme.palette.accent.lightBlue};
	overflow: hidden;
	height: 0;
	width: 100%;
	padding-bottom: 51.636%;
	position: relative;

	& > div {
		background-color: ${({theme}) => theme.palette.accent.lightBlue};
		bottom: calc(-80% - -20px);
	}
	&:hover > div {
		bottom: 0;
		background-color: rgba(152, 159, 201, 0.8);
	}
`

export default TestCardWrapper
