import styled from 'styled-components'

export const VideoItemContainer = styled.li`
  margin-bottom: 15px;

  @media screen and (min-width: 576px) and (max-width: 768px) {
    width: 45%;
    margin: 10px;
  }
  @media screen and (min-width: 768px) {
    width: 25%;
    margin-right: 30px;
    margin-bottom: 35px;
  }
`

export const VideoThumbnailImage = styled.img`
  height: 180px;
  width: 100%;
  @media screen and (min-width: 576px) and (max-width: 768px) {
    height: 140px;
  }
`

export const VideoItemDetailsContainer = styled.div`
  display: flex;
  padding: 10px 15px 0px 15px;

  @media screen and (min-width: 576px) and (max-width: 768px) {
    padding-right: 3px;
  }
  @media screen and (min-width: 768px) {
    padding-right: 0px;
    padding-left: 0px;
  }
`

export const VideoProfileImage = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 40px;
  margin-right: 10px;
`

export const VideoItemTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const VideoItemName = styled.h1`
  font-family: 'Roboto';
  font-size: 13px;
  color: ${props => props.itemColor};
  line-height: 25px;
  margin-top: 0px;
  margin-bottom: 0px;
  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
`

export const VideoItemDataAnalyticsContainer = styled.div`
  margin-top: 0px;

  display: flex;
`

export const VideoItemChannelNameText = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: #64748b;
  margin-right: 10px;
  font-weight: bold;

  @media screen and (min-width: 768px) {
    font-size: 13px;
  }
`

export const VideoItemViewsText = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: #64748b;
  margin-right: 10px;
  font-weight: bold;
  @media screen and (min-width: 768px) {
    font-size: 13px;
  }
`
