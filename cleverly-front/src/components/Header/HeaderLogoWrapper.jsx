import styled from '@emotion/styled'
import {Link} from 'react-router-dom'

const HeaderLogoWrapper = styled(Link)`
	position: absolute;
	left: 50%;
	transform: translateX(-50%);

	${({theme}) => theme.breakpoints.down('md')} {
		padding: 9px;
		top: 0;
	}

	${({theme}) => theme.breakpoints.up('md')} {
		padding: 10px;
	}
`
export default HeaderLogoWrapper
