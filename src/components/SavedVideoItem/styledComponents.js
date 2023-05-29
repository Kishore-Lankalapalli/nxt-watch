import styled from 'styled-components'

export const SavedVideoItemContainer = styled.li`
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 576px) and (max-width: 768px) {
    flex-direction: row;

    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 70px;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    margin-bottom: 80px;
  }
`

export const ThumbnailImage = styled.img`
  width: 100%;
  height: 200px;

  @media screen and (min-width: 576px) and (max-width: 768px) {
    width: 60%;
    height: 160px;
    margin-top: 10px;
  }

  @media screen and (min-width: 768px) {
    width: 400px;
  }
`

export const VideoItemDetailsContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 15px 0px 15px;

  @media screen and (min-width: 575px) and (max-width: 768px) {
    align-items: flex-start;
    padding-top: 0px;
  }

  @media screen and (min-width: 768px) {
    align-items: flex-start;
    width: 40%;
  }
`

export const ProfileImage = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 35px;
  margin-right: 10px;

  @media screen and (min-width: 575px) {
    display: none;
  }
`

export const VideoItemTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 575px) {
  }
`

export const VideoTitle = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: ${props => props.videoTitle};
  line-height: 22px;
  margin-bottom: 0px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 30px;
  }
`

export const VideoViewsDateContainer = styled.div`
  display: flex;
  margin-top: 0px;
  color: ${props => props.viewsColor};
  font-weight: bold;
`

export const ChannelName = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  margin-right: 6px;
  @media screen and (min-width: 575px) and (max-width: 768px) {
    font-size: 13px;
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`

export const ViewsText = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  margin-right: 6px;
  @media screen and (min-width: 575px) and (max-width: 768px) {
    font-size: 13px;
  }
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`
