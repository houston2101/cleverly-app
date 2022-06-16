import styled from '@emotion/styled'

const PageGridStack = styled.div`
	display: grid;

	${({theme}) => theme.breakpoints.down('md')} {
		grid-template-columns: 1fr;
		row-gap: 40px;
	}

	${({theme}) => theme.breakpoints.between('md', 'lg')} {
		grid-template-columns: 1fr 1fr;
	}

	${({theme}) => theme.breakpoints.between('sm', 'md')} {
		row-gap: 25px;
		column-gap: 25px;
	}

	${({theme}) => theme.breakpoints.between('md', 'lg')} {
		row-gap: 30px;
		column-gap: 35px;
	}

	${({theme}) => theme.breakpoints.between('lg', 'xl')} {
		row-gap: 45px;
		column-gap: 45px;
	}

	${({theme}) => theme.breakpoints.between('xl', '3xl')} {
		row-gap: 50px;
		column-gap: 55px;
	}

	${({theme}) => theme.breakpoints.up('lg')} {
		grid-template-columns: 1fr 1fr 1fr;
	}

	${({theme}) => theme.breakpoints.up('3xl')} {
		row-gap: 65px;
		column-gap: 80px;
	}
`

export default PageGridStack
