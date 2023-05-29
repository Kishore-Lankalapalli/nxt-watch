import {Componnent} from 'react'
import {SiTinder} from 'react-icons/si'
import NxtWatchContext from '../NxtWatchContext'
import SavedVideoItem from '../SavedVideoItem'
import Header from '../Header'
import Sidebar from '../Sidebar'
import {
  SavedVideosRoute,
  SavedVideosContainer,
  SavedVideosTitleContainer,
  SaveIconContainer,
  SavedVideosTitle,
  SavedVideosListContainer,
  NoSavedVideosContainer,
  NoVideoImage,
  NoSavedVideosText,
  SaveSuggestionText,
} from './styledComponents'

import './index.css'

const NoSavedVideos = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {theme} = value

      return (
        <NoSavedVideosContainer
          noSavedVideosContainer={theme ? '#0f0f0f' : '#f9f9f9'}
        >
          <NoVideoImage
            alt="no saved videos"
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
          />
          <NoSavedVideosText textColor={theme ? '#f8fafc' : '#181818'}>
            No saved videos found
          </NoSavedVideosText>
          <SaveSuggestionText suggestionColor={theme ? '#f9f9f9' : ' #0f0f0f'}>
            You can save your videos while watching them
          </SaveSuggestionText>
        </NoSavedVideosContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

const SavedVideos = () => {
  const re = 9

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {savedVideosList, theme} = value

        const titleContBg = theme ? '#181818' : '#ebebeb'

        const saveIconBgColor = theme ? '#0f0f0f' : '#f1f5f9'

        const titleColor = theme ? '#f1f5f9' : '#1e293b'

        return (
          <>
            <Header />
            <SavedVideosRoute>
              <Sidebar />
              {savedVideosList.length === 0 ? (
                <NoSavedVideos />
              ) : (
                <SavedVideosContainer
                  data-testid="savedVideos"
                  savedVideosBgColor={theme ? '#0f0f0f' : '#f9f9f9'}
                >
                  <SavedVideosTitleContainer
                    titleContainerBgColor={titleContBg}
                  >
                    <SaveIconContainer iconBgColor={saveIconBgColor}>
                      <SiTinder className="tinder-icon" />
                    </SaveIconContainer>
                    <SavedVideosTitle titleColor={titleColor}>
                      Saved Videos
                    </SavedVideosTitle>
                  </SavedVideosTitleContainer>
                  <SavedVideosListContainer>
                    {savedVideosList.map(item => (
                      <SavedVideoItem item={item} />
                    ))}
                  </SavedVideosListContainer>
                </SavedVideosContainer>
              )}
            </SavedVideosRoute>
          </>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default SavedVideos
