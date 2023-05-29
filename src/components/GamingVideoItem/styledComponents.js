import styled from 'styled-components'

export const GamingVideoItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  width: 50%;

  padding-left: 10px;
  padding-right: 10px;

  margin-bottom: 30px;

  @media screen and (min-width: 576px) and (max-width: 768px) {
    width: 30%;
  }

  @media screen and (min-width: 768px) {
    width: 280px;
  }
`
export const GamingVideoImage = styled.img`
  height: 180px;
  width: 100%;

  @media screen and (min-width: 768px) {
    height: 320px;
  }
`

export const VideoTitle = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  color: ${props => props.titleColor};
  font-weight: bold;
`

export const ViewsCountText = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: ${props => props.viewsColor};

  font-weight: bold;
  margin-bottom: 3px;
  margin-top: 0px;

  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const ViewsWorldWideText = styled(ViewsCountText)`
  margin-top: 0px;

  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const LargeViewsCount = styled(ViewsCountText)`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }
`
