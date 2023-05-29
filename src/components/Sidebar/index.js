import {Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {FaFire} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'

import NxtWatchContext from '../NxtWatchContext'

import {
  SidebarContainer,
  TabsListContainer,
  TabItem,
  TabItemText,
  ContactListContainer,
  ContactUsHeading,
  SocialMediaIconsContainer,
  SocialMediaImage,
  SocialMediaDescription,
} from './styledComponents'

import './index.css'

const activeItems = {
  initial: 'INITIAL',
  home: 'HOME',
  trending: 'TRENDING',
  gaming: 'GAMING',
  savedVideos: 'SAVEDVIDEOS',
}

const Sidebar = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {activeTab, theme, onChangeTab} = value

      const backgroudColor = theme ? '#212121' : '#f8fafc'

      const getActiveTabBgColor = () => {
        if (theme) {
          return '#313131'
        }
        return '#e2e8f0'
      }

      const tabItemTextColor = theme ? '#fff' : '#424242'

      const contactColor = theme ? '#fff' : '#00306e'

      return (
        <SidebarContainer sidebarBgColor={backgroudColor}>
          <TabsListContainer>
            <Link className="link-element" to="/">
              <TabItem
                bgColor={
                  activeTab === activeItems.home && getActiveTabBgColor()
                }
                onClick={() => onChangeTab(activeItems.home)}
              >
                <AiFillHome
                  className={
                    activeTab === activeItems.home ? 'active-icon' : 'home-icon'
                  }
                />
                <TabItemText
                  color={tabItemTextColor}
                  fontWeight={activeTab === activeItems.home ? 'bolder' : 500}
                >
                  Home
                </TabItemText>
              </TabItem>
            </Link>

            <Link className="link-element" to="/trending">
              <TabItem
                onClick={() => onChangeTab(activeItems.trending)}
                bgColor={
                  activeTab === activeItems.trending && getActiveTabBgColor()
                }
              >
                <FaFire
                  className={
                    activeTab === activeItems.trending
                      ? 'active-icon'
                      : 'home-icon'
                  }
                />
                <TabItemText
                  color={tabItemTextColor}
                  fontWeight={
                    activeTab === activeItems.trending ? 'bolder' : 500
                  }
                >
                  Trending
                </TabItemText>
              </TabItem>
            </Link>
            <Link className="link-element" to="/gaming">
              <TabItem
                onClick={() => onChangeTab(activeItems.gaming)}
                bgColor={
                  activeTab === activeItems.gaming && getActiveTabBgColor()
                }
              >
                <SiYoutubegaming
                  className={
                    activeTab === activeItems.gaming
                      ? 'active-icon'
                      : 'home-icon'
                  }
                />
                <TabItemText
                  color={tabItemTextColor}
                  fontWeight={activeTab === activeItems.gaming ? 'bolder' : 500}
                >
                  Gaming
                </TabItemText>
              </TabItem>
            </Link>
            <Link className="link-element" to="/saved-videos">
              <TabItem
                onClick={() => onChangeTab(activeItems.savedVideos)}
                bgColor={
                  activeTab === activeItems.savedVideos && getActiveTabBgColor()
                }
              >
                <CgPlayListAdd
                  className={
                    activeTab === activeItems.savedVideos
                      ? 'active-icon'
                      : 'home-icon'
                  }
                />
                <TabItemText
                  color={tabItemTextColor}
                  fontWeight={
                    activeTab === activeItems.savedVideos ? 'bolder' : 500
                  }
                >
                  Saved Videos
                </TabItemText>
              </TabItem>
            </Link>
          </TabsListContainer>
          <ContactListContainer>
            <ContactUsHeading contactColor={contactColor}>
              CONTACT US
            </ContactUsHeading>
            <SocialMediaIconsContainer>
              <SocialMediaImage
                alt="facebook logo"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png "
              />
              <SocialMediaImage
                alt="twitter logo"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png "
              />
              <SocialMediaImage
                alt="linked in logo"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png "
              />
            </SocialMediaIconsContainer>
            <SocialMediaDescription contactColor={contactColor}>
              Enjoy! Now to see your channels and recommendations!
            </SocialMediaDescription>
          </ContactListContainer>
        </SidebarContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default Sidebar
