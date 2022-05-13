import styled from '@emotion/styled'

const AddAnswer = styled.button`
	border-radius: ${({theme}) => theme.borderRadius.circle};
	box-shadow: ${({theme}) => theme.boxShadow.answer};

	${({theme}) => theme.breakpoints.down('md')} {
		width: 36px;
		height: 36px;
	}

	${({theme}) => theme.breakpoints.up('md')} {
		width: 56px;
		height: 56px;
	}

	&::before,
	&::after {
		content: '';
		display: block;
		background-color: ${({theme}) => theme.palette.primary};
		border-radius: ${({theme}) => theme.borderRadius.xsm};
		margin: 0 auto;

		${({theme}) => theme.breakpoints.down('md')} {
			width: 18px;
			height: 2px;
		}

		${({theme}) => theme.breakpoints.up('md')} {
			width: 24px;
			height: 3px;
		}
	}

	&::before {
		transform: rotate(90deg);
	}
`

export default AddAnswer
