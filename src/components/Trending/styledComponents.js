import styled from 'styled-components'

export const TrendingRouteContainer = styled.div`
  width: 100%;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`

export const TrendingContainer = styled.div`
  background-color: ${props => props.trendingVideosBgColor};
  @media screen and (min-width: 768px) {
    height: 100vh;
    width: 85%;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
  }
`

export const TrendingTitleContainer = styled.div`
  flex-shrink: 0;
  height: 15vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${props => props.titleContainerBgColor};
  padding-left: 30px;
`

export const TrendingIconContainer = styled.div`
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

export const TrendingVideosTitle = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  color: ${props => props.titleColor};

  @media screen and (min-width: 768px) {
    font-size: 23px;
    font-weight: bolder;
  }
`

export const TrendingVideosListContainer = styled.ul`
  padding-left: 0px;

  @media screen and (min-width: 768px) {
    padding: 30px 30px 0px 40px;
  }
`
export const LoaderContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.loaderBgColor};
`
export const FailureContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.failureBgColor};

  width: 100%;
`
export const FailureImage = styled.img`
  height: 160px;
  width: 220px;
`

export const FailureHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => props.failureHeading};
`

export const FailureText = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: ${props => props.suggestionColor};
`

export const FailureRetryButton = styled.button`
  height: 35px;
  width: 80px;
  border-width: 0px;
  background-color: #4f46e5;
  color: #fff;
  cursor: pointer;
  outline: none;
  border-radius: 5px;
`
