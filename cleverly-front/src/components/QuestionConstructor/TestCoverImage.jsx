import {ReactComponent as CoverImage} from '../../img/add-cover.svg'
import styled from '@emotion/styled'

const TestCoverImage = styled(CoverImage)`
	${({theme}) => theme.breakpoints.down('xl')} {
		width: 18px;
		height: 18px;
	}

	${({theme}) => theme.breakpoints.up('xl')} {
		width: 30px;
		height: 30px;
	}
`

export default TestCoverImage
