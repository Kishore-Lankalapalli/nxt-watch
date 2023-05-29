import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {IoIosClose} from 'react-icons/io'
import {BiSearchAlt2} from 'react-icons/bi'

import Header from '../Header'
import VideoItem from '../VideoItem'
import Sidebar from '../Sidebar'

import NxtWatchContext from '../NxtWatchContext'
import SavedVideos from '../SavedVideos'

import {
  HomeBgContainer,
  BannerContainer,
  BannerTextContainer,
  BannerWebsiteLogoImage,
  BannerOfferText,
  BannerGetItNowButton,
  CrossButton,
  SearchContainer,
  SearchInput,
  SearchButton,
  HomeMainContainer,
  HomeVideoContainer,
  VideosListsContainer,
  NoVideosFoundContainer,
  NoSearchResultsImage,
  NoSearchResultsHeading,
  NoSearchResultsSuggestionText,
  RetryButton,
  HomeFailureContainer,
  FailureImage,
} from './styledComponents'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

const activeItems = {
  initial: 'INITIAL',
  home: 'HOME',
  trending: 'TRENDING',
  gaming: 'GAMING',
  savedVideos: 'SAVEDVIDEOS',
}

class Home extends Component {
  state = {
    videosList: [],
    showBanner: true,
    searchInput: '',
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getVideosList()
  }

  getVideosList = async () => {
    const {searchInput} = this.state

    this.setState({apiStatus: apiStatusConstants.inProgress})
    const videosUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`

    const jwtToken = Cookies.get('jwt_token')

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(videosUrl, options)

    if (response.ok) {
      const data = await response.json()
      const {videos} = data
      const updatedData = videos.map(item => ({
        id: item.id,
        channel: {
          name: item.channel.name,
          profileImageUrl: item.channel.profile_image_url,
        },

        publishedAt: item.published_at,
        thumbnailUrl: item.thumbnail_url,
        title: item.title,
        viewsCount: item.view_count,
      }))

      this.setState({
        videosList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderLoaderSpinner = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#4f46e5" height="50" width="50" />
    </div>
  )

  noVideosFound = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {theme} = value

        return (
          <NoVideosFoundContainer>
            <NoSearchResultsImage
              alt="no videos"
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
            />
            <NoSearchResultsHeading
              noVideoTextColor={theme ? '#f9f9f9' : '#1e293b'}
            >
              No Search Results Found
            </NoSearchResultsHeading>
            <NoSearchResultsSuggestionText
              suggestionColor={theme ? '#94a3b8' : '#64748b'}
            >
              Try different key words or remove search filter
            </NoSearchResultsSuggestionText>
            <RetryButton onClick={this.getVideosList}>Retry</RetryButton>
          </NoVideosFoundContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderFailureView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {theme} = value

        return (
          <HomeFailureContainer>
            <FailureImage
              alt="failure view"
              src={
                theme
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
              }
            />{' '}
            <NoSearchResultsHeading
              noVideoTextColor={theme ? '#f9f9f9' : '#1e293b'}
            >
              Oops! Something Went Wrong
            </NoSearchResultsHeading>
            <NoSearchResultsSuggestionText
              suggestionColor={theme ? '#94a3b8' : '#64748b'}
            >
              We are having some trouble to complete your request.Please try
              again.
            </NoSearchResultsSuggestionText>
            <RetryButton onClick={this.getVideosList}>Retry</RetryButton>
          </HomeFailureContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  onSearchVideo = e => {
    this.setState({searchInput: e.target.value})
  }

  renderHomeVideos = () => {
    const {videosList} = this.state

    return (
      <VideosListsContainer>
        {videosList.map(item => (
          <VideoItem item={item} key={item.id} />
        ))}
      </VideosListsContainer>
    )
  }

  renderHomeView = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoaderSpinner()

      case apiStatusConstants.success:
        return this.renderHomeVideos()

      case apiStatusConstants.failure:
        return this.renderFailureView()

      default:
        return null
    }
  }

  renderHomeVideosContainer = () => {
    const {videosList, searchInput, apiStatus, showBanner} = this.state

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {theme} = value

          const homeBg = theme ? '#181818' : '#f9f9f9'

          const buttonBgColor = theme ? '#424242' : '#f1f1f1'

          const buttonColor = theme ? '#ebebeb' : '#212121'

          const searchBorderColor = theme ? '#909090' : ''

          return (
            <HomeMainContainer>
              {showBanner ? (
                <BannerContainer data-testid="banner">
                  <BannerTextContainer>
                    <BannerWebsiteLogoImage
                      alt="nxt watch logo"
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                    />
                    <BannerOfferText>BBuy Nxt Watch Premium</BannerOfferText>
                    <BannerGetItNowButton>GET IT NOW</BannerGetItNowButton>
                  </BannerTextContainer>

                  <CrossButton
                    data-testid="close"
                    onClick={() => this.setState({showBanner: false})}
                  >
                    <IoIosClose className="close-icon" />
                  </CrossButton>
                </BannerContainer>
              ) : (
                ''
              )}

              <HomeVideoContainer data-testid="home" homeBgColor={homeBg}>
                <SearchContainer>
                  <SearchInput
                    borderColor={searchBorderColor}
                    placeholder="Search"
                    type="search"
                    value={searchInput}
                    data-testid="searchButton"
                    onChange={this.onSearchVideo}
                  />
                  <SearchButton
                    btnColor={buttonColor}
                    btnBgColor={buttonBgColor}
                    borderColor={searchBorderColor}
                    onClick={this.getVideosList}
                  >
                    <BiSearchAlt2 className="search-icon" />
                  </SearchButton>
                </SearchContainer>

                {videosList.length === 0 &&
                apiStatus === apiStatusConstants.success
                  ? this.noVideosFound()
                  : this.renderHomeView()}
              </HomeVideoContainer>
            </HomeMainContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }

  render() {
    const {videosList, apiStatus, showBanner} = this.state

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {theme} = value

          const homeBg = theme ? '#181818' : '#f9f9f9'

          const buttonBgColor = theme ? '#424242' : '#f1f1f1'

          const buttonColor = theme ? '#ebebeb' : '#212121'

          const searchBorderColor = theme ? '#909090' : ''

          return (
            <>
              <Header />
              <HomeBgContainer>
                <Sidebar />
                {this.renderHomeVideosContainer()}
              </HomeBgContainer>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Home
