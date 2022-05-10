import styled from '@emotion/styled'

const SortTypeItem = styled.div`
	font-family: ${({theme}) => theme.typography.fontFamilyLexend};
	color: ${({theme}) => theme.palette.primary};

	&:not(:nth-child(2)) {
		text-align: center;
	}

	${({theme}) => theme.breakpoints.down('lg')} {
		font-size: 14px;
	}

	${({theme}) => theme.breakpoints.up('lg')} {
		font-size: 24px;

		&:nth-child(2) {
			padding-left: 40px;
		}
	}
`

export default SortTypeItem
