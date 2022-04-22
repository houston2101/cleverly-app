import {ReactComponent as BackgroundImage} from '../../img/start-page-background.svg'
import styled from '@emotion/styled'

const StartPageBackground = styled(BackgroundImage)`
	${({theme}) => theme.breakpoints.down('xl')} {
		display: none;
	}

	${({theme}) => theme.breakpoints.up('xl')} {
		position: absolute;
		width: 100%;
		height: 100%;
		bottom: 0;
		left: 0;
	}
`

export default StartPageBackground
