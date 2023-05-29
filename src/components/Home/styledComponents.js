import styled from 'styled-components'

export const HomeBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

export const SidebarContainer = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 15%;
    height: 100vh;
    padding: 30px 0px 30px 0px;
    background-color: ${props => props.sidebarBgColor};
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

export const ContactUsHeading = styled.h1`
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
export const HomeMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.homeBgColor};

  @media screen and (min-width: 768px) {
    width: 85%;
    height: 100vh;
    overflow: auto;
  }
`
export const BannerContainer = styled.div`
  padding: 30px 20px 30px 20px;
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 576px) and (max-width: 768px) {
    background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
    background-size: cover;
    width: 100%;
    padding: 30px 30px 30px 30px;
  }

  @media screen and (min-width: 768px) {
    background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
    background-size: cover;
    padding-left: 20px;
    padding-top: 50px;
    padding-bottom: 50px;
    background-position: right 0px;
  }
`

export const HomeVideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.homeBgColor};
`

export const BannerTextContainer = styled.div`
  width: 70%;

  @media screen and (min-width: 768px) {
    width: 40%;
  }
`
export const BannerWebsiteLogoImage = styled.img`
  height: 30px;
  width: 120px;

  @media screen and (min-width: 768px) {
    height: 35px;
    width: 130px;
  }
`

export const BannerOfferText = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  color: #1e293b;
  text-transform: capitalize;
  line-height: 35px;
  margin-top: 10px;
  font-weight: 500;

  @media screen and (min-width: 768px) {
    font-size: 23px;
    font-weight: 500;
  }
`
export const BannerGetItNowButton = styled.button`
  height: 40px;
  width: 120px;
  background-color: transparent;
  border: 1px solid #1e293b;
  color: #1e293b;
  text-transform: capitalize;
  font-weight: bold;
  font-family: 'Roboto';
  font-size: 16px;
  margin-top: 25px;

  @media screen and (min-width: 768px) {
    width: 110px;
    height: 40px;
    font-size: 15px;
    margin-top: 50px;
    border: 1px solid #1e293b;
  }
`
export const CrossButton = styled.button`
  border: none;
  background-color: transparent;
  align-self: flex-start;

  @media screen and (min-width: 768px) {
    align-self: flex-start;
  }
`

export const SearchContainer = styled.div`
  margin-left: 20px;
  margin-right: 20px;
  display: flex;
  width: 90%;
  height: 35px;
  margin-bottom: 20px;
  margin-top: 20px;
  border-width: 0px;

  @media screen and (min-width: 576px) and (max-width: 768px) {
    width: 450px;
  }
  @media screen and (min-width: 768px) {
    margin-left: 20px;

    width: 600px;
    flex-shrink: 0;
  }
`

export const SearchInput = styled.input`
  width: 80%;
  height: 100%;
  padding-left: 10px;
  font-family: 'Roboto';
  font-size: 15px;
  color: #94a3b8;
  background-color: transparent;
  border-width: 0px;
  border: 1px solid ${props => props.borderColor};

  @media screen and (min-width: 576px) and (max-width: 768px) {
    width: 85%;
  }
`

export const SearchButton = styled.button`
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.btnBgColor};

  color: ${props => props.btnColor};
  border: 1px solid ${props => props.borderColor};
  @media screen and (min-width: 576px) and (max-width: 768px) {
    width: 15%;
  }
  @media screen and (min-width: 768px) {
    width: 15%;
  }
`

export const VideosListsContainer = styled.ul`
  list-style-type: none;
  width: 100%;
  padding-left: 0px;
  @media screen and (min-width: 576px) and (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  @media screen and (min-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding-left: 20px;
  }
`

export const NoVideosFoundContainer = styled.div`
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const NoSearchResultsImage = styled.img`
  height: 150px;
  width: 200px;
`

export const NoSearchResultsHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => props.noVideoTextColor};
  text-align: center;
`

export const NoSearchResultsSuggestionText = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: ${props => props.suggestionColor};
  margin-top: 0px;
  font-weight: bold;
  text-align: center;
`

export const RetryButton = styled.button`
  height: 36px;
  width: 80px;
  border-width: 0px;
  background-color: #4f46e5;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
`

export const HomeFailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60vh;
`
export const FailureImage = styled.img`
  height: 160px;
  width: 220px;
`
