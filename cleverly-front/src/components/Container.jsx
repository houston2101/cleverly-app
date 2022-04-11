import {css} from '@emotion/react'
import styled from '@emotion/styled'

const dynamicStyle = ({variant}) => css`
	${variant === 'main' && 'min-height: 100vh;'}
`

const Container = styled.div`
	width: 100%;

	${({theme}) => theme.breakpoints.between('sm', 'md')} {
		padding: 0 20px;
	}

	${({theme}) => theme.breakpoints.between('md', 'xl')} {
		padding: 0 40px;
	}

	${({theme}) => theme.breakpoints.between('xl', '2xl')} {
		padding: 0 60px;
	}

	${({theme}) => theme.breakpoints.up('2xl')} {
		padding: 0 80px;
		max-width: 1920px;
	}

	${dynamicStyle}
`

export default Container
