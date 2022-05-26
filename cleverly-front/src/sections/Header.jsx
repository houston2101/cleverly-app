import React from 'react'
import HeaderWrapper from '../components/Header/HeaderWrapper'
import HeaderContainer from '../components/Header/HeaderContainer'
import HeaderLogo from '../components/Header/HeaderLogo'
import HeaderLogoWrapper from '../components/Header/HeaderLogoWrapper'
import HeaderMenu from '../components/Header/HeaderMenu'
import HeaderSideMenu from '../components/Header/HeaderSideMenu'
import HeaderStack from '../components/Header/HeaderStack'
import HeaderAccountInfo from '../components/Header/HeaderAccountInfo'
import HeaderAccountInfoItem from '../components/Header/HeaderAccountInfoItem'
import HeaderStackItem from '../components/Header/HeaderStackItem'
import headerData from '../data/en/headerData'
import HeaderAccountIcon from '../components/Header/HeaderAccountIcon'
import HeaderLogoutIcon from '../components/Header/HeaderLogoutIcon'
import HeaderAccountItemName from '../components/Header/HeaderAccountItemName'
import HeaderMenuIcon from '../components/Header/HeaderMenuIcon'
import HeaderMobileMenu from '../components/Header/HeaderMobileMenu'
import HeaderMobileMenuWrapper from '../components/Header/HeaderMobileMenuWrapper'
import {AuthContext} from '../context/AuthContext'

const Header = () => {
	const [isOpen, setIsOpen] = React.useState(false)
	const handleIsOpen = () => setIsOpen(!isOpen)

	const auth = React.useContext(AuthContext)
	return (
		<>
			<HeaderWrapper>
				<HeaderContainer>
					<HeaderMenu>
						<HeaderMenuIcon onClick={handleIsOpen}>
							<span />
						</HeaderMenuIcon>

						<HeaderSideMenu>
							<HeaderMobileMenu isOpen={isOpen}>
								<HeaderMobileMenuWrapper>
									<HeaderStack>
										{headerData.headerLinks.map(
											({label, link}, idx) => (
												<HeaderStackItem
													to={link}
													key={idx}>
													{label}
												</HeaderStackItem>
											)
										)}
									</HeaderStack>

									<HeaderAccountInfo>
										<HeaderAccountInfoItem to='/'>
											<HeaderAccountIcon />
											<HeaderAccountItemName username>
												{headerData.accountName}
											</HeaderAccountItemName>
										</HeaderAccountInfoItem>
										<HeaderAccountInfoItem
											onClick={auth.logout}
											to='/'>
											<HeaderLogoutIcon />
											<HeaderAccountItemName>
												{headerData.logOutText}
											</HeaderAccountItemName>
										</HeaderAccountInfoItem>
									</HeaderAccountInfo>
								</HeaderMobileMenuWrapper>
							</HeaderMobileMenu>

							<HeaderLogoWrapper to='/'>
								<HeaderLogo />
							</HeaderLogoWrapper>
						</HeaderSideMenu>
					</HeaderMenu>
				</HeaderContainer>
			</HeaderWrapper>

			{isOpen && (
				<style
					dangerouslySetInnerHTML={{
						__html: `body {overflow: hidden}`
					}}
				/>
			)}
		</>
	)
}

export default Header
