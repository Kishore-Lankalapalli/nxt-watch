import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {SiYoutubegaming} from 'react-icons/si'
import NxtWatchContext from '../NxtWatchContext'
import Header from '../Header'
import Sidebar from '../Sidebar'
import GamingVideoItem from '../GamingVideoItem'
import {
  GamingVideoRoute,
  GamingVideosContainer,
  GamingTitleContainer,
  GamingIconContainer,
  GamingVideosTitle,
  GamingVideosListContainer,
  LoaderContainer,
  FailureContainer,
  FailureHeading,
  FailureText,
  FailureRetryButton,
  FailureImage,
} from './styledComponents'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Gaming extends Component {
  state = {
    gamingVideos: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const gamingVideosUrl = 'https://apis.ccbp.in/videos/gaming'

    const jwtToken = Cookies.get('jwt_token')

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(gamingVideosUrl, options)

    if (response.ok) {
      const data = await response.json()

      const gamingVideos = data.videos.map(vid => ({
        id: vid.id,
        thumbnailUrl: vid.thumbnail_url,
        title: vid.title,
        viewsCount: vid.view_count,
      }))

      this.setState({gamingVideos, apiStatus: apiStatusConstants.success})
      console.log(gamingVideos)
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderFailureView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {theme, activeTab} = value

        return (
          <FailureContainer failureBgColor={theme ? '#0f0f0f' : '#f9f9f9'}>
            <FailureImage
              alt="failure view"
              src={
                theme === false
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
              }
            />

            <FailureHeading failureHeading={theme ? '#f9f9f9' : '#1e293b'}>
              Oops! Something Went Wrong
            </FailureHeading>
            <FailureText suggestionColor={theme ? '#94a3b8' : '#64748b'}>
              We are having some trouble to complete your request.Please try
              again.{' '}
            </FailureText>
            <FailureRetryButton onClick={this.getGamingVideos}>
              Retry{' '}
            </FailureRetryButton>
          </FailureContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderLoaderSpinner = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {theme} = value

        return (
          <LoaderContainer
            loaderBgColor={theme ? '#0f0f0f' : '#f9f9f9'}
            data-testid="loader"
          >
            <Loader type="ThreeDots" color="#4f46e5" height="50" width="50" />
          </LoaderContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderGamingVideos = () => {
    const {gamingVideos} = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {theme} = value

          const titleContBg = theme ? '#181818' : '#ebebeb'

          const saveIconBgColor = theme ? '#0f0f0f' : '#f1f5f9'

          const titleColor = theme ? '#f1f5f9' : '#1e293b'

          return (
            <GamingVideosContainer
              data-testid="gaming"
              gamingBgColor={theme ? '#0f0f0f' : '#f9f9f9'}
            >
              <GamingTitleContainer titleContainerBgColor={titleContBg}>
                <GamingIconContainer iconBgColor={saveIconBgColor}>
                  <SiYoutubegaming className="gaming-icon" />
                </GamingIconContainer>

                <GamingVideosTitle titleColor={titleColor}>
                  Gaming
                </GamingVideosTitle>
              </GamingTitleContainer>
              <GamingVideosListContainer>
                {gamingVideos.map(item => (
                  <GamingVideoItem item={item} key={item.id} />
                ))}
              </GamingVideosListContainer>
            </GamingVideosContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }

  renderGamingView = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoaderSpinner()
      case apiStatusConstants.success:
        return this.renderGamingVideos()
      case apiStatusConstants.failure:
        return this.renderFailureView()

      default:
        return null
    }
  }

  render() {
    const {gamingVideos} = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {theme} = value

          const titleContBg = theme ? '#181818' : '#ebebeb'

          const saveIconBgColor = theme ? '#0f0f0f' : '#f1f5f9'

          const titleColor = theme ? '#f1f5f9' : '#1e293b'

          return (
            <>
              <Header />
              <GamingVideoRoute>
                <Sidebar />
                {this.renderGamingView()}
              </GamingVideoRoute>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Gaming
