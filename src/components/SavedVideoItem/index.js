import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'

import NxtWatchContext from '../NxtWatchContext'

import {
  SavedVideoItemContainer,
  ThumbnailImage,
  VideoItemDetailsContainer,
  ProfileImage,
  VideoItemTitleContainer,
  VideoTitle,
  VideoViewsDateContainer,
  ChannelName,
  ViewsText,
} from './styledComponents'
import './index.css'

const SavedVideoItem = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {theme} = value

      const {item} = props

      const {thumbnailUrl, id, title, viewsCount, publishedAt} = item

      const {channel} = item

      const {profileImageUrl, name} = channel

      const videoViewsColor = theme ? '#94a3b8' : ' #64748b'

      const years = formatDistanceToNow(new Date(publishedAt))
        .split(' ')
        .slice(1)
        .join(' ')

      return (
        <Link className="link-element" to={`/videos/${id}`}>
          <SavedVideoItemContainer>
            <ThumbnailImage alt="video thumbnail" src={thumbnailUrl} />
            <VideoItemDetailsContainer>
              <ProfileImage src={profileImageUrl} />
              <VideoItemTitleContainer>
                <VideoTitle videoTitle={theme ? '#ffffff' : '#1e293b'}>
                  {title}
                </VideoTitle>
                <VideoViewsDateContainer viewsColor={videoViewsColor}>
                  <ChannelName>{name}</ChannelName>
                  <ViewsText> &#x2022; {viewsCount} views</ViewsText>
                  <ViewsText> &#x2022; {years} ago</ViewsText>
                </VideoViewsDateContainer>
              </VideoItemTitleContainer>
            </VideoItemDetailsContainer>
          </SavedVideoItemContainer>
        </Link>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default SavedVideoItem
