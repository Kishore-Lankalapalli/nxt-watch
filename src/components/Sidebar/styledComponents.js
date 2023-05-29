import styled from 'styled-components'

export const SidebarContainer = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 15%;
    padding: 30px 0px 30px 0px;

    background-color: ${props => props.sidebarBgColor};
    flex-shrink: 0;
    // height: 100vh;
  }
`

export const TabsListContainer = styled.ul`
  list-style-type: none;
  padding-left: 0px;
`

export const TabItem = styled.li`
  height: 40px;
  display: flex;
  align-items: center;
  background-color: ${props => props.bgColor};
  padding-left: 20px;
  cursor: pointer;
  outline: none;
  margin-bottom: 7px;
  width: 100%;
`

export const TabItemText = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: ${props => props.color};
  font-weight: ${props => props.fontWeight};
`

export const ContactListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  padding-left: 20px;
`

export const ContactUsHeading = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  color: ${props => props.contactColor};
`

export const SocialMediaIconsContainer = styled.div`
  display: flex;

  margin-top: 10px;
  margin-bottom: 10px;
`

export const SocialMediaImage = styled.img`
  height: 35px;
  width: 35px;
  border-radius: 40px;
  margin-right: 10px;
`

export const SocialMediaDescription = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: ${props => props.contactColor};
  font-weight: 501;
  line-height: 25px;
`
