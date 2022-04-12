import {ReactComponent as LogoutImage} from '../../img/logout-icon.svg'
import styled from '@emotion/styled'

const HeaderLogoutIcon = styled(LogoutImage)`
	${({theme}) => theme.breakpoints.down('md')} {
		display: none;
	}

	${({theme}) => theme.breakpoints.up('md')} {
		fill: ${({theme}) => theme.palette.background.secondary};
		width: 30px;
		height: 30px;
	}
`

export default HeaderLogoutIcon
