import styled from 'styled-components'

export const VideoItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`

export const VideoItemDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    width: 85%;
    height: 130vh;

    padding: 40px 30px 20px 30px;
    background-color: ${props => props.videoItemBgColor};
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
  }
`

export const VideoPlayerContainer = styled.div`
  height: 270px;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 100%;
    height: 550px;
  }
`

export const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 13px 20px 13px;
  background-color: ${props => props.bgColor};
`

export const VideoTitleText = styled.h1`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => props.titleColor};
  line-height: 30px;
  font-weight: 400;
  margin-right: 7px;
`

export const VideoItemViewsLikeContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
  }
`

export const VideoItemViewsDateContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`

export const VideoViewsContainer = styled.div`
  display: flex;
`

export const VideoViewsText = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  color: ${props => props.viewsColor};
  font-weight: bold;
  margin-right: 13px;
`

export const VideoPublishedDateText = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  color: ${props => props.dateColor};
  font-weight: bold;
`

export const ResponseButtonsContainer = styled.div`
  display: flex;
  padding-left: 0px;
`

export const LikeButton = styled.button`
  border: none;
  background-color: transparent;
  color: ${props => props.likeColor};
  font-weight: bold;

  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 15px;
  cursor: pointer;
  outline: none;
`

export const LikeText = styled.p`
  font-family: 'Roboto';
  font-size: 15px;

  @media screen and (min-width: 768px) {
    font-size: 17px;
  }
`

export const HrLine = styled.hr`
  border: 1px solid ${props => props.brColor};
  width: 100%;
`

export const ChannelProfileContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
`

export const ProfileImage = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 45px;
  margin-right: 10px;
`

export const ChannelNameContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const ChannelName = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: ${props => props.channelColor};
  font-weight: bold;
`
export const SubscribersCountText = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: ${props => props.countColor};
  margin-top: 0px;
  font-weight: bold;
`

export const ChannelDescription = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  color: ${props => props.descriptionColor};
  line-height: 25px;

  @media screen and (min-width: 768px) {
    font-size: 15px;
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

export const LoaderContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.loaderBgColor};
`
