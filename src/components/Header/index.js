// Write your code here
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'

import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import './index.css'

const Header = () => (
  <div className="nav-bar-container">
    <nav className="nav-bar">
      <img
        className="app-logo"
        alt="website logo"
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
      />
      <div className="popup-container">
        <Popup
          modal
          trigger={
            <button className="trigger-button" type="button">
              <GiHamburgerMenu />
            </button>
          }
        >
          {close => (
            <div className="close-container">
              <button
                className="close-button"
                type="button"
                onClick={() => close()}
              >
                <IoMdClose />
              </button>
              <div className="home-about-icon-container">
                <AiFillHome />
                <BsInfoCircleFill />
              </div>
            </div>
          )}
        </Popup>
      </div>
    </nav>
  </div>
)

export default Header
