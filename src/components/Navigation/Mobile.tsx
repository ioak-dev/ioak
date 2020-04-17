import React, { useEffect, useState } from 'react';
import './style.scss';
import mirrorWhite from '../../images/ioak_white.svg';
import mirrorBlack from '../../images/ioak_black.svg';
import Links from './Links';
import { Authorization, Profile } from '../Types/GeneralTypes';
import SearchBar from '../../oakui/SearchBar';
import { receiveMessage } from '../../events/MessageService';

interface Props {
  sendEvent: Function;
  getAuth: Function;
  addAuth: Function;
  removeAuth: Function;
  authorization: Authorization;
  getProfile: Function;
  toggleDarkMode: Function;
  profile: Profile;
  transparent: boolean;
  toggleSettings: any;
}

const Mobile = (props: Props) => {
  const [data, setData] = useState({
    showSearchBar: false,
    menu: false,
  });

  useEffect(() => {
    props.getProfile();
  }, []);

  useEffect(() => {
    receiveMessage().subscribe(message => {
      if (message.name === 'show-navbar-element') {
        setData({ ...data, showSearchBar: message.signal });
      }
    });
  }, []);

  const toggleMenu = () => {
    setData({ ...data, menu: !data.menu });
  };

  return (
    <>
      <div
        className={
          props.transparent ? 'navbar mobile transparent' : 'navbar mobile'
        }
      >
        <div className="left">
          {props.profile.theme === 'theme_light' && (
            <img className="logo" src={mirrorBlack} alt="Mirror logo" />
          )}
          {props.profile.theme === 'theme_dark' && (
            <img className="logo" src={mirrorWhite} alt="Mirror logo" />
          )}
          {/* links */}
        </div>
        <div className="right">
          <div className="dark-mode">
            <i
              className="material-icons"
              onClick={() => props.toggleDarkMode()}
            >
              brightness_6
            </i>
          </div>
        </div>
      </div>
      <div
        className={data.menu ? 'slider show' : 'slider hide'}
        onClick={toggleMenu}
      >
        <div
          className={data.menu ? 'container' : 'container hidetext'}
          onClick={toggleMenu}
        >
          <div className="action">
            <div className="buttons" />
          </div>
          <Links authorization={props.authorization} profile={props.profile} />
        </div>
      </div>
    </>
  );
};

export default Mobile;
