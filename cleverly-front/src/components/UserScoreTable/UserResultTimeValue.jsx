import styled from '@emotion/styled'

const UserResultTimeValue = styled.span`
	grid-column-start: 3;
	grid-row-end: 4;
	font-family: ${({theme}) => theme.typography.fontFamilyLexend};
	color: ${({theme}) => theme.palette.primary};

	${({theme}) => theme.breakpoints.down('md')} {
		font-size: 16px;
		padding: 7px 12px;
	}

	${({theme}) => theme.breakpoints.up('md')} {
		font-size: 24px;
		padding: 11px 18px;
	}
`

export default UserResultTimeValue
