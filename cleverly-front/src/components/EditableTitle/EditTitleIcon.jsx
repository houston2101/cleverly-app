import {ReactComponent as EditIcon} from '../../img/edit-icon.svg'
import styled from '@emotion/styled'

const EditTitleIcon = styled(EditIcon)`
	padding: 5px;

	&:hover {
		filter: brightness(0.7);
		cursor: pointer;
	}

	${({theme}) => theme.breakpoints.down('lg')} {
		width: 25px;
		height: 25px;
	}

	${({theme}) => theme.breakpoints.between('lg', '2xl')} {
		width: 28px;
		height: 28px;
	}

	${({theme}) => theme.breakpoints.up('2xl')} {
		width: 32px;
		height: 32px;
	}
`

export default EditTitleIcon
