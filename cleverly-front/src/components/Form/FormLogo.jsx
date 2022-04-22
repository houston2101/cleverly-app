import styled from '@emotion/styled'
import {ReactComponent as LogoImage} from '../../img/logo-dark.svg'

const FormLogo = styled(LogoImage)`
	margin-bottom: 47px;

	${({theme}) => theme.breakpoints.down('md')} {
		width: 130px;
		height: 39px;
	}

	${({theme}) => theme.breakpoints.up('md')} {
		width: 152px;
		height: 59px;
	}
`

export default FormLogo
