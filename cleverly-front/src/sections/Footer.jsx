import FooterContainer from '../components/Footer/FooterContainer'
import FooterText from '../components/Footer/FooterText'
import FooterWrapper from '../components/Footer/FooterWrapper'
import footerData from '../data/en/footerData'

const Footer = () => (
	<FooterWrapper>
		<FooterContainer>
			<FooterText>&copy;{footerData.copyrightText}</FooterText>
		</FooterContainer>
	</FooterWrapper>
)

export default Footer
