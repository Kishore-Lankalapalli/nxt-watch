import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {SiTinder} from 'react-icons/si'
import Header from '../Header'
import Sidebar from '../Sidebar'
import {
  TrendingRouteContainer,
  TrendingContainer,
  TrendingTitleContainer,
  TrendingIconContainer,
  TrendingVideosTitle,
  TrendingVideosListContainer,
  LoaderContainer,
  FailureContainer,
  FailureImage,
  FailureText,
  FailureHeading,
  FailureRetryButton,
} from './styledComponents'
import NxtWatchContext from '../NxtWatchContext'
import SavedVideoItem from '../SavedVideoItem'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Trending extends Component {
  state = {
    trendingVideos: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getTrendingVideosList()
  }

  getTrendingVideosList = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')

    const trendingVideosUrl = 'https://apis.ccbp.in/videos/trending'

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(trendingVideosUrl, options)

    if (response.ok) {
      const data = await response.json()

      const updatedData = data.videos.map(vid => ({
        channel: {
          name: vid.channel.name,
          profileImageUrl: vid.channel.profile_image_url,
        },
        id: vid.id,
        publishedAt: vid.published_at,
        thumbnailUrl: vid.thumbnail_url,
        title: vid.title,
        viewsCount: vid.view_count,
      }))

      this.setState({
        trendingVideos: updatedData,
        apiStatus: apiStatusConstants.success,
      })

      console.log(updatedData)
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
            <FailureRetryButton onClick={this.getTrendingVideosList}>
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

  renderTrendingVideos = () => {
    const {trendingVideos} = this.state

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {theme} = value

          const titleContBg = theme ? '#181818' : '#ebebeb'

          const saveIconBgColor = theme ? '#0f0f0f' : '#f1f5f9'

          const titleColor = theme ? '#f1f5f9' : '#1e293b'

          return (
            <TrendingContainer
              data-testid="trending"
              trendingVideosBgColor={theme ? '#0f0f0f' : '#f9f9f9'}
            >
              <TrendingTitleContainer titleContainerBgColor={titleContBg}>
                <TrendingIconContainer iconBgColor={saveIconBgColor}>
                  <SiTinder className="tinder-icon" />
                </TrendingIconContainer>
                <TrendingVideosTitle titleColor={titleColor}>
                  Trending
                </TrendingVideosTitle>
              </TrendingTitleContainer>
              <TrendingVideosListContainer>
                {trendingVideos.map(item => (
                  <SavedVideoItem item={item} key={item.id} />
                ))}
              </TrendingVideosListContainer>
            </TrendingContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }

  renderTrendingView = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoaderSpinner()
      case apiStatusConstants.success:
        return this.renderTrendingVideos()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    const {trendingVideos} = this.state
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
              <TrendingRouteContainer>
                <Sidebar />
                {this.renderTrendingView()}
              </TrendingRouteContainer>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Trending
