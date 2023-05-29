import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'

import Loader from 'react-loader-spinner'

import Cookies from 'js-cookie'

import ReactPlayer from 'react-player'
import {BiLike, BiDislike} from 'react-icons/bi'
import {CgPlayListAdd} from 'react-icons/cg'

import Sidebar from '../Sidebar'
import NxtWatchContext from '../NxtWatchContext'
import Header from '../Header'

import {
  VideoItemDetailsContainer,
  VideoPlayerContainer,
  VideoDetailsContainer,
  VideoTitleText,
  VideoItemViewsLikeContainer,
  VideoItemViewsDateContainer,
  VideoViewsContainer,
  VideoViewsText,
  VideoPublishedDateText,
  LikeButton,
  ResponseButtonsContainer,
  LikeText,
  HrLine,
  ChannelProfileContainer,
  ProfileContainer,
  ProfileImage,
  ChannelNameContainer,
  ChannelName,
  SubscribersCountText,
  ChannelDescription,
  VideoItemContainer,
  HomeFailureContainer,
  FailureImage,
  NoSearchResultsHeading,
  NoSearchResultsSuggestionText,
  RetryButton,
  LoaderContainer,
} from './styledComponents'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoItemDetails extends Component {
  state = {
    videoDetails: {},
    channelDetails: {},
    isLiked: false,
    isDisliked: false,
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getVideoItemDetails()
  }

  getVideoItemDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params

    const jwtToken = Cookies.get('jwt_token')

    const videoItemDetailsUrl = `https://apis.ccbp.in/videos/${id}`

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(videoItemDetailsUrl, options)

    if (response.ok) {
      const video = await response.json()

      const updatedData = video.video_details

      console.log(updatedData)

      const data = {
        id: updatedData.id,
        title: updatedData.title,
        videoUrl: updatedData.video_url,
        thumbnailUrl: updatedData.thumbnail_url,

        description: updatedData.description,
        publishedAt: updatedData.published_at,
        viewsCount: updatedData.view_count,
        channel: {
          name: updatedData.channel.name,
          profileImageUrl: updatedData.channel.profile_image_url,
          subscribersCount: updatedData.channel.subscriber_count,
        },
      }

      const {channel} = data

      this.setState({
        videoDetails: data,
        channelDetails: channel,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

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
            <RetryButton onClick={this.getVideoItemDetails}>Retry</RetryButton>
          </HomeFailureContainer>
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
            className="loader-container"
            data-testid="loader"
          >
            <Loader type="ThreeDots" color="#4f46e5" height="50" width="50" />
          </LoaderContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderVideoDetails = () => {
    const {videoDetails, isLiked, isDisliked, channelDetails} = this.state

    const {
      id,
      videoUrl,
      title,
      channel,
      viewsCount,
      description,
      publishedAt,
    } = videoDetails

    const {name, profileImageUrl, subscribersCount} = channelDetails

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {theme, onAddVideo, savedVideosList} = value

          const viewsColor = theme ? '#64748b' : '#64748b'

          const titleColor = theme ? '#ebebeb' : '#1e293b'

          const onSaveVideo = () => {
            onAddVideo(videoDetails)
          }

          let isVideoSaved

          savedVideosList.forEach(item => {
            if (item.id === id) {
              isVideoSaved = true
            } else {
              isVideoSaved = false
            }
          })

          const saveColor = theme ? '#94a3b8' : '#475569'

          const likeColor = theme ? '#94a3b8' : '#475569'

          return (
            <VideoItemDetailsContainer
              data-testid="videoItemDetails"
              videoItemBgColor={theme ? '#0f0f0f' : '#f9f9f9'}
            >
              <VideoPlayerContainer>
                <ReactPlayer
                  height="100%"
                  width="100%"
                  url={videoUrl}
                  controls
                />
              </VideoPlayerContainer>
              <VideoDetailsContainer bgColor={theme ? '#0f0f0f' : '#f9f9f9'}>
                <VideoTitleText titleColor={titleColor}>{title}</VideoTitleText>
                <VideoItemViewsLikeContainer>
                  <VideoItemViewsDateContainer>
                    <VideoViewsContainer>
                      <VideoViewsText viewsColor={viewsColor}>
                        {viewsCount} views
                      </VideoViewsText>
                      <VideoPublishedDateText dateColor={viewsColor}>
                        &#x2022; {publishedAt}
                      </VideoPublishedDateText>
                    </VideoViewsContainer>
                    <ResponseButtonsContainer>
                      <LikeButton
                        type="button"
                        onClick={() =>
                          this.setState({isLiked: true, isDisliked: false})
                        }
                        likeColor={isLiked ? '#2563eb' : '#64748b'}
                      >
                        <BiLike className="like-icon" />
                        <LikeText>Like</LikeText>
                      </LikeButton>

                      <LikeButton
                        type="button"
                        onClick={() =>
                          this.setState({isLiked: false, isDisliked: true})
                        }
                        likeColor={isDisliked ? '#2563eb' : '#64748b'}
                      >
                        <BiDislike className="like-icon" />
                        <LikeText>Dislike</LikeText>
                      </LikeButton>

                      <LikeButton
                        onClick={onSaveVideo}
                        likeColor={isVideoSaved ? '#2563eb' : '#64748b'}
                      >
                        <CgPlayListAdd className="like-icon" />
                        <LikeText>{isVideoSaved ? 'Saved' : 'save'}</LikeText>
                      </LikeButton>
                    </ResponseButtonsContainer>
                  </VideoItemViewsDateContainer>
                </VideoItemViewsLikeContainer>
                <HrLine brColor={theme ? '#64748b' : '#cbd5e1'} />

                <ChannelProfileContainer>
                  <ProfileContainer>
                    <ProfileImage src={profileImageUrl} />
                    <ChannelNameContainer>
                      <ChannelName channelColor={theme ? '#f1f1f1' : '#181818'}>
                        {name}
                      </ChannelName>

                      <SubscribersCountText
                        countColor={theme ? '#64748b' : '#64748b'}
                      >
                        {subscribersCount} subscribers
                      </SubscribersCountText>
                    </ChannelNameContainer>
                  </ProfileContainer>
                  <ChannelDescription
                    descriptionColor={theme ? '#f1f5f9' : '#231f20'}
                  >
                    {description}
                  </ChannelDescription>
                </ChannelProfileContainer>
              </VideoDetailsContainer>
            </VideoItemDetailsContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }

  renderVideoItemDetails = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoaderSpinner()

      case apiStatusConstants.success:
        return this.renderVideoDetails()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {theme} = value

          return (
            <>
              <Header />
              <VideoItemContainer>
                <Sidebar />
                {this.renderVideoItemDetails()}
              </VideoItemContainer>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default VideoItemDetails
