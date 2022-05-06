import styled from '@emotion/styled'

const UserResultOrderNumber = styled.span`
	grid-column-start: 1;
	grid-row-end: 2;
	font-family: ${({theme}) => theme.typography.fontFamilyLexend};
	color: ${({theme}) => theme.palette.text.secondary};

	${({theme}) => theme.breakpoints.down('lg')} {
		font-size: 16px;
		padding: 7px 12px;
	}

	${({theme}) => theme.breakpoints.up('lg')} {
		font-size: 24px;
		padding: 11px 35px;
	}
`

export default UserResultOrderNumber
