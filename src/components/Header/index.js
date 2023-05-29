import {withRouter, Link} from 'react-router-dom'

import Cookies from 'js-cookie'

import Popup from 'reactjs-popup'

import {FaMoon} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut} from 'react-icons/fi'
import {HiOutlineSun} from 'react-icons/hi'

import {
  HeaderContainer,
  WebsiteLogoImage,
  NavButtonsContainer,
  NavButton,
  ProfileImage,
  LogoutButton,
  ThemeButton,
  LogoutPopupContainer,
  PopupHeading,
  LogoutButtonContainer,
  PopupLogoutButton,
  PopupCancelButton,
  HamburgerButton,
  NavContainer,
  NavItemsContainer,
  NavItem,
} from './styledComponents'
import NxtWatchContext from '../NxtWatchContext'
import './index.css'

const Header = props => {
  const onLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props

    history.replace('/login')
    console.log(props)
  }

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {theme, onThemeChange, onChangeTab} = value

        const headerBgColor = theme ? '#212121' : '#f9f9f9'

        const websiteLogo = theme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

        return (
          <HeaderContainer bgColor={headerBgColor}>
            <Link className="link-element" to="/">
              <NavButton onClick={() => onChangeTab('HOME')}>
                <WebsiteLogoImage alt="website logo" src={websiteLogo} />
              </NavButton>
            </Link>

            <NavButtonsContainer>
              <ThemeButton data-testid="theme" onClick={() => onThemeChange()}>
                {theme ? (
                  <HiOutlineSun className="sun-icon" />
                ) : (
                  <FaMoon className="icon" />
                )}
              </ThemeButton>
              <Popup
                trigger={
                  <HamburgerButton>
                    <GiHamburgerMenu
                      className={theme ? 'dark-moon-icon' : 'moon-icon'}
                    />
                  </HamburgerButton>
                }
              >
                <NavContainer navBgColor={theme ? '#000000' : '#313131'}>
                  <NavItemsContainer>
                    <Link className="link-element" to="/">
                      <NavItem>Home</NavItem>
                    </Link>
                    <Link className="link-element" to="/trending">
                      <NavItem>Trending</NavItem>
                    </Link>
                    <Link className="link-element" to="/gaming">
                      <NavItem>Gaming</NavItem>
                    </Link>
                    <Link className="link-element" to="/saved-videos">
                      <NavItem>Saved Videos</NavItem>
                    </Link>
                  </NavItemsContainer>
                </NavContainer>
              </Popup>

              <ProfileImage
                alt="profile"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              />

              <Popup
                position="center center"
                modal
                trigger={<LogoutButton>Logout</LogoutButton>}
              >
                {cancelLogoutContainer => (
                  <LogoutPopupContainer
                    popBgColor={theme ? '#212121' : '#ffffff'}
                  >
                    <PopupHeading
                      popupHeadColor={theme ? '#f1f1f1' : ' #00306e'}
                    >
                      Are you sure want to Logout?
                    </PopupHeading>
                    <LogoutButtonContainer>
                      <PopupCancelButton
                        onClick={() => cancelLogoutContainer()}
                      >
                        Cancel
                      </PopupCancelButton>
                      <PopupLogoutButton onClick={onLogout}>
                        Confirm
                      </PopupLogoutButton>
                    </LogoutButtonContainer>
                  </LogoutPopupContainer>
                )}
              </Popup>

              <Popup
                trigger={
                  <FiLogOut
                    className={theme ? 'dark-moon-icon' : 'moon-icon'}
                  />
                }
                modal
                position="center center"
              >
                {cancel => (
                  <LogoutPopupContainer
                    popBgColor={theme ? '#212121' : '#ffffff'}
                  >
                    <PopupHeading
                      popupHeadColor={theme ? '#f1f1f1' : ' #00306e'}
                    >
                      Are you sure want to Logout?
                    </PopupHeading>
                    <LogoutButtonContainer>
                      <PopupCancelButton onClick={() => cancel()}>
                        Cancel
                      </PopupCancelButton>
                      <PopupLogoutButton onClick={onLogout}>
                        Confirm
                      </PopupLogoutButton>
                    </LogoutButtonContainer>
                  </LogoutPopupContainer>
                )}
              </Popup>
            </NavButtonsContainer>
          </HeaderContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default withRouter(Header)
