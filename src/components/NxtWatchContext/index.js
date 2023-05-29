import React from 'react'

const activeItems = {
  initial: 'INITIAL',
  home: 'HOME',
  trending: 'TRENDING',
  gaming: 'GAMING',
  savedVideos: 'SAVEDVIDEOS',
}

const NxtWatchContext = React.createContext({
  activeTab: activeItems.home,
  onChangeTab: () => {},
  theme: false,
  onThemeChange: () => {},
  savedVideosList: [
    {
      id: 1,
      thumbnailUrl:
        'https://assets.ccbp.in/frontend/react-js/nxt-watch/ibc-sol-1-img.png',

      title:
        'Sehwag shares his batting experience in iB Cricket | iB Cricket Super Over League',

      viewsCount: '1.4K',
      channel: {
        name: 'iB Cricket',
        profileImageUrl:
          'https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-cricket-img.png',
        subscriberCount: '4.13K',
      },

      description:
        'Destructive opening batsman, Virender Sehwag was impressed by iB Cricket, as he prepared himself up for the world’s first VR Cricket League, iB Cricket Super Over League.',

      publishedAt: 'Apr 19, 2019',
    },
    {
      id: 2,
      thumbnailUrl:
        'https://assets.ccbp.in/frontend/react-js/nxt-watch/ibc-sol-1-img.png',

      title:
        'Sehwag shares his batting experience in iB Cricket | iB Cricket Super Over League',

      viewsCount: '1.4K',
      channel: {
        name: 'iB Cricket',
        profileImageUrl:
          'https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-cricket-img.png',
        subscriberCount: '4.13K',
      },
      description:
        'Destructive opening batsman, Virender Sehwag was impressed by iB Cricket, as he prepared himself up for the world’s first VR Cricket League, iB Cricket Super Over League.',

      publishedAt: 'Apr 19, 2019',
    },
  ],
  onAddVideo: () => {},
  onRemoveVideo: () => {},
})

export default NxtWatchContext
