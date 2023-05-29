import {Component} from 'react'
import {Route, Switch, BrowserRouter} from 'react-router-dom'

import Login from './components/Login'
import Home from './components/Home'
import VideoItemDetails from './components/VideoItemDetails'

import NxtWatchContext from './components/NxtWatchContext'
import ProtectedRoute from './components/ProtectedRoute'
import SavedVideos from './components/SavedVideos'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import NotFound from './components/NotFound'
import './App.css'

// Replace your code here

const activeItems = {
  initial: 'INITIAL',
  home: 'HOME',
  trending: 'TRENDING',
  gaming: 'GAMING',
  savedVideos: 'SAVEDVIDEOS',
}

class App extends Component {
  state = {
    activeTab: activeItems.home,
    theme: false,
    savedVideosList: [],
  }

  onChangeTab = item => {
    this.setState({activeTab: item})
  }

  addVideoToVideosList = video => {
    this.setState(prevState => ({
      savedVideosList: [...prevState.savedVideosList, video],
    }))
  }

  removeVideoFromVideosList = video => {
    const {savedVideosList} = this.state
    const filterVideos = savedVideosList.filter(item => item.id !== video.id)

    this.setState({savedVideosList: filterVideos})
  }

  onAddVideo = video => {
    const {savedVideosList} = this.state

    const videoPresent = savedVideosList.find(item => item.id === video.id)

    if (videoPresent === undefined) {
      this.addVideoToVideosList(video)
    } else {
      this.removeVideoFromVideosList(video)
    }
  }

  onThemeChange = () => {
    this.setState(prevState => ({
      theme: !prevState.theme,
    }))
  }

  render() {
    const {activeTab, theme, savedVideosList} = this.state

    console.log(savedVideosList)
    return (
      <NxtWatchContext.Provider
        value={{
          onChangeTab: this.onChangeTab,
          activeTab,
          onThemeChange: this.onThemeChange,
          theme,
          savedVideosList,
          onAddVideo: this.onAddVideo,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <Route exact component={NotFound} />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
