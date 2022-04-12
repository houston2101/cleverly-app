import styled from '@emotion/styled'
import {Link} from 'react-router-dom'

const HeaderAccountInfoItem = styled(Link)`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 15px;
	padding: 5px;
	font-family: ${({theme}) => theme.typography.fontFamilyLexend};
	color: ${({theme}) => theme.palette.text.secondary};

	&:first-of-type {
		${({theme}) => theme.breakpoints.down('md')} {
			flex-direction: column;
		}

		${({theme}) => theme.breakpoints.up('md')} {
			flex-direction: row;
		}
	}

	&:last-of-type {
		${({theme}) => theme.breakpoints.down('md')} {
			bottom: 0;
			position: absolute;
			width: 100%;
			left: 0;
			padding: 20px;
			justify-content: center;
			background-color: ${({theme}) => theme.palette.accent.lightRed};
		}
	}
`

export default HeaderAccountInfoItem
