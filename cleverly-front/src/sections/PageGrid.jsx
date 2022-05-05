import PageGridStack from '../components/PageGrid/PageGridStack'
import PageGridTitle from '../components/PageGrid/PageGridTitle'
import PageGridWrapper from '../components/PageGrid/PageGridWrapper'

const PageGrid = ({title, content}) => {
	return (
		<PageGridWrapper>
			<PageGridTitle>{title}</PageGridTitle>
			<PageGridStack>{content}</PageGridStack>
		</PageGridWrapper>
	)
}

export default PageGrid
