import {Link} from 'react-router-dom'
import NxtWatchContext from '../NxtWatchContext'

import {
  GamingVideoItemContainer,
  GamingVideoImage,
  VideoTitle,
  ViewsCountText,
  ViewsWorldWideText,
  LargeViewsCount,
} from './styledComponents'
import './index.css'

const GamingVideoItem = props => {
  const re = 0
  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {theme} = value

        const {item} = props

        const {thumbnailUrl, title, viewsCount, id} = item

        return (
          <GamingVideoItemContainer>
            <Link className="gaming-link-element" to={`/videos/${id}`}>
              <GamingVideoImage alt="video thumbnail" src={thumbnailUrl} />
              <VideoTitle titleColor={theme ? '#f1f5f9' : '#1e293b'}>
                {title}
              </VideoTitle>
              <ViewsCountText viewsColor={theme ? '#94a3b8' : '#475569'}>
                {viewsCount} Watching
              </ViewsCountText>
              <ViewsWorldWideText viewsColor={theme ? '#94a3b8' : '#475569'}>
                Worldwide
              </ViewsWorldWideText>
              <LargeViewsCount viewsColor={theme ? '#94a3b8' : '#475569'}>
                {' '}
                {viewsCount} Watching Worldwide
              </LargeViewsCount>
            </Link>
          </GamingVideoItemContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default GamingVideoItem
