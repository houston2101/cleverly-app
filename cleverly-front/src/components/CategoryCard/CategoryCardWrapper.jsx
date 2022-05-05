import styled from '@emotion/styled'

const CategoryCardWrapper = styled.article`
	display: flex;
	justify-content: center;
	border-radius: ${({theme}) => theme.borderRadius.md};
	box-shadow: ${({theme}) => theme.boxShadow.base};
	background-color: ${({theme}) => theme.palette.accent.lightBlue};
	overflow: hidden;
	height: 0;
	width: 100%;
	padding-bottom: 56.25%;
	position: relative;
`

export default CategoryCardWrapper
