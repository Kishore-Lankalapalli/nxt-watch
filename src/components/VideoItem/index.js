import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'

import NxtWatchContext from '../NxtWatchContext'

import {
  VideoItemContainer,
  VideoThumbnailImage,
  VideoItemDetailsContainer,
  VideoProfileImage,
  VideoItemTextContainer,
  VideoItemName,
  VideoItemDataAnalyticsContainer,
  VideoItemChannelNameText,
  VideoItemViewsText,
} from './styledComponents'

import './index.css'

function VideoItem(props) {
  const {item} = props

  const {channel, id, publishedAt, thumbnailUrl, title, viewsCount} = item

  const {name, profileImageUrl} = channel

  const years = formatDistanceToNow(new Date(publishedAt)).split(' ')
  const duration = years.slice(1, years.length).join(' ')

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {theme} = value

        const itemHeadingColor = theme ? '#f1f1f1' : '#1e293b'

        return (
          <VideoItemContainer>
            <Link className="link-element" to={`/videos/${id}`}>
              <VideoThumbnailImage alt="video thumbnail" src={thumbnailUrl} />
              <VideoItemDetailsContainer>
                <VideoProfileImage alt="channel logo" src={profileImageUrl} />
                <VideoItemTextContainer>
                  <VideoItemName itemColor={itemHeadingColor}>
                    {title}
                  </VideoItemName>
                  <VideoItemDataAnalyticsContainer>
                    <VideoItemChannelNameText>{name}</VideoItemChannelNameText>
                    <VideoItemViewsText>
                      &#x2022; {viewsCount}
                    </VideoItemViewsText>
                    <VideoItemViewsText>
                      {' '}
                      &#x2022; {duration} ago
                    </VideoItemViewsText>
                  </VideoItemDataAnalyticsContainer>
                </VideoItemTextContainer>
              </VideoItemDetailsContainer>
            </Link>
          </VideoItemContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default VideoItem
