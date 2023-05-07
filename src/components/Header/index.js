// Write your code here
import {Link} from 'react-router-dom'

import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'

import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import './index.css'

const overlayStyles = {
  backgroundColor: '#ffffff',
}

const Header = () => (
  <div className="nav-bar-container">
    <nav className="nav-bar">
      <Link to="/" className="nav-link">
        <img
          className="app-logo"
          alt="website logo"
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        />
      </Link>
      <div className="popup-container">
        <Popup
          modal
          trigger={
            <button
              data-testid="hamburgerIconButton"
              className="trigger-button"
              type="button"
            >
              <GiHamburgerMenu className="close-icon" />
            </button>
          }
          overlayStyle={overlayStyles}
          className="popup-content"
        >
          {close => (
            <div className="close-container">
              <button
                data-testid="closeButton"
                className="close-button"
                type="button"
                onClick={() => close()}
              >
                <IoMdClose className="close-icon" />
              </button>
              <ul className="home-about-icon-container">
                <li className="list-item">
                  <Link to="/" className="nav-link">
                    <button
                      className="home-button"
                      type="button"
                      onClick={() => close()}
                    >
                      <AiFillHome className="home-icon" />
                      Home
                    </button>
                  </Link>
                </li>
                <li className="list-item">
                  <Link to="/about" className="nav-link">
                    <button
                      className="home-button"
                      type="button"
                      onClick={() => close()}
                    >
                      <BsInfoCircleFill className="home-icon" />
                      About
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </Popup>
      </div>
    </nav>
  </div>
)

export default Header
