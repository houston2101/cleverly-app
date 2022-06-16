import styled from '@emotion/styled'
import {Link} from 'react-router-dom'

const HeaderStackItem = styled(Link)`
	padding: 5px;
	font-family: ${({theme}) => theme.typography.fontFamilyLexend};
	color: ${({theme}) => theme.palette.primary};

	${({theme}) => theme.breakpoints.up('md')} {
		color: ${({theme}) => theme.palette.text.secondary};
	}
`

export default HeaderStackItem
