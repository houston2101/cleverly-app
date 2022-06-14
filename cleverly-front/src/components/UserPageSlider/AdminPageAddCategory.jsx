import styled from '@emotion/styled'

const AdminPageAddCategory = styled.div`
	border-radius: ${({theme}) => theme.borderRadius.circle};
	background-color: ${({theme}) => theme.palette.accent.lightBlue};

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
