import styled from '@emotion/styled'

const AdminPageAddCategory = styled.div`
	border-radius: ${({theme}) => theme.borderRadius.circle};
	background-color: ${({theme}) => theme.palette.accent.lightBlue};
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;

	&::before,
	&::after {
		content: '';
		display: block;
		position: absolute;
		background-color: ${({theme}) => theme.palette.text.secondary};
		width: 60%;
		height: 2px;
	}
	&::before {
		transform: rotate(90deg);
	}

	${({theme}) => theme.breakpoints.down('sm')} {
		left: 20px;
	}

	${({theme}) => theme.breakpoints.between('sm', '3xl')} {
		left: 30px;
	}

	${({theme}) => theme.breakpoints.up('3xl')} {
		left: 43px;
	}

	${({theme}) => theme.breakpoints.down('md')} {
		width: 20px;
		height: 20px;
	}

	${({theme}) => theme.breakpoints.up('md')} {
		width: 40px;
		height: 40px;
	}
`

export default AdminPageAddCategory
