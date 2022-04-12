import {ReactComponent as AccountImage} from '../../img/account-icon.svg'
import styled from '@emotion/styled'

const HeaderAccountIcon = styled(AccountImage)`
	${({theme}) => theme.breakpoints.down('md')} {
		fill: ${({theme}) => theme.palette.primary};
	}

	${({theme}) => theme.breakpoints.up('md')} {
		fill: ${({theme}) => theme.palette.background.secondary};
		width: 30px;
		height: 30px;
	}
`

export default HeaderAccountIcon
