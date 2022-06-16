import styled from '@emotion/styled'

const UserResultTestName = styled.span`
	grid-column-start: 2;
	grid-row-end: 3;
	font-family: ${({theme}) => theme.typography.fontFamilyLexend};
	color: ${({theme}) => theme.palette.primary};
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
	width: 100%;
	display: flex;
	gap: 15px;

	${({theme}) => theme.breakpoints.down('lg')} {
		font-size: 16px;
		padding: 7px 13px;
	}

	${({theme}) => theme.breakpoints.up('lg')} {
		font-size: 24px;
		padding: 11px 40px;
	}
`

export default UserResultTestName
