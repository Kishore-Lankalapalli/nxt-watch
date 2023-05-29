import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;

  align-items: Center;
  background-color: ${props => props.bgColor};
  height: 10vh;
  padding-left: 14px;
  padding-right: 14px;
  width: 100%;

  @media screen and (min-width: 768px) {
    padding-left: 45px;
    padding-right: 45px;
    height: 10vh;
    width: 100%;
  }
`

export const WebsiteLogoImage = styled.img`
  height: 20px;
  width: 100px;

  @media screen and (min-width: 576px) and (max-width: 768px) {
    height: 25px;
    width: 130px;
  }

  @media screen and (min-width: 768px) {
    height: 30px;
    width: 150px;
  }
`

export const NavButtonsContainer = styled.div`
  display: flex;

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`

export const NavButton = styled.button`
  border: none;
  background-color: transparent;
`

export const ProfileImage = styled.img`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    height: 30px;
    width: 30px;
    margin-right: 25px;
  }
`

export const LogoutButton = styled.button`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    height: 30px;
    width: 90px;
    background-color: transparent;
    border: 1px solid #3b82f6;
    color: #3b82f6;
    font-weight: bold;
    cursor: pointer;
  }
`

export const ThemeButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  outline: none;
`

export const LogoutPopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 350px;
  height: 170px;

  background-color: ${props => props.popBgColor};
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    width: 380px;
    height: 180px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

export const PopupHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => props.popupHeadColor};
`

export const LogoutButtonContainer = styled.div`
  display: flex;
  margin-top: 30px;
`

export const PopupCancelButton = styled.button`
  height: 35px;
  width: 80px;
  background-color: transparent;
  color: #94a3b8;
  border: 1px solid #94a3b8;
  margin-right: 30px;
  cursor: pointer;
  outline: none;
  @media screen and (min-width: 768px) {
    height: 40px;
  }
`

export const PopupLogoutButton = styled.button`
  height: 35px;
  width: 80px;
  background-color: #3b82f6;
  color: #fff;
  border-width: 0px;
  cursor: pointer;
  outline: none;
  @media screen and (min-width: 768px) {
    height: 40px;
  }
`

export const HamburgerButton = styled.button`
  border: none;
  background-color: transparent;
`

export const NavContainer = styled.div`
  height: 160px;
  width: 260px;
  background-color: ${props => props.navBgColor};
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  padding: 0px 20px 20px 30px;
  border-radius: 7px;
`

export const NavItemsContainer = styled.ul`
  padding-left: 0px;
  list-style-type: none;
`

export const NavItem = styled.li`
  font-family: 'Roboto';
  font-size: 17px;
  color: #fff;
  margin-bottom: 15px;
  font-weight: bold;
`
