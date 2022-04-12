import {ReactComponent as LogoImage} from '../../img/logo-light.svg'
import styled from '@emotion/styled'

const HeaderLogo = styled(LogoImage)`
	${({theme}) => theme.breakpoints.down('md')} {
		width: 66px;
		height: 32px;
	}

	${({theme}) => theme.breakpoints.up('md')} {
		width: 164px;
		height: 70px;
	}
`

export default HeaderLogo
