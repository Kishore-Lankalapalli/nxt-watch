import styled from 'styled-components'

export const SavedVideosRoute = styled.div`
  width: 100%;
  @media screen and (min-width: 768px) {
    display: flex;
    width: 100%;
  }
`

export const SavedVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.savedVideosBgColor};
  width: 100%;
  min-height: 100vh;
  @media screen and (min-width: 768px) {
    width: 85%;
  }
`

export const SavedVideosTitleContainer = styled.div`
  height: 15vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${props => props.titleContainerBgColor};
  padding-left: 30px;
`

export const SaveIconContainer = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 40px;
  background-color: ${props => props.iconBgColor};

  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  @media screen and (min-width: 768px) {
    height: 70px;
    width: 70px;
    border-radius: 70px;
  }
`

export const SavedVideosTitle = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  color: ${props => props.titleColor};

  @media screen and (min-width: 768px) {
    font-size: 23px;
    font-weight: bolder;
  }
`

export const SavedVideosListContainer = styled.ul`
  padding-left: 0px;
  list-style-type: none;
  width: 100%;

  @media screen and (min-width: 768px) {
    padding: 30px 20px 10px 40px;
    width: 100%;
  }
`

export const NoSavedVideosContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.noSavedVideosContainer};
  width: 100%;
`

export const NoVideoImage = styled.img`
  height: 230px;
  width: 80%;

  @media screen and (min-width: 768px) {
    width: 500px;
    height: 250px;
  }
`

export const NoSavedVideosText = styled.h1`
  font-family: 'Roboto';
  font-size: 24px;
  color: ${props => props.textColor};
  margin-top: 20px;
`

export const SaveSuggestionText = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: ${props => props.suggestionColor};
  text-align: center;
  font-weight: 400;
  margin-top: 0px;
`
