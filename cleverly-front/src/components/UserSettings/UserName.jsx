import styled from '@emotion/styled'

const UserName = styled.span`
	font-family: ${({theme}) => theme.typography.fontFamilyLexend};
	text-overflow: ellipsis;
	overflow: hidden;
	max-width: min-content;
	white-space: nowrap;

	${({theme}) => theme.breakpoints.down('lg')} {
		font-size: 20px;
		width: calc(100% - 70px);
		padding-bottom: 2px;
	}

	${({theme}) => theme.breakpoints.up('lg')} {
		font-size: 40px;
		width: calc(100% - 80px);
	}
`

export default UserName
