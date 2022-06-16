import styled from '@emotion/styled'
import {Link} from 'react-router-dom'

const ResultItem = styled(Link)`
	display: grid;
	overflow: hidden;
	background-color: ${({theme}) => theme.palette.background.secondary};
	border-radius: ${({theme}) => theme.borderRadius.md};
	box-shadow: ${({theme}) => theme.boxShadow.answer};

	${({theme}) => theme.breakpoints.down('lg')} {
		grid-template-columns: 20px auto;
	}

	${({theme}) => theme.breakpoints.up('lg')} {
		grid-template-columns: 40px auto;
	}
`

export default ResultItem
