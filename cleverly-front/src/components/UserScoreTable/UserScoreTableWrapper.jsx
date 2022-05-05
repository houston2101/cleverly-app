import styled from '@emotion/styled'

const UserScoreTableWrapper = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	border-radius: ${({theme}) => theme.borderRadius.md};
	box-shadow: ${({theme}) => theme.boxShadow.base};
	width: 100%;
	overflow: hidden;
	background-color: ${({theme}) => theme.palette.background.secondary};

	&:after {
		content: '';
		display: block;
		position: absolute;
		border-radius: ${({theme}) => theme.borderRadius.sm};
		background-color: ${({theme}) => theme.palette.primary};
		width: 2px;
		height: 90%;
		top: 5%;

		${({theme}) => theme.breakpoints.down('md')} {
			right: 72px;
		}

		${({theme}) => theme.breakpoints.up('md')} {
			right: 100px;
		}
	}

	${({theme}) => theme.breakpoints.down('md')} {
		max-width: 750px;
	}
`

export default UserScoreTableWrapper
