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
import HeaderUserImage from '../components/Header/HeaderUserImage'
import HeaderMobileMenuWrapper from '../components/Header/HeaderMobileMenuWrapper'
import {AuthContext} from '../context/AuthContext'
import {UserContext} from '../context/UserContext'
import {useLocation} from 'react-router-dom'

const Header = () => {
	const [isOpen, setIsOpen] = React.useState(false)
	const handleIsOpen = () => setIsOpen(!isOpen)
	const location = useLocation()
	React.useEffect(() => {
		setIsOpen(false)
	}, [location])

	const {logout, isAuthenticated} = React.useContext(AuthContext)
	const {name, isAdmin, image} = React.useContext(UserContext)
	return (
		<>
			<HeaderWrapper>
				<HeaderContainer>
					{isAuthenticated && (
						<HeaderMenu>
							<HeaderMenuIcon onClick={handleIsOpen}>
								<span />
							</HeaderMenuIcon>

							<HeaderSideMenu>
								<HeaderMobileMenu isOpen={isOpen}>
									<HeaderMobileMenuWrapper>
										<HeaderStack>
											{[
												...headerData.headerLinks.map(
													({label, link}, idx) => (
														<HeaderStackItem
															to={link}
															key={idx}>
															{label}
														</HeaderStackItem>
													)
												),
												isAdmin ? (
													<HeaderStackItem
														to='/constructor'
														key='constructor'>
														Constructor
													</HeaderStackItem>
												) : null
											]}
										</HeaderStack>

										<HeaderAccountInfo>
											<HeaderAccountInfoItem to='/'>
												{image ? (
													<HeaderUserImage
														src={image}
													/>
												) : (
													<HeaderAccountIcon />
												)}
												<HeaderAccountItemName username>
													{name}
												</HeaderAccountItemName>
											</HeaderAccountInfoItem>
											<HeaderAccountInfoItem
												onClick={logout}
												to='/'>
												<HeaderLogoutIcon />
												<HeaderAccountItemName>
													{headerData.logOutText}
												</HeaderAccountItemName>
											</HeaderAccountInfoItem>
										</HeaderAccountInfo>
									</HeaderMobileMenuWrapper>
								</HeaderMobileMenu>
							</HeaderSideMenu>
						</HeaderMenu>
					)}
					<HeaderLogoWrapper to='/'>
						<HeaderLogo />
					</HeaderLogoWrapper>
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
